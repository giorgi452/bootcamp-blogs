<template>
  <button class="bg-blue-500 py-1 rounded px-3 text-white" v-if="!logged" @click="dialog = true">
    შესვლა
  </button>
  <button class="bg-blue-500 py-1 rounded px-3 text-white" v-else>
    <RouterLink to="/add-blog">ბლოგის დამატება</RouterLink>
  </button>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-actions class="flex justify-end bg-white rounded">
        <button
          class="rounded-full w-10 h-10 hover:bg-gray-200 transition-all"
          @click="dialog = false"
        >
          X
        </button>
      </v-card-actions>
      <div class="p-2" v-if="!success">
        <h1 class="text-center font-bold text-3xl">შესვლა</h1>
        <form class="px-16 py-10 mt-5" @submit.prevent="handleSubmit">
          <div class="flex flex-col w-96">
            <label for="email">ელ-ფოსტა</label>
            <input
              type="text"
              placeholder="შეიყვანეთ მეილი..."
              :class="` border border-black rounded p-2 outline-none ${
                error ? 'border-red-500' : ''
              }`"
              id="email"
              name="email"
              v-model="email"
            />
          </div>
          <button class="rounded bg-violet-500 mt-5 w-full p-2 text-white font-bold">შესვლა</button>
        </form>
      </div>
      <div class="py-10 px-16 flex flex-col items-center justify-center" v-else>
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
        <h1 class="text-2xl font-bold mt-2">წარმატებული ავტორიზაცია</h1>
        <button
          class="rounded bg-violet-500 w-96 p-2 text-white font-bold mt-10"
          @click="dialog = false"
        >
          კარგი
        </button>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, watch } from 'vue'

const emailRegex = /(?:[a-zA-Z0-9._-]+)@redberry\.ge/

const dialog = ref(false)
const success = ref(false)
const email = ref('')
const error = ref(false)
const logged = ref(false)

watch(email, (val) => {
  const valid = emailRegex.test(val)

  if (!valid) {
    error.value = true
  } else {
    error.value = false
  }
})

function handleSubmit() {
  axios
    .post(
      '/api/login',
      { email: email.value },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response: any) => {
      logged.value = true
      if (logged.value) {
        dialog.value = false
      }
    })
    .catch((error: any) => {
      console.log(error.response.data.message)
      error.value = true
    })
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginModalComponent'
})
</script>

<style scoped></style>
