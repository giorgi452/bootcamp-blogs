<template>
  <div
    :class="`w-max py-1 px-2 rounded-2xl flex items-center justify-center ${
      props.active ? 'border border-black' : ''
    }`"
    :style="`background: ${props.background}; color: ${props.color};`"
  >
    {{ props.name }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ name: String, color: String, background: String, active: Boolean })
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryCardComponent'
})
</script>

<style scoped></style>
