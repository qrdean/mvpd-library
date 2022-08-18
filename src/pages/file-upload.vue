<script setup lang="ts">
/**
import { Apis } from '~/services/api'
function handleFileUpload(e: any) {
  console.log(e.target.files[0])
  const formData = new FormData()
  formData.append('file', e.target.files[0])
  Apis.uploadFile(formData).then((res) => {
    console.log(res)
  })
}
 */
</script>
<template>
  <form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="submit" value="Submit">
  </form>
  HelloWorld
</template>
