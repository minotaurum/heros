<template>
  <button
    class="game-card"
    :class="{
      'is-success': isSuccess,
      'is-error': isError,
    }"
    @click="$emit('select')"
    :disabled="disabled"
  >
    <div class="card-icon-wrapper">
      <ItemIcon :id="item.id" />
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Item } from "../data/items";
import ItemIcon from "./ItemIcon.vue";

defineProps<{
  item: Item;
  isSuccess: boolean;
  isError: boolean;
  disabled: boolean;
}>();

defineEmits<{
  (e: "select"): void;
}>();
</script>

<style scoped>
.game-card {
  background-color: #ffffff;
  border: 4px solid #f3f4f6;
  border-radius: 24px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.card-icon-wrapper {
  width: 80%;
  height: 80%;
}

.game-card:hover:not(:disabled) {
  transform: translateY(-8px) scale(1.02);
  border-color: #e5e7eb;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.game-card:active:not(:disabled) {
  transform: translateY(2px) scale(0.98);
}

.game-card.is-success {
  border-color: #4ade80;
  box-shadow: 0 0 0 8px rgba(74, 222, 128, 0.2);
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.game-card.is-error {
  border-color: #f87171;
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.game-card:disabled {
  cursor: default;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-2px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-8px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(8px, 0, 0);
  }
}

@keyframes popIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
