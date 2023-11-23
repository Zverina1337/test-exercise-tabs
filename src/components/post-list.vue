<template>
  <section class="posts">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :user-id="post.userId"
      :title="post.title"
      :description="post.body"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { PostService } from "@/services/post-service.js";
import PostItem from "@/components/post-item.vue";

const posts = ref([])

onMounted(async () => {
  await PostService.getAllPosts().then((response) => posts.value = response.data)
})
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>