<script setup lang="ts">
import CategoryCard from '../components/Cards/Category.vue'
import BlogCard from '../components/Cards/Blog.vue'
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import { useCategoriesStore } from '../stores/categories'

const blogs = ref<any>(null)
const catStore = useCategoriesStore()
const selectedCategories = ref<any>([])

function getSelected(id: any) {
  return selectedCategories.value.filter((el: any) => el === id).map((el: any) => el)
}

function toggleItemInArray(array: any, item: any) {
  const index = array.indexOf(item)

  if (index === -1) {
    // Item not found, so add it
    array.push(item)
  } else {
    // Item found, so remove it
    array.splice(index, 1)
  }
}
const categoryBlogs = computed(() => {
  return blogs.value
    ? blogs.value.filter((el: any) =>
        el.categories.some((category: any) => selectedCategories.value.includes(category.id))
      ).length === 0
      ? blogs.value
      : blogs.value.filter((el: any) =>
          el.categories.some((category: any) => selectedCategories.value.includes(category.id))
        )
    : blogs.value
})

onMounted(() => {
  axios.get('/api/blogs').then((response: any) => {
    blogs.value = response.data?.data.filter(
      (el: any) => new Date(el?.publish_date).getTime() - new Date(Date.now()).getTime() < -1
    )
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
        :active="getSelected(item.id).includes(item.id)"
        v-for="(item, index) in catStore.categories?.data"
        :key="index"
        @click="toggleItemInArray(selectedCategories, item.id)"
      />
    </div>
    <div class="p-10 flex gap-20 flex-wrap justify-center">
      <BlogCard v-for="(item, index) in categoryBlogs" :data="item" :key="index" />
    </div>
  </main>
</template>
