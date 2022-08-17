<script setup lang="ts">
import { ref } from 'vue'
import Apis from '../services/api'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const register = async() => {
  // console.log(email.value)
  // console.log(name.value)
  // console.log(password.value)

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  }

  const res = await Apis.register(data)

  if (!res) {
    window.alert('Something went wrong')
    return
  }
  window.alert('User Registered')
}

</script>

<template>
  <div style="text-align: left" class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="register">
      <p class="m-2">
        <label class="input-label">Email</label>
        <input
          v-model="email"
          class="input-text"
          placeholder="Email"
          type="email"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Username</label>
        <input
          v-model="name"
          class="input-text"
          placeholder="Username"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Password</label>
        <input
          v-model="password"
          class="input-text"
          placeholder="Password"
          type="password"
          :required="true"
        >
      </p>
      <p class="m-2">
        <button class="m-3 text-sm btn" type="submit">
          Create
        </button>
      </p>
    </form>
  </div>
  <div>
    <button
      class="btn m-3 text-sm mt-8"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>
