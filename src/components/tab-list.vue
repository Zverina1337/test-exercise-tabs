<template>
  <header class="tabs">
    <nav class="tabs__nav">
      <a
        href="#"
        v-for="tab in tabs"
        class="tabs__item"
        @click="clickTab(tab.component)"
      >
        {{ tab.name }}
      </a>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true }
})

const emit = defineEmits(['tab-click'])
const clickTab = (value) => emit('tab-click', value)

</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: white;

  &__nav {
    display: flex;
    width: 100%;
  }

  &__item {
    color: black;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: center;
  }
}
</style>