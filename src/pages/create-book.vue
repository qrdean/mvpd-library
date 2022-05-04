<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()

let publishDate = ref('')
let title = ref('')
let isbn = ref('')
let lccn = ref('')
let author = ref('')

let submitForm = () => {
  console.log(publishDate.value)
  console.log(title.value)
  console.log(isbn.value)
  console.log(lccn.value)
  console.log(author.value)
}

</script>

<template>
  <div style="text-align: left" class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="submitForm">
      <p class="m-2">
        <label class="m-2">Title</label>
        <input 
          placeholder="Title"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="title"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="m-2">Author</label>
        <input 
          placeholder="Author"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="author"
          :required="true"
        >
      </p>
      <p class="m-2">
        <label class="m-2">ISBN</label>
        <input 
          placeholder="ISBN"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="isbn"
        >
      </p>
      <p class="m-2">
        <label class="m-2">LCCN</label>
        <input 
          placeholder="LCCN"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="lccn"
        >
      </p>
      <p class="m-2">
        <label class="m-2">Publish Date</label>
        <input 
          placeholder="Publish Date"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
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
