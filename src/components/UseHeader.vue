<script setup>
import { routeUrl } from '@/router/routes';
import UseDrawer from './UseDrawer.vue';
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
        <RouterLink :to="`${routeUrl[2].path}`" class="">Profile</RouterLink>
        <RouterLink :to="`${routeUrl[0].path}`">Work</RouterLink>
        <RouterLink :to="`${routeUrl[1].path}`" class="">Skills</RouterLink>
      </div>
    </header>
  </div>
</template>
