<script setup lang="ts">
import { ref } from 'vue'
import Book from '../../components/Book.vue'

const router = useRouter()

let publishDate =ref('1/1/2020')
let title =ref('title')
let isbn =ref('isbn')
let lccn =ref('lccn')
let author =ref('author')
let submitForm = () => {
  console.log(publishDate.value)
  console.log(title.value)
  console.log(isbn.value)
  console.log(lccn.value)
  console.log(author.value)
}

</script>

<template>
  <div class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <form @submit.prevent="submitForm">
      <p class="m-2">
        <label class="m-2">Title</label>
        <input 
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="title"
        >
      </p>
      <p class="m-2">
        <label class="m-2">Author</label>
        <input 
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          v-model="author"
        >
      </p>
      <p class="m-2">
        <label class="m-2">ISBN</label>
        <input 
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
        <input type="submit" value="Submit" />
      </p>
    </form>
 </div>
</template>
