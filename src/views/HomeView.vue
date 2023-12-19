<script setup lang="ts">
import CategoryCard from '../components/Cards/Category.vue'
import BlogCard from '../components/Cards/Blog.vue'
</script>

<template>
  <main>
    <div class="flex justify-between items-center p-10">
      <h1 class="text-5xl">ბლოგი</h1>
      <img src="../assets/images/Blog-1024x355.png" alt="Blog" class="h-64" />
    </div>

    <div class="flex justify-center items-center gap-3">
      <CategoryCard
        name="მარკეტი"
        color="text-yellow-500"
        background="bg-yellow-300/30"
        :active="false"
      />
      <CategoryCard
        name="აპლიკაცია"
        color="text-green-500"
        background="bg-green-300/30"
        :active="false"
      />
      <CategoryCard
        name="ხელოვნური ინტელექი"
        color="text-violet-500"
        background="bg-violet-300/30"
        :active="true"
      />
      <CategoryCard name="UI/UX" color="text-red-500" background="bg-red-300/30" :active="false" />
      <CategoryCard
        name="კვლევა"
        color="text-lime-500"
        background="bg-lime-300/30"
        :active="true"
      />
      <CategoryCard
        name="Figma"
        color="text-emerald-500"
        background="bg-emerald-300/30"
        :active="false"
      />
    </div>
    <div class="p-10 flex gap-20">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </main>
</template>
