<script setup lang="ts">
import { Locations } from "../pages/locations.vue"
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
const props = defineProps<{
  id: number,
  lccn?: string,
  isbn?: string,
  title: string,
  author: string,
  publishDate?: string,
  selectedLocation: Locations,
  fullInfo: boolean,
  checkedOut: boolean
}>()
let locationList = [
  { id: 1, locationName: "Library", enabled: true },
  { id: 2, locationName: "Night Stand", enabled: true },
  { id: 3, locationName: "Desk", enabled: true }
]
</script>

<template>
  <div class="card-container">
    <p class="font-bold text-xl mb-2">
      <span>
        {{ props.title }}
      </span>
      <span class="m-0">
        by {{ props.author }}
      </span>
    </p>
    <div text="left" v-if="props.fullInfo">
      <p class="m-2 text-base">
        Publish Date: {{ props.publishDate }}
      </p>
      <div v-if="props.lccn" class="m-2 text-sm">
        LCCN: {{ props.lccn }}
      </div>
      <p v-if="props.isbn" class="m-2 text-sm">
        ISBN: {{ props.isbn }}
      </p>
      <!--<button class="text-sm btn" :disabled="checkedOut" @click="$emit('checkout', props.id)">Checkout</button>-->
      Location
      <Listbox v-model="selectedLocation">
        <div class="w-62">
          <ListboxButton 
            class="relative text-black w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            {{ selectedLocation.locationName }}
          </ListboxButton>
          <ListboxOptions class="absolute mt-1 max-h-60 w-62 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption
              as="template"
              v-slot="{ active, selected }"
              v-for="location in locationList"
              :key="location.id"
              :value="location"
            >
            <li :class="{'bg-blue-500 text-white': active, 'bg-white text-black': !active}">
              <span :class="[ selected ? 'font-medium' : 'font-normal', 'block truncate', ]">{{ location?.locationName }}</span>
            </li>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  </div>
</template>
