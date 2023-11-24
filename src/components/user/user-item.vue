<template>
  <article class="user-item">
    <div class="user-item__info">
      <h2 class="user-item__name">{{ name }}</h2>
      <p class="user-item__phone">Phone: {{ phone }}</p>
    </div>
    <button
      class="user-item__button"
      @click="getUserPosts"
    >
      Посмотреть посты пользователя
    </button>
  </article>
</template>

<script setup>
import { inject } from "vue";
import PostList from "@/components/post/post-list.vue";
import {PostService} from "@/services/post-service.js";

const props = defineProps({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: Object, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: Object, required: true }
})

const { changeTab } = inject("current-tab")
const { updatePosts, changeIsUserPosts } = inject("posts")
const { changeCurrentUserName } = inject("users")

const getUserPosts = async () => {
  changeTab(PostList)

  await PostService.getAllPosts(0, 20, { userId: props.userId })
    .then((response) => {
      changeIsUserPosts(true);
      changeCurrentUserName(props.name);
      updatePosts(response.data)
    })}
</script>

<style lang="scss" scoped>
.user-item {
  display: flex;
  width: 100%;
  gap: 10px;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    border-radius: 10px;
    width: 80%;
    padding: 15px;
  }

  &__name {
    color: black;
  }

  &__phone {
    color: black;
  }

  &__button {
    border: 1px solid white;
    outline: none;
    border-radius: 10px;
    background-color: #242424;
    cursor: pointer;

    transition: transform .4s;
  }

  &__button:hover {
    transform: scale(1.05);
  }

  &__button:active {
    transform: scale(0.95);
  }
}
</style>