<script setup>
import UseDrawer from './UseDrawer.vue';
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-50 bg-[#181818] backdrop-blur-[50px] bg-opacity-[0.5]">
    <header class="flex justify-between items-center px-5 py-2 border-b border-slate-600">
      <RouterLink to="/" class="flex gap-3 items-center">
        <img src="/img/Code/frontend.jpg" alt="" class="w-[60px] rounded-full" />
        <div class="*:font-bold leading-[23px] text-xl">
          <div class="">Frontend</div>
          <div class="">Developer</div>
        </div>
      </RouterLink>
      <div class="sm:hidden flex">
        <UseDrawer />
      </div>
      <div class="sm:flex hidden gap-5 pe-5">
        <RouterLink to="/">Home</RouterLink>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </header>
  </div>
</template>
