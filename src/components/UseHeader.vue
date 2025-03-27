<script setup lang="ts">
import { routeUrl } from '@/router/routes';
import { useRoute } from 'vue-router';
import UseDrawer from './UseDrawer.vue';

const route = useRoute();
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-50 mt-3 sm:px-5 px-3">
    <div class="flex items-center justify-center w-full">
      <div
        class="border border-slate-600 px-3 py-2 rounded-xl bg-[#181818]/60 backdrop-blur-2xl flex items-center justify-between max-w-[1330px] w-full"
      >
        <RouterLink to="/" class="flex gap-2 items-center">
          <img src="/img/Code/frontend.jpg" class="w-[50px] rounded-full" alt="" />
          <div class="text-[20px] font-semibold">Portfolio</div>
        </RouterLink>
        <div class="flex sm:hidden">
          <UseDrawer />
        </div>
        <div class="hidden gap-4 sm:flex pe-5">
          <RouterLink
            :to="`${routeUrl[0].path}`"
            :class="
              route.path === `${routeUrl[0].path}` ? ' text-green-500 font-bold transition-all' : ''
            "
            >Сайты</RouterLink
          >
          <RouterLink
            :to="`${routeUrl[1].path}`"
            :class="
              route.path === `${routeUrl[1].path}` ? ' text-green-500 font-bold transition-all' : ''
            "
            >Уровни навыков</RouterLink
          >
          <RouterLink
            :to="`${routeUrl[2].path}`"
            :class="
              route.path === `${routeUrl[2].path}` ? ' text-green-500 font-bold transition-all' : ''
            "
            >Профиль</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
