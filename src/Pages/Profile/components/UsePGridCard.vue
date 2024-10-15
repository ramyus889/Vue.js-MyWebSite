<script setup>
import { computed, ref } from 'vue';
import UseCardItemFlex from './UseCardItemFlex.vue';
import UseCardItemGrid from './UseCardItemGrid.vue';
import UseInputButton from './UseInputButton.vue';

const items = [
  {
    id: 1,
    title: '31-saa-s',
    linkTitle1: '31-saa-s.vercel.app',
    linkTitle2: 'https://31-saa-s.vercel.app/',
    gitTitle: '31-saa-s',
    linkGithub: 'https://github.com/ramyus889/31SaaS',
    delay: 100
  },
  {
    id: 2,
    title: 'mirror-world',
    linkTitle1: 'mirror-world-seven.vercel.app',
    linkTitle2: 'https://mirror-world-seven.vercel.app/',
    gitTitle: 'MirrorWorld',
    linkGithub: 'https://github.com/ramyus889/MirrorWorld',
    delay: 150
  },
  {
    id: 3,
    title: 'nextjs-pizza',
    linkTitle1: 'next-js-pizza-sigma.vercel.app',
    linkTitle2: 'https://next-js-pizza-sigma.vercel.app/',
    gitTitle: 'Next.js-Pizza',
    linkGithub: 'https://github.com/ramyus889/Next.js-Pizza',
    delay: 200
  },
  {
    id: 4,
    title: 'lesson-english2',
    linkTitle1: 'lesson-english2-two.vercel.app',
    linkTitle2: 'https://lesson-english2-two.vercel.app/',
    gitTitle: 'LessonEnglish2',
    linkGithub: 'https://github.com/ramyus889/LessonEnglish2',
    delay: 250
  },
  {
    id: 5,
    title: 'portfolio',
    linkTitle1: 'personalwebfrontend.vercel.app',
    linkTitle2: 'https://personalwebfrontend.vercel.app/',
    gitTitle: 'Portfolio',
    linkGithub: 'https://github.com/ramyus889/Portfolio',
    delay: 300
  },
  {
    id: 6,
    title: 'vuesneakers747',
    linkTitle1: 'vuesneakers747.netlify.app',
    linkTitle2: 'https://vuesneakers747.netlify.app',
    gitTitle: 'Vue.js---Sneakers',
    linkGithub: 'https://github.com/ramyus889/Vue.js---Sneakers',
    delay: 350
  },
  {
    id: 7,
    title: 'magedeveloper',
    linkTitle1: 'magedeveloper.netlify.app',
    linkTitle2: 'https://magedeveloper.netlify.app',
    gitTitle: 'Vue.js--Web-Mage',
    linkGithub: 'https://github.com/ramyus889/Vue.js--Web-Mage',
    delay: 400
  },
  {
    id: 8,
    title: 'web-illa-cloud',
    linkTitle1: 'web-illa-cloud.netlify.app',
    linkTitle2: 'https://web-illa-cloud.netlify.app',
    gitTitle: 'Vue.js---Web-Illa',
    linkGithub: 'https://github.com/ramyus889/Vue.js---Web-Illa',
    delay: 450
  },
  {
    id: 9,
    title: 'fastgendev',
    linkTitle1: 'fastgendev.netlify.app',
    linkTitle2: 'https://fastgendev.netlify.app',
    gitTitle: 'Vue.js---fastgen',
    linkGithub: 'https://github.com/ramyus889/Vue.js---fastgen',
    delay: 500
  },
  {
    id: 10,
    title: 'hyperwebdev',
    linkTitle1: 'hyperwebdev.netlify.app',
    linkTitle2: 'https://hyperwebdev.netlify.app',
    gitTitle: 'Hyperswitch',
    linkGithub: 'https://github.com/ramyus889/Hyperswitch',
    delay: 550
  }
];

const searchInput = ref('');
const show = ref(true);

function updateSearchInput(value) {
  searchInput.value = value;
}

const filteredItems = computed(() => {
  return items.filter((item) => {
    return item.title.toLowerCase().includes(searchInput.value.toLowerCase());
  });
});
</script>
<template>
  <div class="mt-[50px] mb-[330px] px-5">
    <UseInputButton
      :show="show"
      @update:show="show = $event"
      @update:searchInput="updateSearchInput"
    />
    <div v-if="show" class="flex place-content-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3 gap-5 mt-[50px] w-full"
        v-auto-animate
      >
        <UseCardItemGrid
          v-for="item in filteredItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :linkTitle1="item.linkTitle1"
          :linkTitle2="item.linkTitle2"
          :gitTitle="item.gitTitle"
          :delay="item.delay"
          :linkGithub="item.linkGithub"
        />
      </div>
    </div>
    <div v-else class="">
      <div class="flex flex-col gap-5 mt-[50px]" v-auto-animate>
        <UseCardItemFlex
          v-for="item in filteredItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :linkTitle1="item.linkTitle1"
          :linkTitle2="item.linkTitle2"
          :gitTitle="item.gitTitle"
          :delay="item.delay"
          :linkGithub="item.linkGithub"
        />
      </div>
    </div>
  </div>
</template>
