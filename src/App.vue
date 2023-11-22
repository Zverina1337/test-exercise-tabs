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

const currentTab = ref('post-list')
const currentComponent = ref(defineAsyncComponent(() =>
    import(`./components/${currentTab.value}.vue`)
))

const tabs = ref([
  {
    name: "Посты",
    component: "post-list"
  },
  {
    name: "Пользователи",
    component: "user-list"
  },
])

const changeTab = (value) => {
  currentTab.value = value;

  currentComponent.value = defineAsyncComponent(() =>
      import(`./components/${currentTab.value}.vue`)
  )
}

</script>

<style scoped lang="scss">
.app {
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
