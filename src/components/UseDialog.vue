<template>
  <div class="card flex justify-center">
    <Button label="Перейти →" @click="visible = true" text />
    <Dialog
      v-model:visible="visible"
      modal
      :header="title"
      :style="{ width: '50vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      @open="disableScroll"
      @close="enableScroll"
    >
      <div class="flex place-content-center">
        <div class="flex flex-col gap-5">
          <img :src="image" alt="" class="max-w-[630px] rounded-xl" />
        </div>
      </div>
      <div class="text-[24px] font-bold text-center mt-10">Технологий</div>
      <div class="flex place-content-center">
        <div class="grid grid-cols-4 gap-36 mt-5 px-10">
          <div class="">
            <div class="text-[18px] font-bold mb-3">JS-фреймворк</div>
            <div class="flex items-center gap-3">
              <img :src="imageFramework" alt="" class="w-[30px]" />
              <a :href="linkFramework" target="_blank" class="underline text-slate-400">{{
                framework
              }}</a>
            </div>
          </div>
          <div class="">
            <div class="text-[18px] font-bold mb-3">JS-библиотека</div>
            <div class="flex items-center gap-3">
              <img :src="imageLibrary" alt="" class="w-[30px]" />
              <a :href="linkLibrary" target="_blank" class="underline text-slate-400">{{
                library
              }}</a>
            </div>
          </div>
          <div class="">
            <div class="text-[18px] font-bold mb-3">UI Фреймворк</div>
            <div class="flex items-center gap-3 mb-2">
              <img :src="imageUIFrameworkT" alt="" class="w-[30px]" />
              <a :href="linkUIFrameworkT" target="_blank" class="underline text-slate-400">{{
                UIFrameworkT
              }}</a>
            </div>
            <div class="flex items-center gap-3">
              <img :src="imageUIFrameworkP" alt="" class="w-[30px]" />
              <a :href="linkUIFrameworkP" target="_blank" class="underline text-slate-400">{{
                UIFrameworkP
              }}</a>
            </div>
          </div>
          <div class="">
            <div class="text-[18px] font-bold mb-3">Сервис</div>
            <div class="flex items-center gap-3">
              <img :src="imageServisNetlify" alt="" class="w-[30px]" />
              <a :href="linkServisNetlify" target="_blank" class="underline text-slate-400">{{
                ServisNetlify
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const visible = ref(false);

defineProps({
  image: String,
  link: String,
  description: String,
  title: String,
  framework: String,
  linkFramework: String,
  imageFramework: String,
  library: String,
  linkLibrary: String,
  imageLibrary: String,
  UIFrameworkT: String,
  linkUIFrameworkT: String,
  imageUIFrameworkT: String,
  UIFrameworkP: String,
  linkUIFrameworkP: String,
  imageUIFrameworkP: String,
  ServisNetlify: String,
  linkServisNetlify: String,
  imageServisNetlify: String
});
const disableScroll = () => {
  document.body.classList.add('no-scroll');
};

const enableScroll = () => {
  document.body.classList.remove('no-scroll');
};
</script>

<style>
.no-scroll {
  overflow: hidden;
  height: 100%; /* Блокировка высоты окна */
  transition: overflow 0.5s ease; /* Плавный переход для overflow */
}
body {
  transition: overflow 0.5s ease; /* Плавный переход для скролла */
}
</style>
