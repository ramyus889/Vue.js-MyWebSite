<script setup>
import UseDialog from './UseDialog.vue';

defineProps({
  id: Number,
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
</script>

<template>
  <div
    class="md:max-w-[630px] relative w-full border border-slate-600 p-[15px] flex flex-col gap-4 justify-center"
  >
    <div class="flex justify-center items-center">
      <a :href="link" target="_blank">
        <img
          :src="image"
          class="hover:translate-y-[-5px] cursor-pointer rounded-xl transition-all duration-500 ease-in-out mb-16"
          alt=""
        />
      </a>
    </div>
    <div class="absolute bottom-0 left-0 right-0">
      <div class="flex justify-between items-center gap-10 px-3 py-6 text-[14px]">
        <a :href="link" target="_blank" class="text-start hover:underline truncate ps-3">{{
          description
        }}</a>
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
    </div>
  </div>
</template>
