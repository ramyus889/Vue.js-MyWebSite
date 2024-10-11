<script>
export default {
  name: 'UseStats',
  mounted() {
    document.title = 'Portfolio | About';
  }
};
</script>

<script setup>
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import { ref } from 'vue';
import UseDialogA from './UseDialogA.vue';

import { itemsProgressNext, itemsProgressVue } from '../itemsStats';

const visible = ref(false);
</script>
<template>
  <div class="flex flex-col gap-10 mx-10">
    <div class="">
      <Button
        :label="visible ? 'Show' : 'Hide'"
        class="!outline-none"
        @click="visible = !visible"
      />
    </div>
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-3xl font-bold">
        Уровень навыков (Vue.js)
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-[1200px]"
      >
        <div v-for="item in itemsProgressVue" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable :collapsed="!visible">
              <ProgressBar :value="item.value"></ProgressBar>
              <UseDialogA :name="item.name" :js="item.js" :headerName="item.headerName" />
            </Panel>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div data-aos="fade-up" data-aos-delay="100" class="text-3xl font-bold">
        Уровень навыков (Next.js)
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-[1200px]"
      >
        <div v-for="item in itemsProgressNext" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable :collapsed="!visible">
              <ProgressBar :value="item.value"></ProgressBar>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
