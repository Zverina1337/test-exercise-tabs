<template>
  <section class="posts">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post-id="post.id"
      :user-id="post.userId"
      :title="post.title"
      :description="post.body"
    />
    <div class="observer" ref="observerRef" />
  </section>
</template>

<script setup>
import {onMounted, ref, unref} from "vue";
import { PostService } from "@/services/post-service.js";
import PostItem from "@/components/post/post-item.vue";

const posts = ref([])
const gap = ref(20);
const startValue = ref(0)
const postCount = ref(unref(gap))
const observerRef = ref()

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

const getPosts = (startValue, postCount) => {
   PostService.getAllPosts(startValue, postCount)
    .then((response) => {
      posts.value.push(...response.data);
    })
}

const callback = (entries) => {
  if (entries[0].isIntersecting) {
    if (posts.value.length < 100) {
      getPosts(startValue.value, postCount.value)
      startValue.value += gap.value;
    }
  }
}

onMounted( () => {
  const observer = new IntersectionObserver(callback, options);
  observer.observe(unref(observerRef))
})
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}
.observer {
  width: 100%;
  height: 50px;
}
</style>