<template>
  <li class="comment-item">
    <h2 class="comment-item__user-email">User: {{ email }}</h2>
    <h3 class="comment-item__title">Title: {{ name }}</h3>
    <p class="comment-item__desc">{{ description }}</p>
  </li>
</template>

<script setup>
defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
.comment-item {
  border-radius: 10px;
  background-color: white;
  list-style-type: none;
  padding: 20px;

  &__user-email {
    color: black;
  }

  &__title {
    color: black;
  }

  &__desc {
    color: black;
  }
}
</style>