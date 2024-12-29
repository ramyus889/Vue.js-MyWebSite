<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';

defineProps({
  id: Number,
  title: String,
  linkTitle1: String,
  linkTitle2: String,
  gitTitle: String,
  linkGithub: String,
  delay: Number
});

const starShow = ref(false);
</script>
<template>
  <div
    data-aos="fade-up"
    :data-aos-delay="delay"
    class="sm:px-[24px] px-[15px] py-[22px] border border-[#242424] shadow-lg bg-[#0A0A0A] rounded-xl min-[1100px]:max-w-[435px]"
  >
    <div class="flex justify-between">
      <div class="inline-flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div class=""><img src="/netlify.svg" alt="" class="w-[32px]" /></div>
          <div class="flex flex-col truncate">
            <div class="text-[14px] font-bold">{{ title }}</div>
            <a :href="linkTitle2" target="_blank" class="text-[#a1a1a1] hover:underline">{{
              linkTitle1
            }}</a>
          </div>
        </div>
        <div
          class="bg-[#1a1a1a] px-[14px] py-[8px] rounded-full flex place-content-center gap-1 items-center"
        >
          <div class=""><img src="/github.svg" alt="" class="w-[16px]" /></div>
          <a :href="linkGithub" target="_blank" class="truncate">ramyus889/{{ gitTitle }}</a>
        </div>
      </div>
      <div class="">
        <Button
          type="button"
          text
          :icon="starShow ? 'pi pi-star-fill' : 'pi pi-star'"
          @click="starShow = !starShow"
        >
        </Button>
      </div>
    </div>
  </div>
</template>
