import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<any>()

  function setCategory(data: any) {
    categories.value = data
  }

  return { categories, setCategory }
})
