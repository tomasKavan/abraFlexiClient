<script setup lang="ts">
import { ref } from 'vue';


const icon = ref<string | null>(null)

</script>

<template>
  <div class="flex-1 p-5">Detail</div>
  <IconPicker
    v-model="icon"
    placeholder="Choose tab icon"
  />
</template>