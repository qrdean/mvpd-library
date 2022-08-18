<!-- eslint-disable vue/html-quotes -->
<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import { store } from '~/services/store'
import { Apis } from '~/services/api'

const router = useRouter()

const locationList: any = ref(store.state.location)

/**
const locationList = ref([
  { id: 1, locationName: 'Library', enabled: true },
  { id: 2, locationName: 'Night Stand', enabled: true },
  { id: 3, locationName: 'Desk', enabled: true },
])
*/

const showSuccessMsg = ref(false)
const showFailureMsg = ref(false)
const msg = ref('')
const location = ref('')
// const enabled = ref(false)

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const addLocation = () => {
  // console.log(location.value)
  if (location.value) {
    Apis.addInventoryLocation({ locationName: location.value }).then((res: any) => {
      if (res.success) {
        setTimeout(() => {
          showSuccessMsg.value = false
        }, 2000)
        msg.value = res.message
        showSuccessMsg.value = true
        Apis.getLocations().then((res: any) => {
          store.setLocationAction(res?.data)
          locationList.value = store.state.location
        })
        location.value = ''
      }
      else {
        setTimeout(() => {
          showFailureMsg.value = false
        }, 2000)
        msg.value = res.message
        showFailureMsg.value = true
      }
    })
  }
}

function deleteLocation(locationId: any) {
  if (locationId) {
    Apis.deleteInventoryLocation({ id: locationId }).then((res: any) => {
      if (res.success) {
        setTimeout(() => {
          showSuccessMsg.value = false
        }, 2000)
        msg.value = res.message
        showSuccessMsg.value = true
        Apis.getLocations().then((res: any) => {
          store.setLocationAction(res?.data)
          locationList.value = store.state.location
        })
      }
      else {
        setTimeout(() => {
          showFailureMsg.value = false
        }, 2000)
        msg.value = res.message
        showFailureMsg.value = true
      }
    })
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
    <ul v-for="locationItem in locationList" :key="locationItem.id">
      <span class="m-6">
        {{ locationItem.location_name }}
      </span>
      <button class="btn m-1 text-sm" @click="deleteLocation(locationItem.id)">
        Delete
      </button>
    </ul>
    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="openModal()"
      >
        New Location
      </button>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>

    <TransitionRoot :show="isOpen" as="template">
      <Dialog as="div" :open="isOpen" class="relative z-10" @close="closeModal()">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-teal-800 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 dark:text-white">
                  New Location
                </DialogTitle>
                <DialogDescription class="mt-2">
                  <input v-model="location" class="input-text">
                  <button
                    class="btn m-3 text-sm"
                    @click="addLocation();closeModal()"
                  >
                    Add
                  </button>
                </DialogDescription>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
