<template>
  <div class="app">
    <tab-list :tabs="tabs" @tab-click="changeTab" />
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import TabList from "@/components/tab-list.vue";

const tabs = ref([
  {
    name: "Посты",
    component: "post/post-list.vue"
  },
  {
    name: "Пользователи",
    component: "user/user-list.vue"
  },
])

const currentTab = ref(tabs.value[0].component)
const currentComponent = ref(defineAsyncComponent(() =>
    import(`./components/${currentTab.value}`)
))

const changeTab = (value) => {
  currentTab.value = value;

  currentComponent.value = defineAsyncComponent(() =>
      import(`./components/${currentTab.value}`)
  )
}

</script>

<style scoped lang="scss">
.app {
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
