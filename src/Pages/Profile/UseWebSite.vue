<script>
export default {
  name: 'UseWebSite',
  mounted() {
    document.title = 'Portfolio | Profile';
  }
};
</script>
<script setup>
import UseCard from './components/UseCard.vue';
</script>
<template>
  <div class="">
    <UseCard />
  </div>
</template>
