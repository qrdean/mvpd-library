<script setup lang="ts">
import Book from '../../components/Book.vue'
import { store } from '~/services/store'

const props = defineProps<{
  id: number
}>()
const router = useRouter()

const result = filterThing(store.state.books)
const book = ref(result?.[0])

function filterThing(books: any) {
  const result = books.filter((a: any) => a.id === props.id)
  return result
}

const checkoutBookCallback = (event: any) => {
  // console.log('current user id here too')
  // console.log(event)
  // make call to backend
}

</script>

<template>
  <div class="mr-90 ml-90">
    <div i-carbon-pedestrian text-4xl inline-block />
    <Book
      :id="book.id"
      :key="book.id"
      :title="book.title"
      :author="book.author"
      :lccn="book.lccn"
      :isbn="book.isbn"
      :publish-date="book.publishDate"
      :selected-location-id="book.location_id"
      :full-info="true"
      @checkout="checkoutBookCallback"
    />
    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
