<template>
  <div class="flex justify-center card">
    <Drawer v-model:visible="visible" position="right">
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar image="/img/Code/frontend.jpg" shape="circle" />
        </div>
      </template>
      <div class="flex flex-col gap-5 text-[17px]">
        <RouterLink
          to="/"
          :class="
            route.path === `${routeUrl[0].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          @click="visible = false"
          >Сайты</RouterLink
        >
        <RouterLink
          to="/About"
          :class="
            route.path === `${routeUrl[1].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          @click="visible = false"
          >Уровни навыков</RouterLink
        >
        <RouterLink
          to="/Profile"
          :class="
            route.path === `${routeUrl[2].path}`
              ? 'underline text-green-500 font-bold transition-all'
              : ''
          "
          @click="visible = false"
          class=""
          >Профиль</RouterLink
        >
      </div>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = true" text class="text-white" />
  </div>
</template>

<script setup lang="ts">
import { routeUrl } from '@/router/routes';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const visible = ref(false);
const route = useRoute();
</script>
