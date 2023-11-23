<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div>
      <h1>Comments</h1>
      <ul>
        <li v-for="comment in comments">
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {PostService} from "@/services/post-service.js";

const props = defineProps({
  userId: { type: Number, required: true },
  postId: { type: Number },
  title: { type: String, required: true },
  description: { type: String, required: true }
})

const comments = ref([])

onMounted(async () =>  {
  await PostService.getPostComments(props.postId).then((response) => comments.value = response.data )
})
</script>

<style lang="scss" scoped>

</style>