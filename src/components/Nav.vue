<script setup lang="ts">
const loggedIn = false

const router = useRouter()
const home = () => {
  router.push(`/`)
}
const toCreate = () => {
  router.push(`/create-book`)
}
const toBookList = () => {
  router.push(`/hi/book`)
}
const toLogin = () => {
  router.push(`/login`)
}
const toRegister = () => {
  router.push(`/create-user`)
}
const logout = () => {
  console.log('implement logout, wipe the local cache')
}
</script>

<template>
  <nav text-lg mb-6 inline-flex gap-2>
    <button class="btn" @click="home()">Home</button> 
    <button class="btn" @click="toBookList()">Books</button>
    <button class="btn" @click="toCreate()">Add A Book</button>
    <div v-if="loggedIn"><button class="btn" @click="logout()">Logout</button></div>
    <div v-else inline-flex gap-2>
      <button class="btn" @click="toLogin()">Login</button>
      <button class="btn" @click="toRegister()">Register</button>
    </div>
  </nav>
</template>
