<template>
  <section class="posts">
    <div v-if="isUserPosts">
      Посты пользователя: {{ currentUserName }}
      <button class="posts__clear-button" @click="getPosts">Очистить фильтр пользователя</button>
    </div>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post-id="post.id"
      :user-id="post.userId"
      :title="post.title"
      :description="post.body"
    />
    <div
      v-if="!isUserPosts"
      class="observer"
      v-observer="getPosts"
    />
  </section>
</template>

<script setup>
import { inject, ref } from "vue";
import { PostService } from "@/services/post-service.js";
import PostItem from "@/components/post/post-item.vue";

const { posts, addPostsToEnd, isUserPosts, changeIsUserPosts } = inject("posts")
const { currentUserName } = inject("users")
const gap = ref(20);
const startValue = ref(0)

const getPosts = () => {
  if (startValue.value < 100) {
    PostService.getAllPosts(startValue.value, 20)
      .then((response) => {
        changeIsUserPosts(false)
        addPostsToEnd(response.data);
      })
    startValue.value += gap.value;
  }
}

</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  &__clear-button {
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform .4s;
  }

  &__clear-button:hover {
    transform: scale(1.05);
  }

  &__clear-button:active {
    transform: scale(0.95);
  }
}
.observer {
  width: 100%;
  height: 50px;
}
</style>