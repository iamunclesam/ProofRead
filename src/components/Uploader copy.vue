<template>
    <div class="max-w-6xl mx-auto">

        <form class="flex flex-col md:flex-row justify-between md:p-10 p-4 py-4 gap-8 ">

            <!-- Left Side: Form for Document Upload -->
            <section class="w-full md:w-1/2">
                <h2 class="text-2xl font-bold mb-6">Upload Documents</h2>
                <p class="text-gray-600 mb-6">
                    Fill out the form and upload your document for proofreading and review.
                </p>

                <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div class="md:col-span-2">
                        <label for="documentTitle" class="block text-gray-700">Document Title</label>
                        <input v-model="formData.documentTitle" type="text" id="documentTitle"
                            class="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Enter document title" required />
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
                </form>
            </section>

            <!-- Right Side: Illustration -->
            <section class="w-full md:w-1/2 rounded">
                <h1 class="text-md text-gray-500 mb-2">Select Preferred Package</h1>
                <div class="md:col-span-2">
                    <label
                        class="flex justify-between  space-x-2 cursor-pointer border border-gray-200 py-4 px-4 mb-4 rounded w-full transition-colors duration-300 delay-100"
                        @click="selectPayment('BasicPlan', 'Basic Package - $800')">

                        <div class="">
                            <span class="text-gray-700 font-medium">Starter Package</span>
                            <h1 class="text-2xl">$800 - 3 days</h1>
                            <p class="text-sm text-gray-500"> Up to 30 thousand words of editing and proofreading</p>

                        </div>
                        <input type="radio" name="payment"
                            class="form-radio peer rounded-full h-4 w-4 text-green-600 text-green-600 focus:ring-green-500"
                            :checked="formData.selectedPayment === 'BasicPlan'"  
                            />
                    </label>
                </div>

                <div class="md:col-span-2">
                    <label
                        class="flex justify-between  space-x-2 cursor-pointer border border-gray-200 py-4 px-4 mb-4 rounded w-full transition-colors duration-300 delay-100"
                        @click="selectPayment('Premium', 'Premium Package - $1500')">

                        <div class="">
                            <span class="text-gray-700 font-medium">Premium Package</span>
                            <h1 class="text-2xl">$1,500 - 7 days</h1>
                            <p class="text-sm text-gray-500">Up to 60 thousand words
                                of editing and proofreading</p>

                        </div>
                        <input type="radio" name="payment"
                            class="form-radio peer rounded-full h-4 w-4 text-green-600 text-green-600 focus:ring-green-500"
                            :checked="formData.selectedPayment === 'Premium'"  
                        />
                    </label>
                </div>

                <div class="md:col-span-2">
                    <label
                        class="flex justify-between  space-x-2 cursor-pointer border border-gray-200 py-4 px-4 mb-4 rounded w-full transition-colors duration-300 delay-100"
                        @click="selectPayment('Elite', 'Elite - $3000')">

                        <div class="">
                            <span class="text-gray-700 font-medium">Elite Package</span>
                            <h1 class="text-2xl">$3,000 - 1 Month </h1>
                            <p class="text-sm text-gray-500"> Unlimited editing and proofreading for a month</p>

                        </div>
                        <input type="radio" name="payment"
                            class="form-radio peer rounded-full h-4 w-4 text-green-600 text-green-600 focus:ring-green-500"
                            :checked="formData.selectedPayment === 'Elite'"  
                             />
                    </label>
                </div>


                <!-- Submit Button -->
                <div class="md:col-span-2">
                    <button @click.prevent="submitForm" :disabled="!isFormValid || isUploading"
                        class="px-4 py-2 rounded text-white transition-all duration-300" :class="{
                            'bg-blue-500 hover:bg-blue-600 cursor-pointer': isFormValid && !isUploading,
                            'bg-gray-300 cursor-not-allowed': !isFormValid || isUploading
                        }">
                        {{ isUploading ? 'Uploading...' : 'Submit' }}
                    </button>

                </div>
            </section>
        </form>
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
                selectedPayment: ''
            },
            uploadProgress: 0,
            isUploading: false,
        };
    },
    computed: {
       

        isFormValid() {
            const { fullName, email, documentTitle, documentFile } = this.formData;
            return fullName && email && documentTitle && documentFile; // Ensure all required fields are filled
        }
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.formData.documentFile = file;
            }
        },
        selectPayment(paymentMethod, servicePlan) {
            this.formData.editingService = servicePlan;
            this.formData.selectedPayment = paymentMethod
            console.log(this.editingService);
            
        },
        async submitForm() {
            const { fullName, email, documentTitle, editingService, documentFile } = this.formData;
            console.log(this.formData);
            
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
                        this.$router.push('/thank-you')
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
