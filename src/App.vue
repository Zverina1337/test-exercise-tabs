<template>
  <div class="app">
    <tab-list :tabs="tabs" @tab-click="changeTab" />
    <keep-alive>
      <component :is="currentTab" />
    </keep-alive>
  </div>
</template>

<script setup>
import {onMounted, provide, ref, unref} from "vue";
import TabList from "@/components/tab-list.vue";
import PostList from "@/components/post/post-list.vue";
import UserList from "@/components/user/user-list.vue";
import {PostService} from "@/services/post-service.js";

const tabs = ref([
  {
    name: "Посты",
    component: PostList
  },
  {
    name: "Пользователи",
    component: UserList
  },
])

const currentTab = ref(tabs.value[0].component)

const posts = ref([]);
const isUserPosts = ref(false);
const users = ref([])
const currentUserName = ref("")

const changeCurrentUserName = (username) => {
  currentUserName.value = username;
}

const updateUsers = (value) => {
  users.value = [...value]
}

const changeIsUserPosts = (value) => isUserPosts.value = value;

const updatePosts = (newPosts) => {
  posts.value = [...newPosts];
}

const addPostsToEnd = (newPosts) => {
  posts.value.push(...newPosts);
}

const changeTab = (value) => {
  currentTab.value = value;
}

provide("posts", {
  posts,
  isUserPosts,
  changeIsUserPosts,
  updatePosts,
  addPostsToEnd,
})

provide("current-tab", {
  currentTab,
  changeTab
})

provide("users", {
  users,
  currentUserName,
  updateUsers,
  changeCurrentUserName
})

</script>

<style scoped lang="scss">
.app {
  scroll-behavior: smooth;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
}
</style>
