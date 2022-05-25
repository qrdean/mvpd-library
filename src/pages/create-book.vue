<script setup lang="ts">
import { ref } from 'vue'
import Apis from '../services/api'

const router = useRouter()

let publishDate = ref('')
let title = ref('')
let isbn = ref('')
let lccn = ref('')
let author = ref('')

let submitForm = async () => {
  if (title.value == '' || author.value == '') {
    window.alert("Need to add title/author")
    return 
  }
  let data = {
    lccn: lccn.value,
    isbn: isbn.value,
    title: title.value,
    author: author.value,
    publishDate: publishDate.value
  }
  let res = await Apis.createBook(data)
  if (!res) {
    window.alert('Something went wrong')
    return
  }
  if (res.status == 200) {
    window.alert('Book Created')
  }
}

</script>

<template>
  <div style="text-align: left" class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="submitForm">
      <p class="m-2">
        <label class="input-label">Title</label>
        <input 
          class="input-text"
          placeholder="Title"
          v-model="title"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Author</label>
        <input 
          class="input-text"
          placeholder="Author"
          v-model="author"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="input-label">ISBN</label>
        <input 
          class="input-text"
          placeholder="ISBN"
          v-model="isbn"
        >
      </p>
      <p class="m-2">
        <label class="input-label">LCCN</label>
        <input 
          class="input-text"
          placeholder="LCCN"
          v-model="lccn"
        >
      </p>
      <p class="m-2">
        <label class="input-label">Publish Date</label>
        <input 
          class="input-text"
          placeholder="Publish Date"
          v-model="publishDate"
        >
      </p>
      <p class="m-2">
        <button class="m-3 text-sm btn" type="submit">Submit</button>
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
