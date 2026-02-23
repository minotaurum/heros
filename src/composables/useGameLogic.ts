import { ref, computed } from 'vue';
import { items, type Item } from '../data/items';
import confetti from 'canvas-confetti';
import { useSpeech } from './useSpeech';

export function useGameLogic() {
  const { speakWord } = useSpeech();

  // State
  const currentCards = ref<Item[]>([]);
  const targetItem = ref<Item | null>(null);

  // Status to manage animations/interactions
  // 'waiting', 'success', 'error'
  const gameState = ref<'waiting' | 'success' | 'error'>('waiting');

  // Utility to shuffle an array
  const shuffle = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Start a new round
  const startNewRound = () => {
    // Reset state
    gameState.value = 'waiting';

    // Pick 3 random distinct items
    const shuffledItems = shuffle(items);
    const selectedCards = shuffledItems.slice(0, 3);

    // Pick 1 of those 3 as the target
    const targetIndex = Math.floor(Math.random() * 3);
    const target = selectedCards[targetIndex];

    currentCards.value = selectedCards;
    targetItem.value = target;

    // Wait a brief moment before speaking so the user observes the transition
    setTimeout(() => {
      speakWord(target.name);
    }, 500);
  };

  // Handle a user tapping a card
  const selectCard = (item: Item) => {
    if (gameState.value === 'success') return; // Prevent spam clicking while transitioning

    if (item.id === targetItem.value?.id) {
      // Correct selection!
      gameState.value = 'success';

      // Celebrate
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffc107', '#4caf50', '#03a9f4', '#e91e63'],
        disableForReducedMotion: true
      });

      speakWord('¡Muy bien!');

      // Advance to next round after delay
      setTimeout(() => {
        startNewRound();
      }, 2000);
    } else {
      // Incorrect selection
      gameState.value = 'error';

      // Gentle error sound or speech
      speakWord('Intenta otra vez');

      // Reset state back to waiting almost immediately so they can try again
      setTimeout(() => {
        if (gameState.value === 'error') {
          gameState.value = 'waiting';
        }
      }, 800);
    }
  };

  const replayAudio = () => {
    if (targetItem.value) {
      speakWord(targetItem.value.name);
    }
  };

  return {
    currentCards,
    targetItem,
    gameState,
    startNewRound,
    selectCard,
    replayAudio
  };
}
