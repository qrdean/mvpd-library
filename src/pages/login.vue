<script setup lang="ts">
import { ref } from 'vue'
import Apis from '../services/api'
import User from '../services/user'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async() => {
  // console.log(email.value)
  // console.log(password.value)
  const data = {
    email: email.value,
    password: password.value,
  }

  const res = await Apis.login(data)

  if (!res) {
    window.alert('Something went wrong')
    return
  }
  // console.log(res)
  User.setLocalStorage(res)

  window.alert('user logged in')
}

</script>

<template>
  <div style="text-align: left" class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="login">
      <p class="m-2">
        <label class="input-label">Email</label>
        <input
          v-model="email"
          class="input-text"
          placeholder="Email"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Password</label>
        <input
          v-model="password"
          class="input-text"
          placeholder="Password"
          :required="true"
        >
      </p>
      <p class="m-2">
        <button class="m-3 text-sm btn" type="submit">
          Submit
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
