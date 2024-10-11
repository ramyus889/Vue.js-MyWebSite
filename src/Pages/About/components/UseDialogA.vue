<template>
  <div class="card flex justify-end">
    <Button text label="Open" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      maximizable
      modal
      :header="name"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <div class="">{{ name }}</div>
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
