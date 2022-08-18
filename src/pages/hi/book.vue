<script setup lang="ts">
import { ref } from 'vue'
import Book from '../../components/Book.vue'
import { store } from '~/services/store'

const router = useRouter()
const bookList: any = ref(store.state.books)

const goToBook = (id: any) => {
  if (id)
    router.push(`/book/${encodeURIComponent(id)}`)
}
const titleSearch = ref('')

// Probably some debounce timer
watch(titleSearch, (titleToSearch) => {
  // console.log(title)
  // console.log('hi')
  if (titleToSearch !== '') {
    // console.log(title)
    const filteredArr = store.state.books.filter((a: any) => a.title.toLowerCase().includes(titleToSearch.toLowerCase()))
    // console.log(filteredArr)
    bookList.value = filteredArr
  }
  else {
    bookList.value = store.state.books
  }
})

</script>

<template>
  <div class="ml-90 mr-90">
    <div text="left" class="mb-5">
      <label class="input-label">Title Search</label>
      <input v-model="titleSearch" class="input-text">
    </div>

    <div class="overflow-hidden shadow-lg">
      <Book
        v-for="book in bookList"
        :id="book?.id"
        :key="book?.id"
        :title="book?.title"
        :author="book?.author"
        :full-info="false"
        style="cursor:pointer"
        @click="goToBook(book?.id)"
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
