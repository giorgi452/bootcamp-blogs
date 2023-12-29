<template>
  <v-dialog v-model="useSuccess.success" width="auto">
    <v-card>
      <v-card-actions class="flex justify-end bg-white rounded">
        <button
          class="rounded-full w-10 h-10 hover:bg-gray-200 transition-all"
          @click="useSuccess.setSuccess(false)"
        >
          X
        </button>
      </v-card-actions>

      <div class="py-10 px-16 flex flex-col items-center justify-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.0002 58.6667C46.6668 58.6667 58.6668 46.6667 58.6668 32C58.6668 17.3333 46.6668 5.33334 32.0002 5.33334C17.3335 5.33334 5.3335 17.3333 5.3335 32C5.3335 46.6667 17.3335 58.6667 32.0002 58.6667Z"
            fill="#14D81C"
          />
          <path
            d="M20.6665 32L28.2132 39.5467L43.3332 24.4533"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 class="text-2xl font-bold mt-2">{{ props.message }}</h1>
        <button
          class="rounded bg-violet-500 w-96 p-2 text-white font-bold mt-10"
          @click="handleSubmit"
        >
          კარგი
        </button>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useSuccessStore } from '../stores/success'
import { useRouter } from 'vue-router'

const props = defineProps({ message: String })
const router = useRouter()

const useSuccess = useSuccessStore()

function handleSubmit() {
  useSuccess.setSuccess(false)
  router.push('/')
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginModalComponent'
})
</script>

<style scoped></style>
