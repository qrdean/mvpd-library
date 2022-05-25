<script setup lang="ts">
const props = defineProps<{
  id: number,
  lccn?: string,
  isbn?: string,
  title: string,
  author: string,
  publishDate?: string,
  locationId?: number,
  fullInfo: boolean,
  checkedOut: boolean
}>()


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
      <p class="text-base">
        Publish Date: {{ props.publishDate }}
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
