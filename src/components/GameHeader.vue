<template>
  <header class="game-header">
    <div class="prompt-container">
      <h1 class="prompt-text">{{ title }}</h1>
      <button
        class="replay-button"
        @click="$emit('replay')"
        aria-label="Escuchar palabra otra vez"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="speaker-icon"
        >
          <path
            d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 1 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"
          />
          <path
            d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

defineEmits<{
  (e: "replay"): void;
}>();
</script>

<style scoped>
.game-header {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.prompt-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border: 4px solid #f3f4f6;
}

.prompt-text {
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0;
  text-transform: capitalize;
  letter-spacing: -0.05em;
}

.replay-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);
}

.replay-button:hover {
  background-color: #2563eb;
  transform: scale(1.1);
}

.replay-button:active {
  transform: scale(0.95);
}

.speaker-icon {
  width: 2rem;
  height: 2rem;
}

@media (max-width: 600px) {
  .prompt-text {
    font-size: 2.25rem;
  }
  .replay-button {
    width: 3rem;
    height: 3rem;
  }
  .speaker-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
