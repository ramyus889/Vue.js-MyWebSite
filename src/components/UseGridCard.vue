<script setup>
import UsePreview from './UsePreview.vue';

const items1 = [
  {
    id: 1,
    image: '/Screenshot_1.png',
    link: 'https://web-illa-cloud.netlify.app',
    description: 'web-illa-cloud.netlify.app'
  },
  {
    id: 2,
    image: '/Screenshot_2.png',
    link: 'https://magedeveloper.netlify.app',
    description: 'magedeveloper.netlify.app'
  },
  {
    id: 3,
    image: '/Screenshot_3.png',
    link: 'https://fastgendev.netlify.app',
    description: 'fastgendev.netlify.app'
  },
  {
    id: 4,
    image: '/Screenshot_4.png',
    link: 'https://vuesneakers747.netlify.app',
    description: 'vuesneakers747.netlify.app'
  },
  {
    id: 5,
    image: '/Screenshot_5.png',
    link: 'https://hyperwebdev.netlify.app',
    description: 'hyperwebdev.netlify.app'
  }
];
const items2 = [
  {
    id: 1,
    image: '/Screenshot_6.png',
    link: 'https://31-saa-s.vercel.app/',
    description: '31-saa-s.vercel.app'
  },
  {
    id: 2,
    image: '/Screenshot_7.png',
    link: 'https://mirror-world-seven.vercel.app/',
    description: 'mirror-world-seven.vercel.app'
  },
  {
    id: 3,
    image: '/Screenshot_8.png',
    link: 'https://next-js-pizza-sigma.vercel.app/',
    description: 'next-js-pizza-sigma.vercel.app',
    hidden: 'xl:block hidden'
  },

  {
    id: 4,
    image: '/Screenshot_9.png',
    link: 'https://lesson-english2-two.vercel.app/',
    description: 'lesson-english2-two.vercel.app'
  },
  {
    id: 5,
    image: '/Screenshot_10.png',
    link: 'https://personalwebfrontend.vercel.app/',
    description: 'personalwebfrontend.vercel.app'
  }
];
</script>
<template>
  <div class="border border-slate-600 mt-2"></div>
  <div class="pt-4 pb-3 px-5 text-3xl font-bold">Vue.js (Netlify)</div>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mt-5">
    <UsePreview
      v-for="item in items1"
      :key="item.id"
      :image="item.image"
      :link="item.link"
      :description="item.description"
    />
  </div>
  <div class="border border-slate-600 mt-[100px]"></div>
  <div class="pt-4 pb-3 px-5 text-3xl font-bold">Next.js (Vercel)</div>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mt-5">
    <UsePreview
      v-for="item in items2"
      :key="item.id"
      :image="item.image"
      :link="item.link"
      :description="item.description"
    />
  </div>
</template>
