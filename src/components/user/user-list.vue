<template>
  <section class="user-list">
    <user-item
      v-for="user in users"
      :user-id="user.id"
      :name="user.name"
      :address="user.address"
      :company="user.company"
      :phone="user.phone"
      :username="user.username"
      :website="user.website"
    />
  </section>
</template>

<script setup>
import { inject, onMounted } from "vue";
import { UserService } from "@/services/user-service.js";
import UserItem from "@/components/user/user-item.vue";

const { users, updateUsers } =  inject("users")

onMounted(async () => {
  await UserService.getAllUsers()
    .then((response) => {
      updateUsers(response.data)
    })
})
</script>

<style lang="scss" scoped>
.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>