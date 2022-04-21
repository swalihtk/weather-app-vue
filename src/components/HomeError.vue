<template>
  <div class="h-[100vh] flex flex-col md:flex-row justify-center items-center gap-3">
    <img src="../assets/error.png" class="w-[100px]" />
    <h1 class="text-lg font-bold">{{ error }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeErrorComponent",
  props: {
    error: String,
  },
};
</script>

<style scoped>
</style>