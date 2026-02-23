<template>
  <main class="game-container">
    <div v-if="!gameStarted" class="start-overlay">
      <div class="start-content">
        <h1>¡Heros!</h1>
        <p>Aprende palabras jugando</p>
        <button class="start-btn" @click="handleStart">Jugar</button>
      </div>
    </div>

    <template v-else>
      <GameHeader
        v-if="targetItem"
        :title="targetItem.name"
        @replay="replayAudio"
      />

      <div class="cards-grid">
        <GameCard
          v-for="item in currentCards"
          :key="item.id"
          :item="item"
          :is-success="gameState === 'success' && item.id === targetItem?.id"
          :is-error="gameState === 'error' && selectedId === item.id"
          :disabled="gameState === 'success'"
          @select="handleSelect(item)"
        />
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useGameLogic } from "./composables/useGameLogic";
import type { Item } from "./data/items";
import GameHeader from "./components/GameHeader.vue";
import GameCard from "./components/GameCard.vue";

const {
  currentCards,
  targetItem,
  gameState,
  startNewRound,
  selectCard,
  replayAudio,
} = useGameLogic();

const gameStarted = ref(false);
const selectedId = ref<string | null>(null);

const handleStart = () => {
  gameStarted.value = true;
  startNewRound();
};

const handleSelect = (item: Item) => {
  selectedId.value = item.id;
  selectCard(item);

  // Clear the individual selected error after a bit so animation can reset if needed
  if (gameState.value === "error") {
    setTimeout(() => {
      selectedId.value = null;
    }, 800);
  }
};
</script>

<style>
/* Global CSS reset and base styles */
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap");

:root {
  --app-bg: #e0f2fe; /* Light sky blue */
}

* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family:
    "Nunito",
    system-ui,
    -apple-system,
    sans-serif;
  background-color: var(--app-bg);
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

#app {
  width: 100%;
  height: 100%;
}

.game-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
}

.start-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--app-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.start-content {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 4px solid #f3f4f6;
}

.start-content h1 {
  font-size: 4rem;
  color: #f59e0b; /* Amber 500 */
  margin: 0 0 0.5rem 0;
  font-weight: 900;
  letter-spacing: -2px;
}

.start-content p {
  font-size: 1.5rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
  font-weight: 700;
}

.start-btn {
  background-color: #ef4444; /* Red 500 */
  color: white;
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem 3rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.4);
}

.start-btn:hover {
  transform: translateY(-4px) scale(1.05);
  background-color: #dc2626;
  box-shadow: 0 20px 25px -5px rgba(239, 68, 68, 0.4);
}

.start-btn:active {
  transform: translateY(2px) scale(0.95);
}

.cards-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex: 1;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .cards-grid {
    flex-direction: column;
    padding: 1rem;
    gap: 1.5rem;
  }

  .start-content h1 {
    font-size: 3rem;
  }

  .start-content p {
    font-size: 1.25rem;
  }
}
</style>
