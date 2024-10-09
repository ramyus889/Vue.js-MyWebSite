<script setup>
import UsePreview from './UsePreview.vue';

const items1 = [
  {
    id: 1,
    image: '/Screenshot_1.png',
    link: 'https://web-illa-cloud.netlify.app',
    description: 'web-illa-cloud.netlify.app',
    title: 'Web-illa-cloud',
    framework: 'Vue.js',
    linkFramework: 'https://vuejs.org/',
    imageFramework: '/vue.svg',
    library: 'AOS',
    linkLibrary: 'https://michalsnik.github.io/aos/',
    imageLibrary: '/AOS.svg',
    UIFrameworkT: 'Tailwind CSS',
    linkUIFrameworkT: 'https://tailwindcss.com/',
    imageUIFrameworkT: '/tailwindcss.svg',
    UIFrameworkP: 'PrimeVue',
    linkUIFrameworkP: 'https://primevue.org/',
    imageUIFrameworkP: '/PrimeVue.svg',
    ServisNetlify: 'Netlify',
    linkServisNetlify: 'https://www.netlify.com/',
    imageServisNetlify: '/netlify.svg'
  },
  {
    id: 2,
    image: '/Screenshot_2.png',
    link: 'https://magedeveloper.netlify.app',
    description: 'magedeveloper.netlify.app',
    title: 'Magedeveloper',
    framework: 'Vue.js',
    linkFramework: 'https://vuejs.org/',
    imageFramework: '/vue.svg',
    library: 'AOS',
    linkLibrary: 'https://michalsnik.github.io/aos/',
    imageLibrary: '/AOS.svg',
    UIFrameworkT: 'Tailwind CSS',
    linkUIFrameworkT: 'https://tailwindcss.com/',
    imageUIFrameworkT: '/tailwindcss.svg',
    UIFrameworkP: 'PrimeVue',
    linkUIFrameworkP: 'https://primevue.org/',
    imageUIFrameworkP: '/PrimeVue.svg',
    ServisNetlify: 'Netlify',
    linkServisNetlify: 'https://www.netlify.com/',
    imageServisNetlify: '/netlify.svg'
  },
  {
    id: 3,
    image: '/Screenshot_3.png',
    link: 'https://fastgendev.netlify.app',
    description: 'fastgendev.netlify.app',
    title: 'Fastgendev',
    framework: 'Vue.js',
    linkFramework: 'https://vuejs.org/',
    imageFramework: '/vue.svg',
    library: 'AOS',
    linkLibrary: 'https://michalsnik.github.io/aos/',
    imageLibrary: '/AOS.svg',
    UIFrameworkT: 'Tailwind CSS',
    linkUIFrameworkT: 'https://tailwindcss.com/',
    imageUIFrameworkT: '/tailwindcss.svg',
    UIFrameworkP: 'PrimeVue',
    linkUIFrameworkP: 'https://primevue.org/',
    imageUIFrameworkP: '/PrimeVue.svg',
    ServisNetlify: 'Netlify',
    linkServisNetlify: 'https://www.netlify.com/',
    imageServisNetlify: '/netlify.svg'
  },
  {
    id: 4,
    image: '/Screenshot_4.png',
    link: 'https://vuesneakers747.netlify.app',
    description: 'vuesneakers747.netlify.app',
    title: 'VueSneakers',
    framework: 'Vue.js',
    linkFramework: 'https://vuejs.org/',
    imageFramework: '/vue.svg',
    library: 'AOS',
    linkLibrary: 'https://michalsnik.github.io/aos/',
    imageLibrary: '/AOS.svg',
    UIFrameworkT: 'Tailwind CSS',
    linkUIFrameworkT: 'https://tailwindcss.com/',
    imageUIFrameworkT: '/tailwindcss.svg',
    UIFrameworkP: 'PrimeVue',
    linkUIFrameworkP: 'https://primevue.org/',
    imageUIFrameworkP: '/PrimeVue.svg',
    ServisNetlify: 'Netlify',
    linkServisNetlify: 'https://www.netlify.com/',
    imageServisNetlify: '/netlify.svg'
  },
  {
    id: 5,
    image: '/Screenshot_5.png',
    link: 'https://hyperwebdev.netlify.app',
    description: 'hyperwebdev.netlify.app',
    title: 'Hyperwebdev',
    framework: 'Vue.js',
    linkFramework: 'https://vuejs.org/',
    imageFramework: '/vue.svg',
    library: 'AOS',
    linkLibrary: 'https://michalsnik.github.io/aos/',
    imageLibrary: '/AOS.svg',
    UIFrameworkT: 'Tailwind CSS',
    linkUIFrameworkT: 'https://tailwindcss.com/',
    imageUIFrameworkT: '/tailwindcss.svg',
    UIFrameworkP: 'PrimeVue',
    linkUIFrameworkP: 'https://primevue.org/',
    imageUIFrameworkP: '/PrimeVue.svg',
    ServisNetlify: 'Netlify',
    linkServisNetlify: 'https://www.netlify.com/',
    imageServisNetlify: '/netlify.svg'
  }
];
const items2 = [
  {
    id: 1,
    image: '/Screenshot_6.png',
    link: 'https://31-saa-s.vercel.app/',
    description: '31-saa-s.vercel.app',
    title: '31-saa-s'
  },
  {
    id: 2,
    image: '/Screenshot_7.png',
    link: 'https://mirror-world-seven.vercel.app/',
    description: 'mirror-world-seven.vercel.app',
    title: 'Mirror-world'
  },
  {
    id: 3,
    image: '/Screenshot_8.png',
    link: 'https://next-js-pizza-sigma.vercel.app/',
    description: 'next-js-pizza-sigma.vercel.app',
    title: 'Next-Pizza',
    hidden: 'xl:block hidden'
  },

  {
    id: 4,
    image: '/Screenshot_9.png',
    link: 'https://lesson-english2-two.vercel.app/',
    description: 'lesson-english2-two.vercel.app',
    title: 'Lesson-English'
  },
  {
    id: 5,
    image: '/Screenshot_10.png',
    link: 'https://personalwebfrontend.vercel.app/',
    description: 'personalwebfrontend.vercel.app',
    title: 'PersonalWeb'
  }
];
</script>
<template>
  <div class="border border-slate-600 mt-2"></div>
  <div class="pt-6 pb-3 px-5 text-3xl font-bold">Vue.js (Netlify)</div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
    <UsePreview
      v-for="item in items1"
      :key="item.id"
      :image="item.image"
      :link="item.link"
      :description="item.description"
      :title="item.title"
      :framework="item.framework"
      :linkFramework="item.linkFramework"
      :imageFramework="item.imageFramework"
      :library="item.library"
      :linkLibrary="item.linkLibrary"
      :imageLibrary="item.imageLibrary"
      :UIFrameworkT="item.UIFrameworkT"
      :linkUIFrameworkT="item.linkUIFrameworkT"
      :imageUIFrameworkT="item.imageUIFrameworkT"
      :UIFrameworkP="item.UIFrameworkP"
      :linkUIFrameworkP="item.linkUIFrameworkP"
      :imageUIFrameworkP="item.imageUIFrameworkP"
      :ServisNetlify="item.ServisNetlify"
      :linkServisNetlify="item.linkServisNetlify"
      :imageServisNetlify="item.imageServisNetlify"
    />
  </div>
  <div class="border border-slate-600 mt-[100px]"></div>
  <div class="pt-20 pb-3 px-5 text-3xl font-bold">Next.js (Vercel)</div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
    <UsePreview
      v-for="item in items2"
      :key="item.id"
      :image="item.image"
      :link="item.link"
      :description="item.description"
      :title="item.title"
    />
  </div>
</template>
