<script>
export default {
  name: 'UseWebSite',
  mounted() {
    document.title = 'Portfolio | Profile';
  }
};
</script>
<script setup>
import UseFooter from '@/components/UseFooter.vue';
import UseMainProfile from './components/UseMainProfile.vue';
import UsePGridCard from './components/UsePGridCard.vue';
</script>
<template>
  <div
    class="min-[2330px]:mx-[550px] min-[2100px]:mx-[450px] min-[1760px]:mx-[250px] min-[1560px]:mx-[200px] xl:mx-[100px]"
  >
    <UseMainProfile />
    <UsePGridCard />
  </div>
  <UseFooter />
</template>
