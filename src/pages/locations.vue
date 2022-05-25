<script setup lang="ts">
import { ref } from 'vue'

let x = ref(false)
const router = useRouter()

let locationList = ref([
  { id: 1, locationName: "Library" },
  { id: 2, locationName: "Night Stand" },
  { id: 3, locationName: "Desk" }
])

let location = ref('')

const newLocation = () => {
  x.value = true
}
const addLocation = () => {
  console.log(location.value)
  if (location.value) {
    locationList.value.push({ id: locationList.value[locationList.value.length-1].id++, locationName: location.value })
  }

  x.value = false
}

</script>

<template>
  <h1>Locations</h1>
  <ul v-for="location in locationList">
    <li>{{ location.locationName }}</li>
  </ul>
  <div v-if="x.valueOf()">
    <label class="input-label">New Label</label>
    <input class="input-text" v-model="location" />
    <button
      class="btn m-3 text-sm mt-8"
      @click="addLocation()"
    >
      +
    </button>
  </div>
  <div>
    <button
      class="btn m-3 text-sm mt-8"
      @click="newLocation()"
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
</template>
