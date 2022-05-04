<script setup lang="ts">
import { ref } from 'vue'
import Book from '../../components/Book.vue'

const router = useRouter()

const titleSearch = ref('')

const masterList = [
  { id: 1, author: "Tolkien", book: "Twin Tower", publishDate: "9/9/1945", lccn: "", isbn: "" },
  { id: 2, author: "Tolkien", book: "Fellow ship in the ring", lccn: "0", isbn: "1-1", publishDate: "9/9/1944" },
  { id: 3, author: "Tolkien", book: "Return to the Kingdom",lccn: "3", isbn: "1-3", publishDate: "9/9/1946" }
]

let bookList = ref(masterList)

// Probably some debounce timer 
watch(titleSearch, (title) => {
  console.log(title)
  console.log('hi')
  if (title != "") {
    console.log(title)
    let filteredArr = masterList.filter(a => a.book.toLowerCase().includes(title.toLowerCase()))
    console.log(filteredArr)
    bookList.value = filteredArr
  }
})

</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <input v-model="titleSearch"/>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
    <Book v-for="book in bookList" 
      :key="book.id" 
      :id="book.id"
      :title="book.book" 
      :author="book.author" 
      :lccn="book.lccn"
      :isbn="book.isbn"
      :publishDate="book.publishDate"/>
  </div>
</template>
