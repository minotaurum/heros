import { ref } from 'vue';

export function useSpeech() {
  const isSupported = ref('speechSynthesis' in window);

  const speakWord = (word: string) => {
    if (!isSupported.value) return;

    // Check if speaking, cancel if needed
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(word);

    // Attempt to set a Spanish voice. Usually default voices work per OS.
    // Try to find a specific Spanish voice, preferring es-ES or es-MX
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(
      (voice) => voice.lang.includes('es-') || voice.lang === 'es'
    );

    if (spanishVoice) {
      utterance.voice = spanishVoice;
    } else {
      // Fallback: If voices haven't loaded yet, try to load them and default to lang
      utterance.lang = 'es-ES';
    }

    utterance.rate = 0.9; // Slightly slower for better child understanding
    utterance.pitch = 1.2; // A friendlier pitch

    window.speechSynthesis.speak(utterance);
  };

  return {
    isSupported,
    speakWord,
  };
}
