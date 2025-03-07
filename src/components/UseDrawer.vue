<template>
  <div class="flex justify-center card">
    <Drawer v-model:visible="visible" position="right">
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar image="/img/Code/frontend.jpg" shape="circle" />
        </div>
      </template>
      <div class="flex flex-col gap-5 text-[17px]">
        <RouterLink to="/" @click="visible = false">Сайты</RouterLink>
        <RouterLink to="/About" @click="visible = false">Уровни навыков</RouterLink>
        <RouterLink to="/Profile" @click="visible = false" class="">Профиль</RouterLink>
      </div>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = true" text class="text-white" />
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

const visible = ref(false);
</script>
