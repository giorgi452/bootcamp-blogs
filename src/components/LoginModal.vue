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
    </v-card>
  </v-dialog>
  <SuccessModal message="წარმატებული ავტორიზაცია" />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { useSuccessStore } from '../stores/success'
import SuccessModal from './SuccessModal.vue'

const emailRegex = /(?:[a-zA-Z0-9._-]+)@redberry\.ge/

const dialog = ref(false)
const success = ref(false)
const email = ref('')
const error = ref(false)
const logged = ref(false)
const router = useRouter()
const route = useRoute()
const useSuccess = useSuccessStore()

watch(email, (val) => {
  const valid = emailRegex.test(val)

  if (!valid) {
    error.value = true
  } else {
    error.value = false
  }

  router.replace(`/?email=${email.value}`)
})

onMounted(() => {
  email.value = String(route.query.email)
  if (!route.query.email) {
    email.value = ''
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
      useSuccess.setSuccess(true)
      dialog.value = false
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
