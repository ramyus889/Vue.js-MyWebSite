<script>
export default {
  name: 'UseStats',
  mounted() {
    document.title = 'Portfolio | About';
  }
};
</script>

<script setup>
import Panel from 'primevue/panel';
import ProgressBar from 'primevue/progressbar';
import UseDialogA from './UseDialogA.vue';

const itemsProgressVue = [
  {
    id: 1,
    name: 'Vue.js',
    value: 74,
    delay: 100
  },
  {
    id: 2,
    name: 'JavaScript',
    value: 53,
    delay: 150
  },
  {
    id: 3,
    name: 'HTML',
    value: 100,
    delay: 200
  },
  {
    id: 4,
    name: 'CSS',
    value: 80,
    delay: 250
  },
  {
    id: 5,
    name: 'PrimeVue',
    value: 67,
    delay: 300
  },
  {
    id: 6,
    name: 'Vue-Router',
    value: 36,
    delay: 350
  },
  {
    id: 7,
    name: 'Tailwind',
    value: 89,
    delay: 400
  },
  {
    id: 8,
    name: 'Github',
    value: 78,
    delay: 450
  },
  {
    id: 9,
    name: 'npm',
    value: 45,
    delay: 500
  },
  {
    id: 10,
    name: 'Netlify',
    value: 45,
    delay: 550
  }
];
const itemsProgressNext = [
  {
    id: 1,
    name: 'Next.js',
    value: 63,
    delay: 150
  },
  {
    id: 2,
    name: 'JavaScript',
    value: 53,
    delay: 200
  },
  {
    id: 3,
    name: 'TypeScript',
    value: 34,
    delay: 250
  },
  {
    id: 4,
    name: 'HTML',
    value: 100,
    delay: 300
  },
  {
    id: 5,
    name: 'FramerMotion',
    value: 45,
    delay: 350
  },
  {
    id: 6,
    name: 'CSS',
    value: 80,
    delay: 400
  },
  {
    id: 7,
    name: 'NextUi',
    value: 67,
    delay: 450
  },
  {
    id: 8,
    name: 'Tailwind',
    value: 89,
    delay: 500
  },
  {
    id: 9,
    name: 'Github',
    value: 78,
    delay: 550
  },
  {
    id: 10,
    name: 'Vercel',
    value: 45,
    delay: 600
  }
];
</script>
<template>
  <div class="flex flex-col gap-20 mx-10">
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-3xl font-bold">
        Уровень навыков (Vue.js)
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-[1200px]"
      >
        <div v-for="item in itemsProgressVue" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable collapsed>
              <ProgressBar :value="item.value"></ProgressBar>
              <UseDialogA :name="item.name" />
            </Panel>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-3xl font-bold">
        Уровень навыков (Next.js)
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-[1200px]"
      >
        <div v-for="item in itemsProgressNext" :key="item.id" class="flex flex-col gap-3">
          <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
            <Panel :header="item.name" toggleable collapsed>
              <ProgressBar :value="item.value"></ProgressBar>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
