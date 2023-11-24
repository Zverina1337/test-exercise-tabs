<template>
  <teleport to="#modals">
    <div v-if="isActive" @click="closeModal" class="modal-wrapper" />
      <div v-if="isActive" class="modal">
        <p class="modal__title">
          <slot name="title"></slot>
          <span
            class="modal__close-button"
            @click="closeModal"
          >
            X
          </span>
        </p>
        <div class="modal__content">
          <slot name="content"></slot>
        </div>
      </div>
  </teleport>
</template>

<script setup>
import {computed} from "vue";

defineProps({
  isActive: { type: Boolean, required: true },
})

const emit = defineEmits(["close-modal"])

const closeModal = () => {
  emit("close-modal", false)
}

</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 3;
  opacity: .3;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  background-color: #242424;
  padding: 20px;
  border-radius: 10px;
  z-index: 5;
  opacity: 1;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: start;

    width: 100%;
    height: 40px;
  }

  &__close-button {
    cursor: pointer;
  }

  &__content {
    width: 100%;
  }
}
</style>