<script setup lang="ts">
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import { onMounted, ref } from 'vue';
import UseDialogA from './UseDialogA.vue';

import { itemsProgressVue } from '../itemsStats';

const visible = ref(true);

onMounted(() => {
  document.title = 'Portfolio | About';
});
</script>
<template>
  <div class="flex place-content-center mt-10 sm:mx-10 mx-2">
    <div class="max-w-[1330px] w-full">
      <div class="flex sm:flex-row flex-col max-sm:gap-5 sm:justify-between">
        <div data-aos="fade-up" data-aos-delay="100" class="text-3xl max-sm:text-center font-bold">
          Уровни навыков (Vue.js)
        </div>

        <Button
          :label="visible ? 'Hide' : 'Show'"
          class="outline-hidden!"
          @click="visible = !visible"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
        <div v-for="item in itemsProgressVue" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable :collapsed="!visible">
              <ProgressBar :value="item.value"></ProgressBar>
              <div v-if="item.headerName ? true : false" class="">
                <UseDialogA :name="item.name" :headerName="item.headerName" />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
