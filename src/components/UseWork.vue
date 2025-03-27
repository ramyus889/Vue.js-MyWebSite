<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Portfolio | Work';
});
</script>

<template>
  <div class="py-8 mt-25 flex flex-col items-center gap-5">
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="font-bold text-center uppercase sm:text-6xl md:text-7xl text-4xl"
    >
      Сайты
    </p>
    <div class="flex items-center gap-4">
      <img data-aos="fade-up" data-aos-delay="300" src="/vue.svg" alt="" />
      <div data-aos="fade-up" data-aos-delay="300" class="text-3xl font-bold text-[#42B883]">
        Vue.js
      </div>
    </div>
  </div>
</template>
