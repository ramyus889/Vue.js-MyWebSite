<script setup>
import { routeUrl } from '@/router/routes';
import { useRoute } from 'vue-router';
import UseDrawer from './UseDrawer.vue';

const route = useRoute();
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-50 bg-[#181818] backdrop-blur-[50px] bg-opacity-[0.5]">
    <header class="flex items-center justify-between px-5 py-2 border-b border-slate-600">
      <RouterLink to="/" class="flex items-center gap-3">
        <img src="/img/Code/frontend.jpg" alt="" class="w-[60px] rounded-full" />
        <div class="*:font-bold leading-[23px] text-xl">
          <div class="">PortfolioDev</div>
        </div>
      </RouterLink>
      <div class="flex sm:hidden">
        <UseDrawer />
      </div>
      <div class="hidden gap-5 sm:flex pe-5">
        <RouterLink
          :to="`${routeUrl[2].path}`"
          :class="
            route.path === `${routeUrl[2].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          >Профиль</RouterLink
        >
        <RouterLink
          :to="`${routeUrl[0].path}`"
          :class="
            route.path === `${routeUrl[0].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          >Сайты</RouterLink
        >
        <RouterLink
          :to="`${routeUrl[1].path}`"
          :class="
            route.path === `${routeUrl[1].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          >Уровни навыков</RouterLink
        >
      </div>
    </header>
  </div>
</template>
