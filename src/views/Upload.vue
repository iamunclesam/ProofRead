<template>
  <main>
    <!-- Navbar Component -->
    <Navbar class="z-50" />
    <div class="pt-28">
      <Uploader />
    </div>
  </main>
</template>

<script>

import Navbar from '@/components/Layout/navbar.vue';
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase Storage APIs
import { initializeApp } from "firebase/app"; // Firebase initialization
import Uploader from '@/components/Uploader.vue';

export default {
  components: {
    Navbar,
    Uploader
  },
  data() {
    return {
      file: null,
      uploadProgress: 0,
      downloadURL: null,
    };
  },
  methods: {
    // Handle file selection
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    // Upload file to Firebase
    uploadFile() {
      if (!this.file) {
        alert("Please select a file first.");
        return;
      }

      // Initialize Firebase app (replace with your Firebase config)
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
      };

      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);

      // Create a storage ref
      const storageRef = ref(storage, 'documents/' + this.file.name);

      // Upload the file
      const uploadTask = uploadBytesResumable(storageRef, this.file);

      // Update progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadProgress = progress;
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          // Upload complete, get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.downloadURL = downloadURL;
          });
        }
      );
    },
  },
};
</script>

<style scoped>
.btn-primary {
  @apply bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition ease-in-out duration-300;
}

.hidden {
  display: none;
}

.r-side {
  background-image: url('../assets/img/rb_81905.png');
  background-size: cover;

}
</style>
