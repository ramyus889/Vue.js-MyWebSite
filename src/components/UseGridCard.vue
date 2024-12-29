<script setup>
import UsePreview from './UsePreview.vue';

import { items1, items2 } from '../Items';
</script>
<template>
  <div class="mt-2 border border-slate-600"></div>
  <div data-aos="fade-up" data-aos-delay="300" class="px-5 pt-6 pb-3 text-3xl font-bold">
    Vue.js (Netlify)
  </div>
  <div class="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <UsePreview
      v-for="item in items1"
      :key="item.id"
      :gitLink="item.gitLink"
      :image="item.image"
      :link="item.link"
      :description="item.description"
      :title="item.title"
      :framework="item.framework"
      :linkFramework="item.linkFramework"
      :imageFramework="item.imageFramework"
      :library="item.library"
      :linkLibrary="item.linkLibrary"
      :imageLibrary="item.imageLibrary"
      :UIFrameworkT="item.UIFrameworkT"
      :linkUIFrameworkT="item.linkUIFrameworkT"
      :imageUIFrameworkT="item.imageUIFrameworkT"
      :UIFrameworkP="item.UIFrameworkP"
      :linkUIFrameworkP="item.linkUIFrameworkP"
      :imageUIFrameworkP="item.imageUIFrameworkP"
      :Servis="item.Servis"
      :linkServis="item.linkServis"
      :imageServis="item.imageServis"
      :delay="item.delay"
    />
  </div>
  <div class="border border-slate-600 mt-[100px]"></div>
  <div data-aos="fade-up" data-aos-delay="200" class="px-5 pt-20 pb-3 text-3xl font-bold">
    Next.js (Vercel)
  </div>
  <div class="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <UsePreview
      v-for="item in items2"
      :key="item.id"
      :image="item.image"
      :gitLink="item.gitLink"
      :link="item.link"
      :description="item.description"
      :title="item.title"
      :framework="item.framework"
      :linkFramework="item.linkFramework"
      :imageFramework="item.imageFramework"
      :frameworkR="item.frameworkR"
      :linkFrameworkR="item.linkFrameworkR"
      :imageFrameworkR="item.imageFrameworkR"
      :library="item.library"
      :linkLibrary="item.linkLibrary"
      :imageLibrary="item.imageLibrary"
      :UIFrameworkT="item.UIFrameworkT"
      :linkUIFrameworkT="item.linkUIFrameworkT"
      :imageUIFrameworkT="item.imageUIFrameworkT"
      :UIFrameworkS="item.UIFrameworkS"
      :linkUIFrameworkS="item.linkUIFrameworkS"
      :imageUIFrameworkS="item.imageUIFrameworkS"
      :UIFrameworkR="item.UIFrameworkR"
      :linkUIFrameworkR="item.linkUIFrameworkR"
      :imageUIFrameworkR="item.imageUIFrameworkR"
      :Servis="item.Servis"
      :linkServis="item.linkServis"
      :imageServis="item.imageServis"
      :titleServer="item.titleServer"
      :Server="item.Server"
      :linkServer="item.linkServer"
      :imageServer="item.imageServer"
      :ServerS="item.ServerS"
      :linkServerS="item.linkServerS"
      :imageServerS="item.imageServerS"
      :delay="item.delay"
    />
  </div>
</template>
