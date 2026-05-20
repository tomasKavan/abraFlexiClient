<script setup lang="ts">
import ConnectionForm from './components/ConnectionForm.vue'
import EntityPicker from './components/EntityPicker.vue'
import EntityBrowser from './components/EntityBrowser.vue'
</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col bg-surface-50">
    <!-- Header: connection form -->
    <ConnectionForm />

    <!-- Body: sidebar + main -->
    <div class="flex flex-row flex-1 overflow-hidden">
      <EntityPicker />
      <EntityBrowser />
    </div>
  </div>
</template>
