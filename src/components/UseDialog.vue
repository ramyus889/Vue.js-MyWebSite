<template>
  <div class="card flex justify-center">
    <Button label="Frameworks " @click="visible = true" text />
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
        <div class="flex flex-col gap-5 max-w-[630px]">
          <img :src="image" alt="" class="rounded-xl" />
        </div>
      </div>
      <div class="text-[24px] font-bold text-center mt-14">Технологий</div>
      <div class="flex sm:place-content-center place-self-start mb-3">
        <div
          class="grid min-[1760px]:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-[2150px]:gap-20 gap-x-36 gap-y-10 mt-8 px-1"
        >
          <div class="">
            <div class="text-[18px] font-bold mb-3">JS-фреймворк</div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-3">
                <img :src="imageFramework" alt="" class="w-[30px]" />
                <a :href="linkFramework" target="_blank" class="underline text-slate-400">{{
                  framework
                }}</a>
              </div>
              <div class="flex items-center gap-3">
                <img :src="imageFrameworkR" alt="" class="w-[30px]" />
                <a :href="linkFrameworkR" target="_blank" class="underline text-slate-400">{{
                  frameworkR
                }}</a>
              </div>
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
            <div class="">
              <div class="flex items-center gap-3 mb-3">
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
              <div class="flex items-center gap-3 mb-3">
                <img :src="imageUIFrameworkS" alt="" class="w-[30px]" />
                <a :href="linkUIFrameworkS" target="_blank" class="underline text-slate-400">{{
                  UIFrameworkS
                }}</a>
              </div>
              <div class="flex items-center gap-3">
                <img :src="imageUIFrameworkR" alt="" class="w-[30px]" />
                <a :href="linkUIFrameworkR" target="_blank" class="underline text-slate-400">{{
                  UIFrameworkR
                }}</a>
              </div>
            </div>
          </div>
          <div class="">
            <div class="text-[18px] font-bold mb-3">Сервис</div>
            <div class="flex items-center gap-3">
              <img :src="imageServis" alt="" class="w-[30px]" />
              <a :href="linkServis" target="_blank" class="underline text-slate-400">{{
                Servis
              }}</a>
            </div>
          </div>
          <div class="">
            <div class="text-[18px] font-bold mb-3">{{ titleServer }}</div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-3">
                <img :src="imageServer" alt="" class="w-[30px]" />
                <a :href="linkServer" target="_blank" class="underline text-slate-400">{{
                  Server
                }}</a>
              </div>
              <div class="flex items-center gap-3">
                <img :src="imageServerS" alt="" class="w-[30px]" />
                <a :href="linkServerS" target="_blank" class="underline text-slate-400">{{
                  ServerS
                }}</a>
              </div>
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
  frameworkR: String,
  linkFrameworkR: String,
  imageFrameworkR: String,
  library: String,
  linkLibrary: String,
  imageLibrary: String,
  UIFrameworkT: String,
  linkUIFrameworkT: String,
  imageUIFrameworkT: String,
  UIFrameworkP: String,
  linkUIFrameworkP: String,
  imageUIFrameworkP: String,
  UIFrameworkS: String,
  linkUIFrameworkS: String,
  imageUIFrameworkS: String,
  UIFrameworkR: String,
  linkUIFrameworkR: String,
  imageUIFrameworkR: String,
  Servis: String,
  linkServis: String,
  imageServis: String,
  titleServer: String,
  Server: String,
  linkServer: String,
  imageServer: String,
  ServerS: String,
  linkServerS: String,
  imageServerS: String
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
