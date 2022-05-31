<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  SwitchGroup,
  SwitchLabel,
  Switch,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

let x = ref(false)
const router = useRouter()

let locationList = ref([
  { id: 1, locationName: "Library", enabled: true },
  { id: 2, locationName: "Night Stand", enabled: true },
  { id: 3, locationName: "Desk", enabled: true }
])

let location = ref('')
const enabled = ref(false)

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true 
}

const closeModal = () => {
  isOpen.value = false 
}

const addLocation = () => {
  console.log(location.value)
  if (location.value) {
    locationList.value.push({ id: locationList.value[locationList.value.length-1].id++, locationName: location.value, enabled: true })
  }
  location.value = ''
}

</script>

<template>
  <h1>Locations</h1>
  <ul v-for="location in locationList">
    <div class="mb-2">
      <SwitchGroup>
        <div class="flex items-center">
          <SwitchLabel class="mr-2">{{ location.locationName }}</SwitchLabel>
          <Switch
            v-model="location.enabled"
            :class='location.enabled ? "bg-teal-800" : "bg-teal-300"'
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span 
              :class='location.enabled ? "translate-x-6" : "translate-x-1"'
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              />
          </Switch>
        </div>
      </SwitchGroup>
    </div>
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
    <Dialog as="div" :open="isOpen" @close="closeModal()" class="relative z-10">
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
              <DialogTitle as="h3" class="text-lg font-medium leading-6 dark:text-white">New Location</DialogTitle>
              <DialogDescription class="mt-2">

                <input class="input-text" v-model="location"/>
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
</template>
