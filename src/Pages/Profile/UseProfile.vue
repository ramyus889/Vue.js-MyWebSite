<script>
export default {
  name: 'UseWebSite',
  mounted() {
    document.title = 'Portfolio | Profile';
  }
};
</script>
<script setup>
import UseMainProfile from './components/UseMainProfile.vue';
</script>
<template>
  <div class="">
    <UseMainProfile />
  </div>
</template>
