<script setup lang="ts">
import UseDialog from './UseDialog.vue';

defineProps({
  id: Number,
  gitLink: String,
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
  imageServerS: String,
  delay: Number
});
</script>

<template>
  <div
    data-aos="fade-up"
    :data-aos-delay="delay"
    class="min-[1320px]:max-w-[630px] relative w-full border border-slate-600 rounded-xl sm:p-[15px] p-[10px] flex flex-col gap-5 justify-between"
  >
    <div class="">
      <div class="flex justify-between items-center gap-10 text-[14px] px-3">
        <a :href="link" target="_blank" class="truncate text-start hover:underline">{{
          description
        }}</a>

        <a :href="gitLink" target="_blank" class="cursor-pointer"
          ><img src="/github.svg" width="25" alt=""
        /></a>
      </div>
      <UseDialog
        :link="link"
        :image="image"
        :description="description"
        :title="title"
        :framework="framework"
        :linkFramework="linkFramework"
        :imageFramework="imageFramework"
        :frameworkR="frameworkR"
        :linkFrameworkR="linkFrameworkR"
        :imageFrameworkR="imageFrameworkR"
        :library="library"
        :linkLibrary="linkLibrary"
        :imageLibrary="imageLibrary"
        :UIFrameworkT="UIFrameworkT"
        :linkUIFrameworkT="linkUIFrameworkT"
        :imageUIFrameworkT="imageUIFrameworkT"
        :UIFrameworkS="UIFrameworkS"
        :linkUIFrameworkS="linkUIFrameworkS"
        :imageUIFrameworkS="imageUIFrameworkS"
        :UIFrameworkP="UIFrameworkP"
        :linkUIFrameworkP="linkUIFrameworkP"
        :imageUIFrameworkP="imageUIFrameworkP"
        :UIFrameworkR="UIFrameworkR"
        :linkUIFrameworkR="linkUIFrameworkR"
        :imageUIFrameworkR="imageUIFrameworkR"
        :Servis="Servis"
        :linkServis="linkServis"
        :imageServis="imageServis"
        :titleServer="titleServer"
        :Server="Server"
        :linkServer="linkServer"
        :imageServer="imageServer"
        :ServerS="ServerS"
        :linkServerS="linkServerS"
        :imageServerS="imageServerS"
      />
    </div>
    <div class="flex items-center justify-center">
      <a :href="link" target="_blank">
        <img
          :src="image"
          class="transition-all duration-500 ease-in-out cursor-pointer rounded-xl"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
