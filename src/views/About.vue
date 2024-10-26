<template>
    <div class="about-page">
      <!-- Welcome Section -->
      <section class="text-center py-10 bg-gray-100">
        <h1 class="text-4xl font-bold mb-4">Welcome to AceStyle Editing!</h1>
        <p class="text-lg max-w-4xl mx-auto">
          At AceStyle Editing, we're passionate about helping academics, researchers, and writers
          refine their work and achieve publishing success. Our team of experienced editors,
          proofreaders, and writers are dedicated to providing exceptional editing services.
        </p>
      </section>
  
      <!-- Team Section -->
      <section class="py-10">
        <h2 class="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20">
          <div class="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4">
            <h4 class="text-xl font-semibold">John Smith</h4>
            <p class="text-gray-600">John has over 10 years of experience in academic editing and specializes in research paper editing.</p>
          </div>
          <div class="team-member text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4">
            <h4 class="text-xl font-semibold">Jane Doe</h4>
            <p class="text-gray-600">Jane is a meticulous proofreader with a sharp eye for grammar, punctuation, and clarity.</p>
          </div>
          <!-- Add more team members as needed -->
        </div>
      </section>
  
      <!-- Values Section -->
      <section class="bg-gray-50 py-10">
        <h2 class="text-3xl font-bold text-center mb-8">Our Values</h2>
        <ul class="list-disc list-inside max-w-xl mx-auto text-center">
          <li>Quality and attention to detail</li>
          <li>Timely delivery and reliability</li>
          <li>Confidentiality and security</li>
          <li>Collaboration and communication</li>
        </ul>
      </section>
  
      <!-- Services Section -->
      <section class="py-10">
        <h2 class="text-3xl font-bold text-center mb-8">Services</h2>
        <div class="max-w-4xl mx-auto">
          <div v-for="service in services" :key="service.title" class="mb-6">
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <ul class="list-disc list-inside pl-4">
              <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="bg-gray-100 py-10">
        <h2 class="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div class="max-w-4xl mx-auto">
          <div v-for="testimonial in testimonials" :key="testimonial.author" class="mb-6">
            <blockquote class="text-lg italic text-gray-700">"{{ testimonial.text }}"</blockquote>
            <cite class="text-gray-600">- {{ testimonial.author }}</cite>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="py-10">
        <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div class="max-w-lg mx-auto">
          <p>Email: <a href="mailto:info@acestyleediting.com" class="text-blue-600">info@acestyleediting.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: [Insert address]</p>
  
          <h3 class="text-xl font-semibold mt-6">Submit your document or inquiry:</h3>
          <form @submit.prevent="submitForm" class="mt-4 space-y-4">
            <input type="text" v-model="contactForm.name" placeholder="Your Name" required class="w-full p-2 border border-gray-300 rounded" />
            <input type="email" v-model="contactForm.email" placeholder="Your Email" required class="w-full p-2 border border-gray-300 rounded" />
            <textarea v-model="contactForm.message" placeholder="Your Message" required class="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
          </form>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="bg-gray-50 py-10">
        <h2 class="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div class="max-w-4xl mx-auto">
          <div v-for="faq in faqs" :key="faq.question" class="mb-6">
            <h4 class="text-xl font-semibold">{{ faq.question }}</h4>
            <p class="text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { title: 'Dissertation Editing', details: ['Proposal editing', 'Chapter-by-chapter editing', 'Final draft review'] },
          { title: 'Thesis Editing', details: ['Research paper editing', 'Essay editing', 'Formatting and styling'] },
          { title: 'Research Paper Editing', details: ['Journal article editing', 'Conference paper editing', 'Poster editing'] },
          { title: 'Proofreading', details: ['Grammar and punctuation check', 'Spelling and consistency review', 'Formatting correction'] },
          { title: 'Content Writing', details: ['Research writing', 'Academic writing', 'Business writing'] }
        ],
        testimonials: [
          { text: 'AceStyle Editing helped me refine my dissertation, ensuring error-free and polished content.', author: 'Dr. Jane Smith' },
          { text: 'I was impressed by the prompt service and meticulous editing.', author: 'John Doe, Researcher' },
          { text: 'AceStyle Editing exceeded my expectations with their thorough and constructive feedback.', author: 'Emily Chen, Student' }
        ],
        contactForm: {
          name: '',
          email: '',
          message: ''
        },
        faqs: [
          { question: 'What types of documents do you edit?', answer: 'We edit academic papers, research papers, dissertations, theses, essays, and business documents.' },
          { question: 'How long does the editing process take?', answer: 'Turnaround times vary depending on document length and complexity.' },
          { question: 'Do you offer discounts?', answer: 'Yes, we offer discounts for bulk orders and long-term collaborations.' },
          { question: 'How secure is my document?', answer: 'We ensure confidentiality and security through encrypted file transfer and storage.' }
        ]
      };
    },
    methods: {
      submitForm() {
        alert(`Message sent by ${this.contactForm.name}`);
        this.contactForm.name = '';
        this.contactForm.email = '';
        this.contactForm.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  