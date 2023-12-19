<template>
  <div class="p-16 flex justify-center">
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
    <div class="flex flex-col">
      <!-- Add Blog -->
      <h1 class="text-3xl">ბლოგის დამატება</h1>
      <!-- Form -->
      <form class="mt-5">
        <!-- Image -->
        <div>
          <label for="image">ატვირთეთ ფოტო</label>
          <div
            class="flex flex-col bg-violet-300/30 border border-dashed border-black items-center gap-10 justify-around px-56 py-16 mt-1 rounded"
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
            <input type="file" id="image" name="image" accept="image/*" />
          </div>
        </div>
        <!-- Author and Title -->
        <div class="flex gap-2 mt-2 justify-between">
          <div>
            <label for="author" class="mt-2">ავტორი <i>*</i></label>
            <div class="mt-1">
              <input
                type="text"
                placeholder="შეიყვანეთ ავტორი"
                class="p-2 rounded-xl border w-72 focus:outline-none focus:border-violet-500 focus:border-2"
                id="author"
                name="author"
              />
              <ul class="text-gray-400 list-disc ml-5 mt-1">
                <li>მინიმუმ 4 სიმბოლო</li>
                <li>მინიმუმ ორი სიტყვა</li>
                <li>მხოლოდ ქართული სიმბოლოები</li>
              </ul>
            </div>
          </div>
          <div>
            <label for="title">სათაური <i>*</i></label>
            <div class="mt-1">
              <input
                type="text"
                placeholder="შეიყვანეთ სათაური"
                id="title"
                name="title"
                class="p-2 rounded-xl border w-72 focus:outline-none focus:border-violet-500 focus:border-2"
              />
              <ul class="text-gray-400 mt-1">
                <li>მინიმუმ 2 სიმბოლო</li>
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
            cols="30"
            rows="10"
            class="border rounded-xl p-2 mt-2"
            placeholder="შეიყვანეთ აღწერა"
          ></textarea>
          <ul class="text-gray-400 mt-1">
            <li>მინიმუმ 2 სიმბოლო</li>
          </ul>
        </div>
        <!-- Date and Categories -->
        <div class="flex gap-2 mt-2 justify-between">
          <div>
            <label for="date" class="mt-2">გამოქვეყნების თარიღი <i>*</i></label>
            <div class="mt-1">
              <input
                type="date"
                placeholder="შეიყვანეთ ავტორი"
                class="p-2 rounded-xl border w-72 focus:outline-none focus:border-violet-500 focus:border-2"
                id="date"
                name="date"
              />
            </div>
          </div>
          <div>
            <label for="category">კატეგორია <i>*</i></label>
            <div class="mt-1">
              <select
                name="category"
                id="category"
                class="p-2 rounded-xl border w-72 focus:outline-none focus:border-violet-500 focus:border-2 bg-white px-2"
              >
                <option value="IDK">idk</option>
                <option value="YOKOSO">yokoso</option>
                <option value="NIGGA">nigga</option>
                <option value="NIGGER">nigger</option>
              </select>
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
              class="p-2 rounded-xl border w-72 focus:outline-none focus:border-violet-500 focus:border-2"
            />
          </div>
        </div>
        <!-- Submit button -->
        <button type="submit" class="bg-gray-200 rounded py-2 px-10 mt-10">გამოქვეყნება</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
