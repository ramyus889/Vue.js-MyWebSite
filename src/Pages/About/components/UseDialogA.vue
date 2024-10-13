<template>
  <div class="card flex justify-end">
    <Button text label="Open" class="!outline-none" @click="visible = true" />
    <Dialog v-model:visible="visible" modal :header="name" class="mx-5" :style="{ width: '50rem' }">
      <div class="flex flex-col gap-3">
        <div v-for="head in headerName" :key="head.id" class="">
          <Panel :header="head.name" toggleable collapsed>
            <div v-for="headname in head.namejs" :key="headname.id" class="py-2">
              <div class="text-[18px]">{{ headname.name }}</div>
              <ProgressBar :value="headname.value"></ProgressBar>
            </div>
          </Panel>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import { ref } from 'vue';

const visible = ref(false);

defineProps({
  name: String,
  headerName: Object
});
</script>
