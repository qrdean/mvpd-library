<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const router = useRouter()
const home = () => {
  router.push('/')
}
const toCreate = () => {
  router.push('/create-book')
}
const toBookList = () => {
  router.push('/hi/book')
}
const toFileUpload = () => {
  router.push('/file-upload')
}

/**
const toLogin = () => {
  // console.log('login')
  router.push('/login')
}
*/

/**
const toRegister = () => {
  router.push(`/create-user`)
} */
const toLocations = () => {
  router.push('/locations')
}
/**
const logout = () => {
  console.log('implement logout, wipe the local cache')
} */
</script>
<template>
  <nav class="mb-5 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-teal-800">
    <div class="container flex justify-between items-center mx-auto">
      <button class="clickable self-center text-xl font-semibold whitespace-nowrap dark:text-white" @click="home()">
        Library
      </button>
      <div id="mobile-menu-2" class="justify-between items-center w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                  Books
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute md:right-0 xs:left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" @click="toBookList()">Book List</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" @click="toCreate()">Add A Book</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" @click="toLocations()">Manage Locations</a>
                    </MenuItem>
                    <!-- <MenuItem v-slot="{ active }">
                      <a :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" @click="toFileUpload()">Upload Books</a>
                    </MenuItem>
-->
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
