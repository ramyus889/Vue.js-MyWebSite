<template>
  <div class="card flex justify-center">
    <Button
      type="button"
      text
      :icon="starShow ? 'pi pi-star-fill' : 'pi pi-star'"
      @click="starShow = !starShow"
    >
    </Button>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';

const starShow = ref(false);
</script>
