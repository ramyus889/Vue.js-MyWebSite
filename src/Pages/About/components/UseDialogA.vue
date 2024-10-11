<template>
  <div class="card flex justify-end">
    <Button text label="Open" class="!outline-none" @click="visible = true" />
    <Dialog v-model:visible="visible" modal :header="name" :style="{ width: '50rem' }">
      <div class="">{{ name }}</div>
      <div class=""></div>
    </Dialog>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const visible = ref(false);

defineProps({
  name: String
});
</script>
