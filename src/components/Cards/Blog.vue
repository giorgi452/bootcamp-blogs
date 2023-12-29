<template>
  <div class="w-[350px]">
    <img
      :src="props.data?.image"
      :alt="props.data?.title"
      class="rounded-xl w-full h-[350px] object-cover"
    />
    <h3 class="mt-2">{{ props.data?.author }}</h3>
    <span class="text-gray-400 font-light text-sm">{{ props.data?.publish_date }}</span>
    <h1 class="text-xl">{{ props.data?.title }}</h1>
    <div class="flex items-center gap-2 flex-wrap py-2">
      <CategoryCard
        :name="item?.title"
        :color="item?.text_color"
        :background="item?.background_color"
        :active="false"
        v-for="(item, index) in props.data?.categories"
        :key="index"
      />
    </div>
    <p class="text-gray-500">
      {{
        props.data?.description.length > 50
          ? props.data?.description.substring(0, 50) + '...'
          : props.data?.description
      }}
    </p>
    <span
      class="flex items-center text-violet-500 mt-2 cursor-pointer"
      @click="router.push(`/inner/${props.data?.id}`)"
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
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({ data: Object })
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogComponent'
})
</script>

<style scoped></style>
