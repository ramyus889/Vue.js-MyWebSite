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
  library: String,
  linkLibrary: String,
  imageLibrary: String,
  UIFrameworkT: String,
  linkUIFrameworkT: String,
  imageUIFrameworkT: String,
  ServisNetlify: String,
  linkServisNetlify: String,
  imageServisNetlify: String
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
        <a :href="link" target="_blank" class="text-start hover:underline">{{ description }}</a>
        <UseDialog
          :link="link"
          :image="image"
          :description="description"
          :title="title"
          :framework="framework"
          :linkFramework="linkFramework"
          :imageFramework="imageFramework"
          :library="library"
          :linkLibrary="linkLibrary"
          :imageLibrary="imageLibrary"
          :UIFrameworkT="UIFrameworkT"
          :linkUIFrameworkT="linkUIFrameworkT"
          :imageUIFrameworkT="imageUIFrameworkT"
          :UIFrameworkP="UIFrameworkP"
          :linkUIFrameworkP="linkUIFrameworkP"
          :imageUIFrameworkP="imageUIFrameworkP"
          :ServisNetlify="ServisNetlify"
          :linkServisNetlify="linkServisNetlify"
          :imageServisNetlify="imageServisNetlify"
        />
      </div>
    </div>
  </div>
</template>
