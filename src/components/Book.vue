<script setup lang="ts">
const props = defineProps<{
  id: number,
  lccn?: string,
  isbn?: string,
  title: string,
  author: string,
  publishDate?: string
  fullInfo: boolean
  checkedOut: boolean
}>()

</script>

<template>
  <div class="p-3 m-2 ml-90 mr-90 b-1 b-white b-rounded">
    <p class="m-2">
      <span>
        {{ props.title }}
      </span>
      <span class="m-0">
        by {{ props.author }}
      </span>
    </p>
    <div v-if="props.fullInfo">
      <p class="m-2">
        {{ props.publishDate }}
      </p>
      <div v-if="props.lccn" class="m-2 text-sm">
        LCCN: {{ props.lccn }}
      </div>
      <p v-if="props.isbn" class="m-2 text-sm">
        ISBN: {{ props.isbn }}
      </p>
      <button class="text-sm btn" :disabled="checkedOut" @click="$emit('checkout', props.id)">Checkout</button>
    </div>
  </div>
</template>
