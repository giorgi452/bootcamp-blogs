<template>
  <div class="p-16 flex justify-center">
    <button
      class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full absolute left-0 mx-10"
    >
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
    <div class="flex flex-col">
      <!-- Add Blog -->
      <h1 class="text-3xl">ბლოგის დამატება</h1>
      <!-- Form -->
      <form class="mt-5" @submit.prevent="handleSubmit" enctype="multipart/form-data">
        <!-- Image -->
        <div>
          <label>ატვირთეთ ფოტო</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            @change="onImageChange"
            class="hidden"
          />
          <label
            class="flex flex-col bg-violet-300/30 border border-dashed border-black items-center gap-10 justify-around px-56 py-16 mt-1 rounded-lg"
            for="image"
            v-if="!uploaded"
          >
            <div class="flex-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M36.233 15.7333H3.33301V10.7C3.33301 6.63333 6.63301 3.33333 10.6997 3.33333H14.583C17.2997 3.33333 18.1497 4.21667 19.233 5.66667L21.5663 8.76667C22.083 9.45 22.1497 9.55 23.1163 9.55H27.7663C31.7163 9.53333 35.083 12.1333 36.233 15.7333Z"
                  fill="#5D37F3"
                />
                <path
                  d="M36.6497 18.0667C36.6163 17.25 36.483 16.4833 36.233 15.7333H3.33301V27.75C3.33301 32.6667 7.33301 36.6667 12.2497 36.6667H27.7497C32.6663 36.6667 36.6663 32.6667 36.6663 27.75V18.45C36.6663 18.3333 36.6663 18.1833 36.6497 18.0667ZM24.1663 27.0833H21.3497V30C21.3497 30.6833 20.783 31.25 20.0997 31.25C19.4163 31.25 18.8497 30.6833 18.8497 30V27.0833H15.833C15.1497 27.0833 14.583 26.5167 14.583 25.8333C14.583 25.15 15.1497 24.5833 15.833 24.5833H18.8497V21.6667C18.8497 20.9833 19.4163 20.4167 20.0997 20.4167C20.783 20.4167 21.3497 20.9833 21.3497 21.6667V24.5833H24.1663C24.8497 24.5833 25.4163 25.15 25.4163 25.8333C25.4163 26.5167 24.8497 27.0833 24.1663 27.0833Z"
                  fill="#5D37F3"
                />
              </svg>
            </div>

            <p class="font-normal">
              ჩააგდეთ ფაილი აქ ან <span class="font-bold underline">აირჩიეთ ფაილი</span>
            </p>
          </label>
          <label class="flex bg-gray-200 p-3 rounded-lg justify-between" for="image" v-else>
            <div class="flex gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22 7.81V13.9L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L2.67 18.95L2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
                  fill="#85858D"
                />
                <path
                  d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
                  fill="#85858D"
                />
                <path
                  d="M21.9996 13.9001V16.1901C21.9996 19.8301 19.8296 22.0001 16.1896 22.0001H7.80957C5.25957 22.0001 3.41957 20.9301 2.55957 19.0301L2.66957 18.9501L7.58957 15.6501C8.38957 15.1101 9.51957 15.1701 10.2296 15.7901L10.5696 16.0701C11.3496 16.7401 12.6096 16.7401 13.3896 16.0701L17.5496 12.5001C18.3296 11.8301 19.5896 11.8301 20.3696 12.5001L21.9996 13.9001Z"
                  fill="#85858D"
                />
              </svg>
              <h4>{{ image?.name }}</h4>
            </div>
            <div class="font-bold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75781 16.2427L16.2431 7.75739"
                  stroke="#1A1A1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2431 16.2426L7.75781 7.75732"
                  stroke="#1A1A1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </label>
        </div>

        <!-- Author and Title -->
        <div class="flex gap-2 mt-2 justify-between">
          <div>
            <label for="author" class="mt-2">ავტორი <i>*</i></label>
            <div class="mt-1">
              <input
                type="text"
                placeholder="შეიყვანეთ ავტორი"
                v-model="author"
                :class="`border-2 w-72 border-solid p-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  author1 === 0 ? 'bg-red-500/30 border-red-500' : ''
                } ${author1 === 1 ? 'text-gray-500 bg-white' : ''} ${
                  author1 === 2 ? 'bg-green-500/30 border-green-500' : ''
                } ${author2 === 0 ? ' bg-red-500/30 border-red-500' : ''} ${
                  author2 === 1 ? 'text-gray-400 bg-white ' : ''
                } ${author2 === 2 ? ' bg-green-500/30 border-green-500' : ''}${
                  author3 === 0 ? ' bg-red-500/30 border-red-500' : ''
                } ${author3 === 1 ? 'text-gray-400 bg-white' : ''} ${
                  author3 === 2 ? ' bg-green-500/30 border-green-500' : ''
                }`"
                id="author"
                name="author"
              />
              <ul class="text-gray-400 list-disc ml-5 mt-1">
                <li
                  :class="`${author1 === 0 ? ' text-red-500' : ''} ${
                    author1 === 1 ? 'text-gray-400 ' : ''
                  } ${author1 === 2 ? 'text-green-500 ' : ''}`"
                >
                  მხოლოდ ქართული სიმბოლოები
                </li>
                <li
                  :class="`${author2 === 0 ? ' text-red-500' : ''} ${
                    author2 === 1 ? 'text-gray-400 ' : ''
                  } ${author2 === 2 ? ' text-green-500' : ''}`"
                >
                  მინიმუმ 4 სიმბოლო
                </li>
                <li
                  :class="`${author3 === 0 ? ' text-red-500' : ''} ${
                    author3 === 1 ? 'text-gray-400 ' : ''
                  } ${author3 === 2 ? ' text-green-500' : ''}`"
                >
                  მინიმუმ ორი სიტყვა
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label for="title">სათაური <i>*</i></label>
            <div class="mt-1">
              <input
                type="text"
                v-model="title"
                placeholder="შეიყვანეთ სათაური"
                id="title"
                name="title"
                :class="`border-2 w-72 border-solid p-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  title1 === 0 ? ' bg-red-500/30 border-red-500' : ''
                } ${title1 === 1 ? 'text-gray-400 bg-white' : ''} ${
                  title1 === 2 ? ' bg-green-500/30 border-green-500' : ''
                }`"
              />
              <ul class="text-gray-400 mt-1">
                <li
                  :class="`${title1 === 0 ? ' text-red-500' : ''} ${
                    title1 === 1 ? 'text-gray-400 ' : ''
                  } ${title1 === 2 ? ' text-green-500' : ''}`"
                >
                  მინიმუმ 2 სიმბოლო
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div class="flex flex-col mt-3">
          <label for="description">აღწერა <i>*</i></label>
          <textarea
            name="description"
            id="description"
            v-model="description"
            cols="30"
            rows="10"
            :class="`border-2 w-full border-solid p-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              description1 === 0 ? ' bg-red-500/30 border-red-500' : ''
            } ${description1 === 1 ? 'text-gray-400 bg-white' : ''} ${
              description1 === 2 ? ' bg-green-500/30 border-green-500' : ''
            }`"
            placeholder="შეიყვანეთ აღწერა"
          ></textarea>
          <ul class="text-gray-400 mt-1">
            <li
              :class="`${description1 === 0 ? ' text-red-500' : ''} ${
                description1 === 1 ? 'text-gray-400 ' : ''
              } ${description1 === 2 ? 'text-green-500 ' : ''}`"
            >
              მინიმუმ 2 სიმბოლო
            </li>
          </ul>
        </div>
        <!-- Date and Categories -->
        <div class="flex gap-2 mt-2 items-center justify-between">
          <div>
            <label for="date" class="mt-2">გამოქვეყნების თარიღი <i>*</i></label>
            <div class="mt-1">
              <input
                type="date"
                placeholder="შეიყვანეთ ავტორი"
                :class="`border-2 w-72 border-solid p-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  !publishDate ? 'bg-red-500/30 border-red-500' : 'bg-green-500/30 border-green-500'
                }`"
                id="date"
                name="date"
                v-model="publishDate"
              />
            </div>
          </div>
          <div>
            <label for="category">კატეგორია <i>*</i></label>
            <div class="mt-1">
              <v-autocomplete
                v-model="selectedCategories"
                :disabled="isUpdating"
                :items="catStore.categories?.data"
                chips
                closable-chips
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                multiple
                clearable
                :class="`w-72 rounded-lg h-12 ${
                  !selectedCategories
                    ? 'bg-red-500/30 border-red-500'
                    : 'bg-green-500/30 border-green-500'
                }`"
                variant="outlined"
                :active="selectActive"
              >
                <template v-slot:chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :color="item.raw?.background_color"
                    :text="item.raw?.title"
                  ></v-chip>
                </template>

                <template v-slot:item="{ props, item }">
                  <v-chip-group column>
                    <v-chip
                      v-bind="props"
                      :text="item?.raw?.title"
                      :color="item.raw?.background_color"
                      class="bg-red-500 rounded-xl !text-sm"
                    ></v-chip>
                  </v-chip-group>
                </template>
              </v-autocomplete>
            </div>
          </div>
        </div>
        <!-- Email -->
        <div class="mt-3">
          <label for="mail">ელ-ფოსტა<i>*</i></label>
          <div class="mt-1">
            <input
              type="text"
              placeholder="Example@redberry.ge"
              id="mail"
              name="mail"
              :class="`border-2 w-72 border-solid p-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                email1 === 0 ? ' bg-red-500/30 border-red-500' : ''
              } ${email1 === 1 ? 'text-gray-400 bg-white' : ''} ${
                email1 === 2 ? ' bg-green-500/30 border-green-500' : ''
              }`"
              v-model="email"
            />
          </div>
        </div>
        <!-- Submit button -->
        <button
          type="submit"
          :class="` rounded-lg py-2 px-10 mt-10 ml-[70%] ${
            title1 === 2 &&
            author1 === 2 &&
            author2 === 2 &&
            author3 === 2 &&
            description1 === 2 &&
            publishDate &&
            selectedCategories &&
            email1 === 2
              ? 'bg-violet-500 text-white'
              : 'bg-gray-200 text-black'
          }`"
        >
          გამოქვეყნება
        </button>
      </form>
    </div>
    <SuccessModal message="ჩანაწი წარმატებით დაემატა" />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onUpdated, ref, watch } from 'vue'
import { useCategoriesStore } from '../stores/categories'
import axios from 'axios'
import { useSuccessStore } from '../stores/success'
import SuccessModal from '../components/SuccessModal.vue'

const selectedCategories = ref()
const isUpdating = ref(false)
const catStore = useCategoriesStore()
const title = ref()
const author = ref()
const description = ref()
const publishDate = ref()
const image = ref()
const selectActive = ref(false)
const email = ref()
const useSuccess = useSuccessStore()
const uploaded = ref(false)

function onImageChange(e: any) {
  image.value = e.target.files[0]
  uploaded.value = true
}

// Regex
const titleRegexp = /^.{2,}$/
const descriptionRegexp = /^.{2,}$/
const authorRegexp1 = /^[ა-ჰ\s]+$/
const authorRegexp2 = /^[ა-ჰ\s]{4,}$/
const authorRegexp3 = /^[ა-ჰ]{4,}.+[ა-ჰ]{4,}$/
const emailRegexp = /(?:[a-zA-Z0-9._-]+)@redberry\.ge/

// Tested
const title1 = ref()
const description1 = ref()
const author1 = ref()
const author2 = ref()
const author3 = ref()
const email1 = ref()

// Watch
watch(author, (val: any) => {
  if (authorRegexp1.test(val)) {
    author1.value = 2
  } else if (author.value.length === 0) {
    author1.value = 1
  } else {
    author1.value = 0
  }

  if (authorRegexp2.test(val)) {
    author2.value = 2
  } else if (author.value.length === 0) {
    author2.value = 1
  } else {
    author2.value = 0
  }

  if (authorRegexp3.test(val)) {
    author3.value = 2
  } else if (author.value.length === 0) {
    author3.value = 1
  } else {
    author3.value = 0
  }
})

watch(title, (val: any) => {
  if (titleRegexp.test(val)) {
    title1.value = 2
  } else if (title.value.length === 0) {
    title1.value = 1
  } else {
    title1.value = 0
  }
})

watch(description, (val: any) => {
  if (descriptionRegexp.test(val)) {
    description1.value = 2
  } else if (title.value.length === 0) {
    description1.value = 1
  } else {
    description1.value = 0
  }
})

watch(email, (val: any) => {
  if (emailRegexp.test(val)) {
    email1.value = 2
  } else if (email.value.length === 0) {
    email1.value = 1
  } else {
    email1.value = 0
  }
})

let timeout: number | any = -1
watch(isUpdating, (val) => {
  clearTimeout(timeout)
  if (val) {
    timeout = setTimeout(() => (isUpdating.value = false), 3000)
  }
})

function handleSubmit() {
  const formData = new FormData()

  formData.append('title', title.value)
  formData.append('image', image.value)
  formData.append('author', author.value)
  formData.append('description', description.value)
  formData.append('publish_date', publishDate.value)
  formData.append('email', email.value)
  formData.append('categories', JSON.stringify(selectedCategories.value.map((el: any) => el.id)))

  axios
    .post('/api/blogs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response: any) => {
      useSuccess.setSuccess(true)
    })
}

onUpdated(() => {
  console.log(image.value)
})
</script>
