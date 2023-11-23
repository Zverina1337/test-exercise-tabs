<template>
  <div class="comment-list">
    <h1 class="comment-list__title">Comments</h1>
    <ul class="comment-list__list">
      <comment-item
        v-for="comment in comments"
        :description="comment.body"
        :email="comment.email"
        :name="comment.name"
        :id="comment.id"
      />
    </ul>
    <form class="comment-list__input-wrapper">
      <label for="add-comment">
        Add New Comment
      </label>
      <input
          v-model="model.comment"
          id="add-comment"
          type="text"
          class="comment-list__input"
      >
      <button @click="addNewComment">Add</button>
    </form>
  </div>
</template>

<script setup>
import CommentItem from "@/components/comment/comment-item.vue";
import {ref} from "vue";

defineProps({
  comments: { type: Array, required: true }
})

const model = ref({
  comment: ""
})

const emit = defineEmits(["add-new-comment"])

const addNewComment = () => {
  emit("add-new-comment", model.value.comment)
  console.log(model.value.comment)
}
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    color: black;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__input {

  }

  &__input-wrapper {

  }
}
</style>