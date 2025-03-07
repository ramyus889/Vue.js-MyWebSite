<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import UseCardItemFlex from './UseCardItemFlex.vue';
import UseCardItemGrid from './UseCardItemGrid.vue';
import UseInputButton from './UseInputButton.vue';

const items = ref([]);
const searchInput = ref('');
const show = ref(true);

function updateSearchInput(value) {
  searchInput.value = value;
}

onMounted(async () => {
  try {
    const response = await axios.get('https://c094e692e8c3eb05.mokky.dev/items');
    items.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

const filteredItems = computed(() => {
  return items.value.filter((item) => {
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
        class="grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3! gap-5 mt-[50px] w-full"
        v-auto-animate
      >
        <UseCardItemGrid
          v-for="item in filteredItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :delay="item.delay"
          :gitTitle="item.gitTitle"
          :linkTitle1="item.linkTitle1"
          :linkTitle2="item.linkTitle2"
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
          :delay="item.delay"
          :gitTitle="item.gitTitle"
          :linkTitle1="item.linkTitle1"
          :linkTitle2="item.linkTitle2"
          :linkGithub="item.linkGithub"
        />
      </div>
    </div>
  </div>
</template>
