<script setup lang="ts">
import { ref } from 'vue'
import Book from '../../components/Book.vue'

const router = useRouter()

const goToBook = (id: string) => {
  if (id)
    router.push(`/book/${encodeURIComponent(id)}`)
}
const titleSearch = ref('')

const locationList = [
  { id: 1, locationName: "Library" },
  { id: 2, locationName: "Night Stand" },
  { id: 3, locationName: "Desk" }
]

const masterList = [
  { id: 1, author: "Tolkien", book: "Twin Tower", publishDate: "9/9/1945", lccn: "", isbn: "", checkedOut: true, locationId: 1},
  { id: 2, author: "Tolkien", book: "Fellow ship in the ring", lccn: "0", isbn: "1-1", publishDate: "9/9/1944", checkedOut: false, locationId: null },
  { id: 3, author: "Tolkien", book: "Return to the Kingdom",lccn: "3", isbn: "1-3", publishDate: "9/9/1946", checkedOut: false, locationId: 3 }
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
  <div class="ml-90 mr-90">
    <div text="left" class="mb-5">
      <label class="input-label">Title Search</label>
      <input class="input-text" v-model="titleSearch"/>
    </div>

    <div class="overflow-hidden shadow-lg">
      <Book style="cursor:pointer" v-for="book in bookList" 
        @click="goToBook(book.id.toString())"
        :key="book.id" 
        :id="book.id"
        :title="book.book" 
        :author="book.author" 
        :lccn="book.lccn"
        :isbn="book.isbn"
        :publishDate="book.publishDate"
        :checked-out="book.checkedOut"
        :full-info="false"
      />
    </div>
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
