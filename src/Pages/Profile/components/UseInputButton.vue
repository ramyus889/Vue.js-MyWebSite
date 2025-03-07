<script setup>
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const searchInput = ref('');
const show = ref(true);

const emit = defineEmits(['update:show', 'update:searchInput']);

function updateSearchInput() {
  emit('update:searchInput', searchInput.value);
}
function updateShow(value) {
  show.value = value;
  emit('update:show', value);
}
</script>
<template>
  <div class="flex place-content-center md:justify-between">
    <IconField class="" data-aos="fade-up" data-aos-delay="300">
      <InputIcon class="pi pi-search" />
      <InputText
        v-model="searchInput"
        placeholder="Search"
        @input="updateSearchInput"
        class="w-full"
      />
    </IconField>

    <ButtonGroup
      class="border border-[#242424] rounded-xl md:block hidden"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Button
        text
        icon="pi pi-th-large"
        @click="updateShow(true)"
        :class="show ? 'bg-[#322e2e]!' : ''"
      />
      <Button
        text
        icon="pi pi-list"
        @click="updateShow(false)"
        :class="show ? '' : 'bg-[#322e2e]!'"
      />
    </ButtonGroup>
  </div>
</template>
