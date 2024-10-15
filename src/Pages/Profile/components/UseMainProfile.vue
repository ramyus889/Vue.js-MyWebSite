<script setup></script>
<template>
  <div class="mt-[150px] px-5">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <img
          src="/img/Code/frontend.jpg"
          alt=""
          data-aos="fade-up"
          data-aos-delay="100"
          class="sm:w-[130px] w-[75px] rounded-2xl"
        />
        <div class="flex flex-col sm:gap-4 gap-2">
          <div class="sm:text-[30px] text-[18px]" data-aos="fade-up" data-aos-delay="150">
            Рамазан Юсупов
          </div>
          <div class="" data-aos="fade-up" data-aos-delay="200">Frontend Разработчик</div>
        </div>
      </div>
      <div class="">
        <a href="/resume.pdf" download="resume.pdf" title="Download Resume">
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            v-tooltip.top="{ value: 'Скачать резюме', showDelay: 100, hideDelay: 300 }"
            src="/resume.svg"
            alt=""
            class=""
            style="width: 35px; height: 35px"
          />
        </a>
      </div>
    </div>
  </div>
</template>
