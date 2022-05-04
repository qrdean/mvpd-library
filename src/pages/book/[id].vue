<script setup lang="ts">
import Book from '../../components/Book.vue'
const props = defineProps<{ id: string }>()
const router = useRouter()

const masterList = [
  { id: 1, author: "Tolkien", book: "Twin Tower", publishDate: "9/9/1945", lccn: "", isbn: "", checkedOut: true},
  { id: 2, author: "Tolkien", book: "Fellow ship in the ring", lccn: "0", isbn: "1-1", publishDate: "9/9/1944", checkedOut: false },
  { id: 3, author: "Tolkien", book: "Return to the Kingdom",lccn: "3", isbn: "1-3", publishDate: "9/9/1946", checkedOut: false }
]

const checkoutBookCallback = (event: any) => {
  console.log('current user id here too')
  console.log(event)
  // make call to backend
}

const findById = (id: string) => {
  return masterList.filter(l => l.id.toString() == id)?.[0]
}
let book = findById(props.id)

</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <Book @checkout="checkoutBookCallback"
      :key="book.id" 
      :id="book.id"
      :title="book.book" 
      :author="book.author" 
      :lccn="book.lccn"
      :isbn="book.isbn"
      :publishDate="book.publishDate"
      :checked-out="book.checkedOut"
      :full-info="true"
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
