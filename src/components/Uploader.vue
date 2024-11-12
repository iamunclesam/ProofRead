<template>
    <div class="max-w-6xl mx-auto">

        <main class="flex flex-col md:flex-row justify-between md:p-10 p-4 py-4 gap-8 ">

            <!-- Left Side: Form for Document Upload -->
            <section class="w-full md:w-1/2">
                <h2 class="text-2xl font-bold mb-6">Upload Documents</h2>
                <p class="text-gray-600 mb-6">
                    Fill out the form and upload your document for proofreading and review.
                </p>

                <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Full Name Input -->
                    <div class="md:col-span-1">
                        <label for="fullName" class="block text-gray-700">Full Name</label>
                        <input v-model="formData.fullName" type="text" id="fullName"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Enter your full name" required />
                    </div>

                    <!-- Email Input -->
                    <div class="md:col-span-1">
                        <label for="email" class="block text-gray-700">Email</label>
                        <input v-model="formData.email" type="email" id="email"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Enter your email" required />
                    </div>

                    <!-- Document Title Input -->
                    <div class="md:col-span-1">
                        <label for="documentTitle" class="block text-gray-700">Document Title</label>
                        <input v-model="formData.documentTitle" type="text" id="documentTitle"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Enter document title" required />
                    </div>

                    <!-- Desired Editing Service Dropdown -->
                    <div class="md:col-span-1">
                        <label for="editingService" class="block text-gray-700">Desired Editing Service</label>
                        <select v-model="formData.editingService" id="editingService"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2" required>
                            <option disabled value="">Select a service</option>
                            <option v-for="(service, index) in editingServices" :key="index" :value="service.value">
                                {{ service.name }} - ${{ service.price }}
                            </option>
                        </select>
                    </div>

                    <!-- Additional Requests -->
                    <div class="md:col-span-2">
                        <label for="additionalRequests" class="block text-gray-700">Additional Requests</label>
                        <textarea v-model="formData.additionalRequests" id="additionalRequests"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Any specific editing requirements or deadline"></textarea>
                    </div>

                    <!-- File Upload -->
                    <div class="md:col-span-2">
                        <label for="documentFile" class="block text-gray-700">Upload Document (MS Word and PDF Formats
                            Only)</label>
                        <input type="file" @change="handleFileUpload" id="documentFile"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2" accept=".doc,.docx,.pdf"
                            required />
                    </div>

                    <!-- Submit Button -->
                    <div class="md:col-span-2">
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded" :disabled="isUploading">
                            {{ isUploading ? 'Uploading...' : 'Submit' }}
                        </button>
                    </div>
                </form>

            </section>

            <!-- Right Side: Illustration -->
            <section class="w-full md:w-1/2 hidden md:flex justify-center items-center  rounded">
                <img src="../assets/img/neww.png" alt="Upload Illustration" class="w-full h-auto" />
            </section>
        </main>
    </div>


</template>


<script>
import { storage, db } from '@/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { toast } from 'vue3-toastify';

export default {
    data() {
        return {
            formData: {
                fullName: '',
                email: '',
                documentTitle: '',
                editingService: '',
                additionalRequests: '',
                documentFile: null,
            },
            editingServices: [
                { name: 'One-off Editing', value: 'one-off', price: "30/ 1000 words " },
                { name: 'Basic Editing', value: 'basic', price:" 500 / 5 pages" },
                { name: 'Premium Editing', value: 'premium', price: "1500 / 20 pages" },
                { name: 'Elite Editing', value: 'elite', price: "3000 / 50 pages" },

            ],
            uploadProgress: 0,
            isUploading: false,
        };
    },
    computed: {
        selectedPrice() {
            const selectedService = this.editingServices.find(service => service.value === this.formData.editingService);
            return selectedService ? selectedService.price : 0;
        }
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.formData.documentFile = file;
            }
        },
        async submitForm() {
            const { fullName, email, documentTitle, editingService, documentFile } = this.formData;
            if (!fullName || !email || !documentTitle || !editingService || !documentFile) {
                alert('Please fill out all fields and upload a document.');
                return;
            }

            this.isUploading = true;

            // Upload file to Firebase Storage
            const storageRef = ref(storage, `documents/${documentFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, documentFile);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    console.error("Upload failed:", error);
                    this.isUploading = false;
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                    // Save document details to Firestore
                    try {
                        await addDoc(collection(db, 'documents'), {
                            fullName,
                            email,
                            documentTitle,
                            editingService,
                            additionalRequests: this.formData.additionalRequests,
                            fileURL: downloadURL,
                            timestamp: new Date(),
                        });

                        // Send email to the user
                        await this.sendEmail(fullName, email, documentTitle, editingService, this.formData.additionalRequests, downloadURL);

                        // Send email to the admin
                        // await this.sendEmailToAdmin(fullName, documentTitle, editingService, downloadURL);

                        toast.success("Document submitted successfully!", {
                            autoClose: 1000,
                            position: toast.POSITION.TOP_RIGHT,
                        });
                        this.resetForm();
                    } catch (error) {
                        console.error('Error saving document to Firestore:', error);
                        toast.warn("Something went wrong!", {
                            autoClose: 1000,
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    } finally {
                        this.isUploading = false;
                    }
                }
            );
        },

        async sendEmail(fullName, email, documentTitle, editingService, additionalInfo, downloadURL) {
            const templateParams = {
                to_name: fullName,
                message: `A new document has been uploaded successfully.\n\nDetails:\n- Document Title: ${documentTitle}\n- Editing Service: ${editingService}\n- 
                Additional Info: ${additionalInfo}\n-
                Download Link: ${downloadURL}`,
                reply_to: email,
            };

            try {
                await emailjs.send('service_zcxbref', 'template_py6qafm', templateParams, 'jtE-tiuDnIEkR3Z2G');
                console.log('User email sent successfully');
            } catch (error) {
                console.error('Error sending user email:', error);
            }
        },


        resetForm() {
            this.formData = {
                fullName: '',
                email: '',
                documentTitle: '',
                editingService: '',
                additionalRequests: '',
                documentFile: null,
            };
            this.uploadProgress = 0;
        },
    },
};
</script>
