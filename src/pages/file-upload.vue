<script setup lang="ts">
</script>
<template>
  <form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input class="btn" type="submit" value="Submit">
  </form>
  HelloWorld
</template>
