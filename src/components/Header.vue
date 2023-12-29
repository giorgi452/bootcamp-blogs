<template>
  <nav class="p-3 border bg-white flex justify-between px-10 items-center fixed w-full">
    <RouterLink to="/"> <img src="../assets/images/LOGO-02.png" alt="Redberry" /></RouterLink>
    <LoginModal />
  </nav>
</template>

<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginModal from './LoginModal.vue'

export default defineComponent({
  components: { LoginModal },
  name: 'HeaderComponent'
})
</script>

<style scoped></style>
