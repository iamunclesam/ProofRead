<template>
    <main class="flex flex-col md:flex-row justify-between p-10 gap-8 max-w-6xl mx-auto">
      <!-- Left Side: Upload Cards -->
      <section class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-6">Upload documents</h2>
        <p class="text-gray-600 mb-6">
          To ensure the accuracy of your document, please upload your files for proofreading.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
          <!-- Card 1: ID Card Upload -->
          <div class="border border-gray-200 rounded-lg p-4 text-center shadow">
            <img
              v-if="!filePreviews.idCard"
              src="../assets/img/filey.png"
              alt="File Icon"
              class="mx-auto mb-4 w-48 h-48 border border-gray-100"
            />
            <img
              v-else
              :src="filePreviews.idCard"
              alt="Document Preview"
              class="mx-auto mb-4 w-48 h-48 object-cover border border-gray-100"
            />
  
            <input type="file" @change="handleFileUpload('idCard')" class="hidden" ref="idCardInput" />
            <button @click="selectFile('idCard')" class="text-blue-600 underline mb-2 mr-2">Browse</button>
            <button
              @click="uploadFile('idCard')"
              class="bg-blue-500 text-white px-4 py-2 rounded"
              :disabled="isUploading"
            >
              {{ isUploading ? 'Uploading...' : 'Upload' }}
            </button>
  
            <!-- Progress Bar -->
            <div v-if="uploadProgress.idCard > 0" class="w-full bg-gray-200 rounded-full h-6 mb-4">
              <div :style="{ width: uploadProgress.idCard + '%' }" class="bg-blue-600 h-full rounded-full"></div>
            </div>
  
            <!-- Uploaded file link -->
            <!-- <div v-if="downloadURL.idCard" class="mt-4">
              <p class="text-green-600">
                Upload successful! Download your file <a :href="downloadURL.idCard" class="underline">here</a>.
              </p>
            </div> -->
          </div>
        </div>
      </section>
  
      <!-- Right Side: Illustration -->
      <section class="w-full md:w-1/2 hidden  md:flex justify-center items-center bg-gray-100 rounded">
        <img src="../assets/img/neww.png" alt="Upload Illustration" class="w-full h-auto" />
      </section>
  
      <!-- Success Modal -->
      <div v-if="showSuccessModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div id="successModal" tabindex="-1" aria-hidden="true"
                class="overflow-y-auto overflow-x-hidden flex z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button type="button"
                            class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="successModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div
                            class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" class="w-8 h-8 text-green-500 dark:text-green-400"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Success</span>
                        </div>
                        <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully uploaded
                            document.</p>
                        <button data-modal-toggle="successModal" type="button"
                            class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </main>
  </template>
  
  <script>
  // Import Firebase services
  import { storage } from '@/firebase'; // Adjust the import path according to your project structure
  import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
  
  export default {
    data() {
      return {
        fileInputs: {
          idCard: null,
        },
        filePreviews: {
          idCard: null,
        },
        uploadProgress: {
          idCard: 0,
        },
        downloadURL: {
          idCard: null,
        },
        isUploading: false,
        showSuccessModal: false,
      };
    },
    methods: {
      selectFile(type) {
        this.$refs[`${type}Input`].click(); // Trigger hidden file input
      },
      handleFileUpload(type) {
        const file = this.$refs[`${type}Input`].files[0];
        if (file) {
          this.fileInputs[type] = file;
  
          // Create a file preview URL
          this.filePreviews[type] = URL.createObjectURL(file);
        }
      },
      uploadFile(type) {
        const file = this.fileInputs[type];
        if (!file) {
          alert("Please select a file first.");
          return;
        }
  
        this.isUploading = true;
  
        // Create a storage reference for the file
        const storageRef = ref(storage, `documents/${file.name}`);
  
        // Start the upload
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        // Monitor the upload progress
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploadProgress[type] = progress;
          },
          (error) => {
            console.error("Upload failed:", error);
            this.isUploading = false;
          },
          () => {
            // Upload complete, get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              this.downloadURL[type] = url;
              this.isUploading = false;
              this.showSuccessModal = true;
  
              // Reset form after successful upload
              this.resetForm(type);
            });
          }
        );
      },
      resetForm(type) {
        this.fileInputs[type] = null;
        this.filePreviews[type] = null;
        this.uploadProgress[type] = 0;
      },
      closeModal() {
        this.showSuccessModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Customize styling if needed */
  </style>
  