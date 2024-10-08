<script setup>
import UseDrawer from './UseDrawer.vue';
</script>
<template>
  <header class="flex justify-between items-center px-5 py-2 border-b border-slate-600">
    <div class="flex gap-3 items-center">
      <img src="/img/Code/frontend.jpg" alt="" class="w-[60px] rounded-full" />
      <div class="*:font-bold leading-[23px] text-xl">
        <div class="">Frontend</div>
        <div class="">Developer</div>
      </div>
    </div>
    <div class="sm:hidden flex">
      <UseDrawer />
    </div>
    <div class="sm:flex hidden gap-5 pe-5">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </header>
</template>
