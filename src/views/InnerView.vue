<template>
  <div class="flex flex-col justify-center pt-12">
    <div class="flex p-5 flex-col justify-center items-center">
      <img :src="data?.image" :alt="data?.title" class="rounded-lg w-1/2 h-96 object-cover" />
    </div>
    <div class="flex flex-col gap-5 mx-96">
      <div class="flex flex-col w-full justify-center">
        <h5 class="mt-5">{{ data?.author }}</h5>

        <p class="text-gray-400">{{ data?.publish_date }} • {{ data?.email }}</p>
      </div>

      <h1 class="text-3xl font-bold">{{ data?.title }}</h1>

      <div class="flex gap-2 items-center">
        <CategoryCard
          :name="item?.title"
          :color="item?.text_color"
          :background="item?.background_color"
          :active="false"
          v-for="(item, index) in data?.categories"
          :key="index"
        />
      </div>
      <p class="text-gray-500" v-html="data?.description"></p>
    </div>
    <div class="text-3xl mx-24 my-12 flex justify-between items-center">
      <h1>მსგავსი სტატიები</h1>
      <div class="flex gap-2 items-center">
        <button class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
          <RouterLink to="/">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7L2 9ZM1.19289 7.29289C0.802369 7.68342 0.802369 8.31658 1.19289 8.70711L7.55685 15.0711C7.94738 15.4616 8.58054 15.4616 8.97107 15.0711C9.36159 14.6805 9.36159 14.0474 8.97107 13.6569L3.31421 8L8.97107 2.34315C9.36159 1.95262 9.36159 1.31946 8.97107 0.928932C8.58054 0.538407 7.94738 0.538407 7.55685 0.928932L1.19289 7.29289ZM2 7L1.9 7L1.9 9L2 9L2 7Z"
                fill="#1A1A1F"
              />
            </svg>
          </RouterLink>
        </button>
        <button class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
          <RouterLink to="/">
            <svg
              width="42"
              height="42"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="44"
                y="44"
                width="44"
                height="44"
                rx="22"
                transform="rotate(180 44 44)"
                fill="#512BE7"
              />
              <path
                d="M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
                fill="white"
              />
            </svg>
          </RouterLink>
        </button>
      </div>
    </div>
    <div class="flex justify-center gap-10 flex-wrap">
      <BlogCard v-for="(item, index) in blogs" :data="item" :key="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import CategoryCard from '../components/Cards/Category.vue'
import BlogCard from '../components/Cards/Blog.vue'

const route = useRoute()
const data = ref<any>()
const blogs = ref<any>()

onMounted(() => {
  axios.get(`/api/blogs/${route.params.id}`).then((response: any) => {
    data.value = response.data
  })

  axios.get('/api/blogs').then((response: any) => {
    blogs.value = response.data.data.filter(
      (el: any) =>
        el.categories.some(
          (category: any) => data.value?.categories.map((el: any) => el.id).includes(category.id)
        ) && new Date(el?.publish_date).getTime() - new Date(Date.now()).getTime() < -1
    )
  })
})
</script>

<style scoped></style>
