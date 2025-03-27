<script setup lang="ts">
import UsePreview from './UsePreview.vue';

import { items1 } from '../Items';
</script>
<template>
  <div class="mb-5"></div>
  <div class="">
    <div class="flex flex-wrap justify-center gap-5 mt-5 sm:px-5 px-2">
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
  </div>
</template>
