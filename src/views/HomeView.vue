<script setup>
import { ref } from 'vue';
import Tabs from '../components/tab1.vue';
import gets from '../components/get.vue';

const showFullText = ref(false);

const fullText = `Globe Tech, LLC, is a Woman-Owned Small Business, that provides stamped and fabricated products, 
prototypes, tools, gages, and designs, as well as worldwide program management and procurement. 
We focus primarily on automotive and military production, but our depth of experience has allowed us to serve a broad range of industries. We are committed to meeting and exceeding the needs of our customers by providing quality products and exceptional service for machines, tooling, automation, system integration, and profitability. We are known for our expertise in early analysis and up-front development and engineering, which saves our customers time and money. We have a strong history of working with Joint Light Tactical Vehicles (JLTV) and High Mobility Multipurpose Wheeled Vehicle (HMMWV). Our team is currently in production of Explosive Hazard Pre-detonation (EHP) Rollers for Army Contracting Command.`;

const shortenedText = fullText.substring(0, 200) + '...';

const toggleText = () => {
  showFullText.value = !showFullText.value;
};

// Impor gambar
import bgImage from '../assets/img/Technology-Watch.jpg';
</script>

<style>
.text-shadow {
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.66);
}
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>

<template>
  <header
    id="up"
    class="bg-fixed bg-no-repeat bg-center h-screen relative">
    <!-- Overlay Background + Center Control -->
    <div
      class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      :style="{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }">
      <!-- Bind gambar dan properti lain sebagai latar belakang -->
      <div
        class="mx-5 text-center bg-black/90 rounded-xl animate-fade animate-ease-in-out duration-300">
        <div class="px-10 mt-8 mb-8">
          <h1 class="text-blue-400 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span class="text-white">Globe</span> Tech
          </h1>
          <h2 class="text-blue-500 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Get a <span class="text-white">Serving </span> those
            <span class="text-white">who </span> serve
          </h2>
        </div>
      </div>
    </div>
  </header>

  <!-- component -->

  <div
    class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 animate-fade-up animate-once animate-ease-in"
    data-taos-offset="300">
    <div class="rounded overflow-hidden flex flex-col max-w-5xl mx-auto">
      <img
        class="rounded-xl"
        src="https://globetech-us.com/wp-content/uploads/2021/09/GlobeTech_Family.jpg"
        alt="Sunset in the mountains" />
      <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 shadow-xl">
        <h1 class="font-bold font-mono text-5xl text-center pt-10">
          Who <span class="text-blue-500">We</span> Are
        </h1>
        <p class="text-gray-700 text-base p-10 text-center">
          <span v-if="!showFullText">{{ shortenedText }}</span>
          <span v-else>{{ fullText }}</span>
        </p>
        <button
          class="text-blue-500 mt-2 text-center"
          @click="toggleText">
          <span
            v-if="!showFullText"
            class="font-logo font-semibold text-2xl"
            >Read More</span
          >
          <span
            v-else
            class="font-logo font-semibold text-2xl"
            >Show Less</span
          >
        </button>
      </div>
    </div>
  </div>

  <div class="row mt-4 mb-10 p-4">
    <div class="col lg-10 m-auto">
      <h1 class="text-center font-logo text-3xl font-bold">
        Our <span class="text-blue-500">Expertise</span>
      </h1>
      <p class="text-center mt-5 font-logo text-lg">
        At Globe Tech, our expertise is to convert the ideas into new innovative technology. Also,
        we give the best solution in SMART technologies, <br />
        applications, and systems that combine with intelligent concepts to increase capability and
        profitability.
      </p>
    </div>
  </div>

  <!-- Tab buttons -->
  <div>
    <Tabs />
  </div>

  <div class="container mx-auto px-4">
    <div class="flex justify-start ml-10">
      <h1
        class="font-mukta font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-blue-500 p-4">
        What Will You Get
      </h1>
    </div>
    <div class="flex p-4">
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto mb-4">
        <gets />
      </div>
    </div>
  </div>
</template>
