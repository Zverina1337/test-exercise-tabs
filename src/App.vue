<template>
  <div class="app">
    <tab-list :tabs="tabs" @tab-click="changeTab" />
    <keep-alive>
      <component :is="currentTab" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TabList from "@/components/tab-list.vue";
import PostList from "@/components/post/post-list.vue";
import UserList from "@/components/user/user-list.vue";

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

const changeTab = (value) => {
  currentTab.value = value;
}

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
