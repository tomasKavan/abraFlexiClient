<script setup lang="ts">
import { computed, ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const props = defineProps<{
  modelValue: string | null
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// Basic PrimeIcons set – extend as you like
// These are suffixes without the leading "pi"
const ALL_ICON_NAMES = [
  "address-book",
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
  "amazon",
  "android",
  "angle-double-down",
  "angle-double-left",
  "angle-double-right",
  "angle-double-up",
  "angle-down",
  "angle-left",
  "angle-right",
  "angle-up",
  "apple",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrows-alt",
  "backward",
  "ban",
  "bars",
  "bell",
  "book",
  "bookmark",
  "bookmark-fill",
  "box",
  "briefcase",
  "building",
  "calendar",
  "calendar-minus",
  "calendar-plus",
  "calendar-times",
  "camera",
  "caret-down",
  "caret-left",
  "caret-right",
  "caret-up",
  "cart-plus",
  "chart-bar",
  "chart-line",
  "chart-pie",
  "check",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "clipboard",
  "clock",
  "clone",
  "cloud",
  "cloud-download",
  "cloud-upload",
  "code",
  "cog",
  "comment",
  "comment-o",
  "comments",
  "comments-o",
  "compass",
  "copy",
  "credit-card",
  "database",
  "desktop",
  "directions",
  "dollar",
  "download",
  "eject",
  "ellipsis-h",
  "ellipsis-v",
  "envelope",
  "envelope-open",
  "exclamation-circle",
  "exclamation-triangle",
  "external-link",
  "eye",
  "eye-slash",
  "facebook",
  "fast-backward",
  "fast-forward",
  "file",
  "file-excel",
  "file-pdf",
  "file-word",
  "filter",
  "filter-fill",
  "flag",
  "flag-fill",
  "folder",
  "folder-open",
  "forward",
  "gift",
  "globe",
  "google",
  "hashtag",
  "heart",
  "heart-fill",
  "history",
  "home",
  "id-card",
  "image",
  "images",
  "inbox",
  "info",
  "info-circle",
  "instagram",
  "key",
  "layer-group",
  "leaf",
  "linkedin",
  "link",
  "list",
  "lock",
  "lock-open",
  "map",
  "map-marker",
  "map-marker-fill",
  "mars",
  "meh",
  "minus",
  "minus-circle",
  "mobile",
  "money-bill",
  "moon",
  "palette",
  "paperclip",
  "pause",
  "paypal",
  "pencil",
  "percent",
  "phone",
  "play",
  "plus",
  "plus-circle",
  "power-off",
  "print",
  "question",
  "question-circle",
  "redo",
  "refresh",
  "reply",
  "rss",
  "save",
  "search",
  "search-minus",
  "search-plus",
  "send",
  "server",
  "share-alt",
  "shield",
  "shopping-bag",
  "shopping-cart",
  "sign-in",
  "sign-out",
  "sitemap",
  "slack",
  "sliders-h",
  "sort",
  "sort-alpha-down",
  "sort-alpha-up",
  "sort-alt",
  "sort-down",
  "sort-numeric-down",
  "sort-numeric-up",
  "sort-up",
  "spinner",
  "star",
  "star-fill",
  "step-backward",
  "step-forward",
  "stop",
  "sun",
  "sync",
  "table",
  "tablet",
  "tag",
  "tags",
  "telegram",
  "thumbs-down",
  "thumbs-up",
  "ticket",
  "times",
  "times-circle",
  "trash",
  "twitter",
  "undo",
  "unlock",
  "upload",
  "user",
  "user-edit",
  "user-minus",
  "user-plus",
  "users",
  "video",
  "vimeo",
  "volume-down",
  "volume-off",
  "volume-up",
  "wallet",
  "whatsapp",
  "wifi",
  "window-maximize",
  "window-minimize",
  "wrench",
  "youtube"
]

// Dialog visibility + search
const visible = ref(false)
const search = ref('')

// Normalize current value
const currentIconClass = computed(() => props.modelValue || '')

// For showing just the suffix in the UI
const currentIconName = computed(() => {
  if (!props.modelValue) return ''
  // expect format "pi pi-xxx"
  const parts = props.modelValue.split(' ')
  const piPart = parts.find(p => p.startsWith('pi-'))
  return piPart ? piPart.replace(/^pi-/, '') : ''
})

const filteredIcons = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return ALL_ICON_NAMES
  return ALL_ICON_NAMES.filter(name =>
    name.toLowerCase().includes(q)
  )
})

function openDialog() {
  visible.value = true
}

function closeDialog() {
  visible.value = false
}

function selectIcon(name: string) {
  const full = `pi pi-${name}`
  emit('update:modelValue', full)
  visible.value = false
}
</script>

<template>
  <div class="icon-picker">
    <!-- Trigger button with preview -->
    <Button
      type="button"
      class="p-button-outlined flex align-items-center gap-2"
      @click="openDialog"
    >
      <i
        v-if="currentIconClass"
        :class="currentIconClass"
      />
      <span v-else class="text-color-secondary">
        {{ placeholder || 'Select icon' }}
      </span>
      <span v-if="currentIconName" class="text-xs text-color-secondary">
        {{ currentIconName }}
      </span>
    </Button>

    <!-- Dialog with search + grid of icons -->
    <Dialog
      v-model:visible="visible"
      header="Select icon"
      :modal="true"
      :style="{ width: '40rem', maxWidth: '100%' }"
    >
      <div class="mb-3">
        <span class="p-input-icon-left w-full">
          <i class="pi pi-search" />
          <InputText
            v-model="search"
            class="w-full"
            placeholder="Search icons..."
          />
        </span>
      </div>

      <div
        class="grid"
        style="max-height: 20rem; overflow: auto"
      >
        <div
          v-for="name in filteredIcons"
          :key="name"
          class="col-3 mb-3"
        >
          <button
            type="button"
            class="w-full p-2 border-round border-1 surface-border flex flex-column align-items-center gap-2"
            :class="{
              'bg-primary-100 border-primary-500':
                currentIconName === name,
            }"
            @click="selectIcon(name)"
          >
            <i :class="['pi', `pi-${name}`]" />
            <span class="text-xs text-overflow-ellipsis w-full text-center">
              {{ name }}
            </span>
          </button>
        </div>

        <div
          v-if="!filteredIcons.length"
          class="col-12 text-center text-color-secondary py-4"
        >
          No icons match "{{ search }}"
        </div>
      </div>

      <template #footer>
        <Button
          label="Close"
          class="p-button-text"
          @click="closeDialog"
        />
      </template>
    </Dialog>
  </div>
</template>