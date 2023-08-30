<script setup>
import { ref } from 'vue';

const activeTab = ref('tab1');
</script>

<style>
.border-gradient-t-b {
  position: relative;
}

.border-gradient-t-b::before,
.border-gradient-t-b::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background-image: linear-gradient(
    to right,
    #3b82f6,
    #3dfcbc,
    #3b82f6
  ); /* Anda bisa mengubah ini sesuai dengan warna gradient yang Anda inginkan atau gunakan variabel CSS jika didefinisikan */
  left: 0;
}

.border-gradient-t-b::before {
  top: 0;
}

.border-gradient-t-b::after {
  bottom: 0;
}
</style>

<template>
  <div class="flex flex-col mt-4 mb-4">
    <div class="w-full mx-auto">
      <div class="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:flex-no-wrap">
        <button
          @click="activeTab = 'tab1'"
          :class="
            activeTab === 'tab1'
              ? 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 rounded-xl text-white duration-300'
              : ''
          "
          class="mb-2 sm:mb-0 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-xl font-logo font-semibold">
          Software Development
        </button>
        <button
          @click="activeTab = 'tab2'"
          :class="
            activeTab === 'tab2'
              ? 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 rounded-xl text-white duration-300'
              : ''
          "
          class="mb-2 sm:mb-0 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-xl font-logo font-semibold">
          System integration
        </button>
        <button
          @click="activeTab = 'tab3'"
          :class="
            activeTab === 'tab3'
              ? 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 rounded-xl text-white duration-300'
              : ''
          "
          class="mb-2 sm:mb-0 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-xl font-logo font-semibold">
          Internet Of Things
        </button>
        <button
          @click="activeTab = 'tab4'"
          :class="
            activeTab === 'tab4'
              ? 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 rounded-xl text-white duration-300'
              : ''
          "
          class="mb-2 sm:mb-0 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-xl font-logo font-semibold">
          Artificial Intelligence
        </button>
      </div>
    </div>
  </div>

  <!-- Tab content -->
  <div
    v-if="activeTab === 'tab1'"
    class="p-4 grid md:grid-cols-2 items-center border-t-4 border-b-4 border-gradient-t-b mb-5 m-0">
    <p class="mb-4 p-4 font-serif text-xl text-gray-700 font-thin md:col-span-1">
      <span class="text-2xl font-semibold text-black"> Values of Software Dev.</span>
      <br />
      Scalable and industry-compliant software development for OS (android &amp; ios), websites and
      any device. We provide customized solutions and products.
    </p>

    <img
      class="w-full h-[550px] object-cover rounded-xl shadow-xl hidden md:block"
      src="../../src/assets/img/DNA.jpg"
      alt="" />
  </div>
  <div
    v-if="activeTab === 'tab2'"
    class="p-4 grid md:grid-cols-2 items-center border-t-4 border-b-4 border-gradient-t-b mb-5 m-0">
    <p class="mb-4 p-4 font-serif text-xl text-gray-700 font-thin md:col-span-1">
      <span class="text-2xl font-semibold text-black"> Values of System Integration.</span>
      <br />
      We are creating sustainable system for any bussiness technology 4.0 and powerfull system with
      more benefits, we integrating all the physical and virtual components of an organization’s
      system.
    </p>
    <img
      class="w-full h-[550px] object-cover rounded-xl shadow-xl hidden md:block"
      src="../../src/assets/img/Scale.jpeg"
      alt="" />
  </div>

  <div
    v-if="activeTab === 'tab3'"
    class="p-4 grid md:grid-cols-2 items-center border-t-4 border-b-4 border-gradient-t-b mb-5 m-0">
    <p class="mb-4 p-4 font-serif text-xl text-gray-700 font-thin md:col-span-1">
      <span class="text-2xl font-semibold text-black"> Values of IoT.</span>
      <br />
      Create and design Smart Applications with 4.0 technology that can be used to help human
      activities & needs become more practical by connecting and managing IoT devices anywhere and
      anytime.
    </p>
    <img
      class="w-full h-[550px] object-cover rounded-xl shadow-xl hidden md:block"
      src="../../src/assets/img/camera.jpg"
      alt="" />
  </div>

  <div
    v-if="activeTab === 'tab4'"
    class="p-4 grid md:grid-cols-2 items-center border-t-4 border-b-4 border-gradient-t-b mb-5 m-0">
    <p class="mb-4 p-4 font-serif text-xl text-gray-700 font-thin md:col-span-1">
      <span class="text-2xl font-semibold text-black"> Values of AI.</span>
      <br />
      We are engaged in Artificial Intelligence with a focus on data science and machine learning to
      support our application systems for industrial needs.
    </p>
    <img
      class="w-full h-[550px] object-cover rounded-xl shadow-xl hidden md:block"
      src="../../src/assets/img/robot.png"
      alt="" />
  </div>
</template>
