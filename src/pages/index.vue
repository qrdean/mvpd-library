<script setup lang="ts">
import Apis from '../services/api'

const getBooks = async () => {
  let res = await Apis.getAllBooks()
  console.log(res)
}

</script>

<template>
  <div>
    <div i-carbon-book text-4xl inline-block />
    <p>Welcome To The Library </p>
    <p>
      <em text-sm op75>Where All Your Books Reside</em>
    </p>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="getBooks"
      >
        Get All Books Test
      </button>
    </div>

  </div>
</template>
