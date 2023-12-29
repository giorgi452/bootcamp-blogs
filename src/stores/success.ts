import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSuccessStore = defineStore('success', () => {
  const success = ref(false)

  function setSuccess(value: boolean) {
    success.value = value
  }

  return { success, setSuccess }
})
