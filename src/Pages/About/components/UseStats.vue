<script setup>
import ProgressBar from 'primevue/progressbar';

const itemsProgressVue = [
  {
    id: 1,
    name: 'Vue.js',
    value: 74
  },
  {
    id: 2,
    name: 'JavaScript',
    value: 53
  },
  {
    id: 3,
    name: 'HTML',
    value: 100
  },
  {
    id: 4,
    name: 'CSS',
    value: 80
  },
  {
    id: 5,
    name: 'PrimeVue',
    value: 67
  },
  {
    id: 6,
    name: 'Vue-Router',
    value: 36
  },
  {
    id: 7,
    name: 'Tailwind',
    value: 89
  },
  {
    id: 8,
    name: 'Github',
    value: 78
  },
  {
    id: 9,
    name: 'npm',
    value: 45
  },
  {
    id: 10,
    name: 'Netlify',
    value: 45
  }
];
const itemsProgressNext = [
  {
    id: 1,
    name: 'Next.js',
    value: 63
  },
  {
    id: 2,
    name: 'JavaScript',
    value: 53
  },
  {
    id: 3,
    name: 'TypeScript',
    value: 34
  },
  {
    id: 4,
    name: 'HTML',
    value: 100
  },
  {
    id: 5,
    name: 'FramerMotion',
    value: 45
  },
  {
    id: 6,
    name: 'CSS',
    value: 80
  },
  {
    id: 7,
    name: 'NextUi',
    value: 67
  },
  {
    id: 8,
    name: 'Tailwind',
    value: 89
  },
  {
    id: 9,
    name: 'Github',
    value: 78
  },
  {
    id: 10,
    name: 'Vercel',
    value: 45
  }
];
</script>
<template>
  <div class="flex flex-col gap-20 mx-10">
    <div class="">
      <div class="text-3xl font-bold">Уровень навыков (Vue.js)</div>
      <div class="flex flex-col gap-5 mt-6 max-w-[500px]">
        <div v-for="item in itemsProgressVue" :key="item.name" class="flex flex-col gap-3">
          <div class="text-[22px] font-bold">{{ item.name }}</div>
          <ProgressBar :value="item.value"></ProgressBar>
        </div>
      </div>
    </div>
    <div class="">
      <div class="text-3xl font-bold">Уровень навыков (Next.js)</div>
      <div class="flex flex-col gap-5 mt-6 max-w-[500px]">
        <div v-for="item in itemsProgressNext" :key="item.name" class="flex flex-col gap-3">
          <div class="text-[22px] font-bold">{{ item.name }}</div>
          <ProgressBar :value="item.value"></ProgressBar>
        </div>
      </div>
    </div>
  </div>
</template>
