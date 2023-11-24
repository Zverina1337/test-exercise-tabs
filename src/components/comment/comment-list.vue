<template>
  <modal :is-active="isActiveModalCommentForm" @close-modal="changeModalCommentFormShow">
    <template #title>Add Comment</template>
    <template #content>
      <form class="comment-list__input-wrapper" @submit.prevent="addNewComment">
        <label for="add-comment">
          Email
        </label>
        <input
            v-model="model.email"
            id="add-comment-email"
            type="email"
            class="comment-list__input"
        >
        <label for="add-comment">
          Name
        </label>
        <input
            v-model="model.name"
            id="add-comment-title"
            type="text"
            class="comment-list__input"
        >
        <label for="add-comment">
          Body
        </label>
        <input
            v-model="model.body"
            id="add-comment-desc"
            type="text"
            class="comment-list__input"
        >
        <button class="comment-list__button" type="submit">Add</button>
      </form>
    </template>
  </modal>
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
    <button @click="changeModalCommentFormShow">Add new comment</button>
  </div>
</template>

<script setup>
import CommentItem from "@/components/comment/comment-item.vue";
import {ref} from "vue";
import Modal from "@/components/ui/modal.vue";

defineProps({
  comments: { type: Array, required: true }
})

const model = ref({
  email: "",
  body: "",
  name: "",
  id: 6,
})

const isActiveModalCommentForm = ref(false);

const emit = defineEmits(["add-new-comment"])

const addNewComment = () => {
  emit("add-new-comment", model.value)
  model.value.id++;
  changeModalCommentFormShow()
}
const changeModalCommentFormShow = () => {
  isActiveModalCommentForm.value = !isActiveModalCommentForm.value
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
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__button {
    padding: 7px;
    border: none;
    outline: none;
    border-radius: 5px;
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