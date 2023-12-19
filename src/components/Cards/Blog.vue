<template>
  <div class="w-96">
    <img src="../../assets/images/unsplash_01_igFr7hd4.png" alt="Buneba" class="rounded-xl" />
    <h3 class="mt-2">ლილე კვარაცხელია</h3>
    <span class="text-gray-400 font-light text-sm">02.11.2023</span>
    <h1 class="text-xl">EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h1>
    <div class="flex items-center gap-2 flex-wrap py-2">
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
        :active="false"
      />
    </div>
    <p class="text-gray-500">
      6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...
    </p>
    <span class="flex items-center text-violet-500 mt-2"
      >სრულად ნახვა
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.93415 13.0052C5.64125 13.2981 5.64125 13.773 5.93415 14.0659C6.22704 14.3587 6.70191 14.3587 6.99481 14.0659L5.93415 13.0052ZM14.2855 6.46446C14.2855 6.05024 13.9498 5.71445 13.5355 5.71446L6.78555 5.71445C6.37133 5.71445 6.03555 6.05024 6.03555 6.46445C6.03555 6.87867 6.37133 7.21445 6.78555 7.21445H12.7855V13.2145C12.7855 13.6287 13.1213 13.9645 13.5355 13.9645C13.9498 13.9645 14.2855 13.6287 14.2855 13.2145L14.2855 6.46446ZM6.99481 14.0659L14.0659 6.99478L13.0052 5.93412L5.93415 13.0052L6.99481 14.0659Z"
          fill="#5D37F3"
        />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import CategoryCard from './Category.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogComponent'
})
</script>

<style scoped></style>
