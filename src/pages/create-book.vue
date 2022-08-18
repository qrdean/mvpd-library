<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import { Apis } from '../services/api'
import { store } from '~/services/store'

const router = useRouter()

const publishDate = ref('')
const title = ref('')
const isbn = ref('')
const lccn = ref('')
const author = ref('')

const showSuccessMsg = ref(false)
const showFailureMsg = ref(false)
const msg = ref('')

const submitForm = async() => {
  if (title.value === '' || author.value === '') {
    showFailureMsg.value = true
    msg.value = 'Need to add title/author'
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
  if (res.success) {
    setTimeout(() => {
      showSuccessMsg.value = false
    }, 2000)
    showSuccessMsg.value = true
    msg.value = res.message
    const result = await Apis.getAllBooks()
    if (result.success)
      store.setBooksAction(result.data)
  }
  else {
    setTimeout(() => {
      showFailureMsg.value = false
    }, 2000)
    showFailureMsg.value = true
    msg.value = res.message
  }
}

</script>

<template>
  <div class="mr-90 ml-90 mb-2">
    <TransitionRoot
      appear
      :show="showSuccessMsg"
      as="template"
      enter="transition-opacity duration-250"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-250"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="flex justify-center">
        <div class="alert-good" role="alert">
          <div class="flex">
            <div class="py-1">
              <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            </div>
            <div>
              <p class="font-bold">
                {{ msg }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
    <TransitionRoot
      appear
      :show="showFailureMsg"
      as="template"
      enter="transition-opacity duration-250"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-250"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="flex justify-center">
        <div class="alert-error" role="alert">
          <div class="flex">
            <div class="py-1">
              <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            </div>
            <div>
              <p class="font-bold">
                {{ msg }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
    <div i-carbon-book text-4xl inline-block />
    <div style="text-align: left" class="p-3 m-2 b-1 b-white b-rounded">
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
  </div>
</template>
