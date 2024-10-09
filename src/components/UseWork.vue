<script>
export default {
  name: 'UseWork',
  mounted() {
    document.title = 'Portfolio | Work';
  }
};
</script>

<template>
  <div class="py-8 mt-20">
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="text-7xl font-bold text-center uppercase pb-5"
    >
      Work
    </p>

    <div class="">
      <div class="items-center flex justify-center">
        <div class="text-center text-[20px] pt-5 max-w-[500px]">
          <div data-aos="fade-up" data-aos-delay="200" class="px-5">
            Эти сайты были разработаны мной исключительно для включения в портфолио и были
            развернуты на платформе <span class="text-green-500">Netlify (Vue.js)</span> и
            <span class="text-black bg-white px-1 rounded-lg">Vercel (Next.js)</span>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
