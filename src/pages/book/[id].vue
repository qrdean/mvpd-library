<script setup lang="ts">
import Book from '../../components/Book.vue'
import { store } from '~/services/store'
import { Apis } from '~/services/api'

const props = defineProps<{
  id: any
}>()
const router = useRouter()

const result = filterThing(store.state.books)
const book = ref(result?.[0])

const showSuccessMsg = ref(false)
const showFailureMsg = ref(false)
const msg = ref('')

function filterThing(books: any) {
  const result = books.filter((a: any) => a.id.toString() === props.id.toString())
  return result
}

const checkoutBookCallback = (event: any) => {
  // console.log('current user id here too')
  // console.log(event)
  // make call to backend
}
const locationChangeCallback = (locationId: any) => {
  Apis.editBookLocation({ bookId: book.value.id, inventoryLocationId: locationId }).then((res) => {
    if (res.success) {
      showSuccessMsg.value = true
      msg.value = res.message
      Apis.getBookById({ id: book.value.id }).then((res) => {
        if (res.success) {
          book.value = res.data
          store.setBookAction(res.data)
        }
      })
    }
    else {
      showFailureMsg.value = true
      msg.value = res.message
    }
  })
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
      @locationChange="locationChangeCallback"
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
