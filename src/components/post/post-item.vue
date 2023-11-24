<template>
  <article class="post-item">
    <div class="post-item__text-wrapper">
      <h1 class="post-item__title">Title: {{ title }}</h1>
      <p class="post-item__desc">Description: {{ description }}</p>
    </div>
    <comment-list
      :comments="comments"
      @add-new-comment="updateCurrentPostComments"
    />
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

const getCurrentPostComments =  () => {
  return CommentService.getPostComments(props.postId)
      .then((response) => comments.value = response.data)
}

const updateCurrentPostComments = (data) => {
  comments.value.push({ ...data })
  // JSONPlaceholder API делает фейковый запрос потому не обновляю данные, запихиваю их напрямую в массив comments

   CommentService.createComment(data, props.postId)
}

onMounted(  () =>  {
   getCurrentPostComments()
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