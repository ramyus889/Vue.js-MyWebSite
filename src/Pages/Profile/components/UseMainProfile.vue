<script setup lang="ts"></script>
<template>
  <div class="mt-[150px] px-5">
    <div class="flex flex-col justify-between gap-5 sm:items-center sm:flex-row">
      <div class="flex items-center gap-4">
        <img
          src="/img/Code/frontend.jpg"
          alt=""
          data-aos="fade-up"
          data-aos-delay="100"
          class="sm:w-[130px] w-[75px] rounded-2xl"
        />
        <div class="flex flex-col gap-2 sm:gap-4">
          <div class="sm:text-[30px] text-[18px]" data-aos="fade-up" data-aos-delay="150">
            Рамазан Юсупов 22 года
          </div>
          <div class="">
            <div class="" data-aos="fade-up" data-aos-delay="200">Frontend Разработчик</div>
            <div class="" data-aos="fade-up" data-aos-delay="200">
              Опыт обучения 1 год 11 месяцев
            </div>
          </div>
        </div>
      </div>
      <div class="flex place-content-end">
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
