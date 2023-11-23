<template>
  <article class="post-item">
    <div class="post-item__text-wrapper">
      <h1 class="post-item__title">Title: {{ title }}</h1>
      <p class="post-item__desc">Description: {{ description }}</p>
    </div>
    <comment-list :comments="comments" />
  </article>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CommentList from "@/components/comment/comment-list.vue";
import { CommentService } from "@/services/comment-service.js";

const props = defineProps({
  userId: { type: Number, required: true },
  postId: { type: Number },
  title: { type: String, required: true },
  description: { type: String, required: true }
})

const comments = ref([])

onMounted(async () =>  {
  await CommentService.getPostComments(props.postId)
      .then((response) => comments.value = response.data)
})
</script>

<style lang="scss" scoped>
.post-item {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__text-wrapper {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }

  &__title {
    color: black;
  }

  &__desc {
    color: black;
  }
}
</style>