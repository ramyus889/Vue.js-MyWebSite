<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Portfolio | Work';
});
</script>

<template>
  <div class="py-8 mt-20">
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="pb-5 font-bold text-center uppercase text-7xl"
    >
      Сайты
    </p>

    <div class="">
      <div class="flex items-center justify-center">
        <div class="text-center text-[20px] pt-5 max-w-[500px]">
          <div data-aos="fade-up" data-aos-delay="200" class="px-5">
            Эти сайты были разработаны мной исключительно для включения в портфолио и были
            развернуты на платформе <span class="text-green-500">Netlify (Vue.js)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
