<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header>
      <!-- Menggunakan komponen Navbar -->
      <Navbar />
    </header>

    <main>
      <RouterView />
      <Footer />
    </main>
  </div>
</template>
