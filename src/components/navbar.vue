<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);
const isTop = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isTop.value = window.pageYOffset === 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section>
    <header
      :class="{
        'bg-slate-50 shadow-lg': !isTop,
        'bg-transparent backdrop-blur-xl': isTop,
        'fixed w-full top-0 z-10 transition-all duration-300': true,
      }">
      <nav
        class="container flex flex-col sm:flex-row justify-between items-center text-white py-6 px-10">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="../../favico.png"
            alt="Logo"
            class="h-9 mr-3" />
          <h1
            :class="{ 'text-black': !isTop }"
            class="text-xl font-mukta font-semibold">
            GLOBE TECH.
          </h1>
        </div>
        <button
          @click="toggleMenu"
          class="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            :fill="isTop ? 'white' : 'black'"
            class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </button>
        <!-- Menu for small screens -->
        <div
          v-show="isMenuOpen"
          :class="{
            'text-black': !isTop,
            'text-white': isTop,
            'opacity-0': !isMenuOpen,
            'opacity-100': isMenuOpen,
          }"
          class="sm:hidden text-center font-bold h-32 w-full transition duration-300 ease-in-out rounded-md">
          <span class="px-4">
            <RouterLink
              to="/"
              class="block hover:text-blue-500 duration-300"
              >Home</RouterLink
            >
            <RouterLink
              to="/about"
              class="block hover:text-blue-500 duration-300"
              >About</RouterLink
            >
          </span>
        </div>
        <!-- Menu for larger screens -->
        <div
          :class="{ 'text-black': !isTop, 'text-white': isTop }"
          class="hidden sm:flex items-center gap-4 font-bold">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <a
            href="#"
            class="hover:text-gray-300"
            >Services</a
          >
          <a
            href="#"
            class="hover:text-gray-300"
            >Contact</a
          >
        </div>
      </nav>
    </header>
  </section>
</template>
