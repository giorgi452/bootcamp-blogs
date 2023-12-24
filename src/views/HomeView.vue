<script setup lang="ts">
import CategoryCard from '../components/Cards/Category.vue'
import BlogCard from '../components/Cards/Blog.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useCategoriesStore } from '../stores/categories'

const blogs = ref<any>(null)
const catStore = useCategoriesStore()

onMounted(() => {
  axios.get('/api/blogs').then((response: any) => {
    blogs.value = response.data
  })
})
</script>

<template>
  <main>
    <div class="flex justify-between items-center p-10">
      <h1 class="text-5xl">ბლოგი</h1>
      <img src="../assets/images/Blog-1024x355.png" alt="Blog" class="h-64" />
    </div>

    <div class="flex justify-center items-center gap-3 overflow-scroll max-w-full min-w-full">
      <CategoryCard
        :name="item?.title"
        :color="item?.text_color"
        :background="item?.background_color"
        :active="false"
        v-for="(item, index) in catStore.categories?.data"
        :key="index"
      />
    </div>
    <div class="p-10 flex gap-20">
      <BlogCard v-for="(item, index) in blogs?.data" :data="item" :key="index" />
    </div>
  </main>
</template>
