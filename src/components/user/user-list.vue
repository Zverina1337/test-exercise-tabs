<template>
  <section class="user-list">
    {{ users }}
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { UserService } from "@/services/user-service.js";

const users = ref([])

onMounted(async () => {
  await UserService.getAllUsers().then((response) => users.value = response.data)
})
</script>

<style lang="scss" scoped>

</style>