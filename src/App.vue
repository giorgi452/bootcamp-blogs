<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import axios from 'axios'
import { onMounted } from 'vue'
import { useCategoriesStore } from './stores/categories'

const catStore = useCategoriesStore()

onMounted(() => {
  axios.get('/api/categories').then((response: any) => {
    catStore.setCategory(response.data)
  })
})
</script>

<template>
  <header>
    <Header />
  </header>

  <RouterView />
</template>
