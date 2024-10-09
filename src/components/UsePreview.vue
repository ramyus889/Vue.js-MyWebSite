<script setup>
defineProps({
  id: Number,
  image: String,
  link: String,
  description: String
});
</script>

<template>
  <div
    class="md:max-w-[630px] relative w-full border border-slate-600 p-[15px] flex flex-col gap-4 justify-center"
  >
    <div class="flex justify-center items-center">
      <a :href="link" target="_blank">
        <img
          :src="image"
          class="hover:translate-y-[-5px] cursor-pointer rounded-xl transition-all duration-500 ease-in-out mb-12"
          alt=""
        />
      </a>
    </div>
    <div class="absolute bottom-0 left-0 right-0">
      <div class="flex justify-between items-center gap-10 px-3 py-6 text-[14px]">
        <div class="text-start">{{ description }}</div>
        <RouterLink to="#" class="hover:underline">Перейти →</RouterLink>
      </div>
    </div>
  </div>
</template>
