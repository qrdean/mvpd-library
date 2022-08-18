<script setup lang="ts">
import { ref } from 'vue'
import { Apis } from '../services/api'

const router = useRouter()

const publishDate = ref('')
const title = ref('')
const isbn = ref('')
const lccn = ref('')
const author = ref('')

const submitForm = async() => {
  if (title.value === '' || author.value === '') {
    window.alert('Need to add title/author')
    return
  }
  const data = {
    lccn: lccn.value,
    isbn: isbn.value,
    title: title.value,
    author: author.value,
    publishDate: publishDate.value,
  }
  const res = await Apis.createBook(data)
  if (!res) {
    window.alert('Something went wrong')
    return
  }
  if (res.status === 200)
    window.alert('Book Created')
}

</script>

<template>
  <div style="text-align: left" class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="submitForm">
      <p class="m-2">
        <label class="input-label">Title</label>
        <input
          v-model="title"
          class="input-text"
          placeholder="Title"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Author</label>
        <input
          v-model="author"
          class="input-text"
          placeholder="Author"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">ISBN</label>
        <input
          v-model="isbn"
          class="input-text"
          placeholder="ISBN"
        >
      </p>
      <p class="m-2">
        <label class="input-label">LCCN</label>
        <input
          v-model="lccn"
          class="input-text"
          placeholder="LCCN"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Publish Date</label>
        <input
          v-model="publishDate"
          class="input-text"
          placeholder="Publish Date"
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
