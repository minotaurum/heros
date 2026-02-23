<template>
  <svg viewBox="0 0 100 100" class="item-icon">
    <!-- Animales -->
    <g v-if="id === 'leon'">
      <circle cx="50" cy="50" r="40" fill="#f59e0b" />
      <circle cx="50" cy="50" r="25" fill="#fcd34d" />
      <circle cx="35" cy="45" r="4" fill="#1f2937" />
      <circle cx="65" cy="45" r="4" fill="#1f2937" />
      <path
        d="M 45 60 Q 50 65 55 60"
        stroke="#1f2937"
        stroke-width="3"
        fill="none"
      />
    </g>
    <g v-else-if="id === 'perro'">
      <ellipse cx="50" cy="60" rx="30" ry="25" fill="#a16207" />
      <path d="M 20 40 Q 15 70 25 60" fill="#713f12" />
      <path d="M 80 40 Q 85 70 75 60" fill="#713f12" />
      <circle cx="35" cy="55" r="4" fill="#1f2937" />
      <circle cx="65" cy="55" r="4" fill="#1f2937" />
      <circle cx="50" cy="65" r="6" fill="#1f2937" />
    </g>
    <g v-else-if="id === 'gato'">
      <circle cx="50" cy="55" r="30" fill="#6b7280" />
      <polygon points="20,20 35,30 25,45" fill="#4b5563" />
      <polygon points="80,20 65,30 75,45" fill="#4b5563" />
      <circle cx="35" cy="50" r="4" fill="#fcd34d" />
      <circle cx="65" cy="50" r="4" fill="#fcd34d" />
      <path
        d="M 40 60 Q 50 65 60 60"
        stroke="#1f2937"
        stroke-width="2"
        fill="none"
      />
    </g>
    <g
      v-else-if="
        [
          'vaca',
          'oveja',
          'cabra',
          'conejo',
          'cerdo',
          'elefante',
          'jirafa',
          'oso',
          'mono',
          'pajaro',
          'pez',
          'tiburon',
          'delfin',
          'abeja',
          'mariposa',
          'rana',
          'pato',
        ].includes(id)
      "
    >
      <!-- Generic Animal Fallback -->
      <circle cx="50" cy="50" r="30" fill="#4ade80" />
      <circle cx="35" cy="45" r="5" fill="#1f2937" />
      <circle cx="65" cy="45" r="5" fill="#1f2937" />
      <path
        d="M 40 60 Q 50 70 60 60"
        stroke="#1f2937"
        stroke-width="3"
        fill="none"
      />
      <text x="50" y="20" font-size="12" text-anchor="middle" fill="#374151">
        Animal
      </text>
    </g>

    <!-- Familia -->
    <g
      v-else-if="
        [
          'mama',
          'papa',
          'hermano',
          'hermana',
          'abuelo',
          'abuela',
          'bebe',
          'nino',
          'nina',
          'amigo',
        ].includes(id)
      "
    >
      <circle cx="50" cy="35" r="20" fill="#fcd34d" />
      <path d="M 25 90 Q 50 60 75 90" fill="#3b82f6" />
      <circle cx="40" cy="30" r="3" fill="#1f2937" />
      <circle cx="60" cy="30" r="3" fill="#1f2937" />
      <path
        d="M 40 45 Q 50 50 60 45"
        stroke="#1f2937"
        stroke-width="2"
        fill="none"
      />
      <text x="50" y="10" font-size="10" text-anchor="middle" fill="#374151">
        Persona
      </text>
    </g>

    <!-- Colores -->
    <g v-else-if="id === 'rojo'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#ef4444" />
    </g>
    <g v-else-if="id === 'azul'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#3b82f6" />
    </g>
    <g v-else-if="id === 'verde'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#22c55e" />
    </g>
    <g v-else-if="id === 'amarillo'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#eab308" />
    </g>
    <g v-else-if="id === 'rosa'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#ec4899" />
    </g>
    <g v-else-if="id === 'naranja'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#f97316" />
    </g>
    <g v-else-if="id === 'morado'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#a855f7" />
    </g>
    <g v-else-if="id === 'blanco'">
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="10"
        fill="#ffffff"
        stroke="#e5e7eb"
        stroke-width="4"
      />
    </g>
    <g v-else-if="id === 'negro'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1f2937" />
    </g>
    <g v-else-if="id === 'marron'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#a16207" />
    </g>
    <g v-else-if="id === 'gris'">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#6b7280" />
    </g>

    <!-- Numeros -->
    <g
      v-else-if="
        [
          'uno',
          'dos',
          'tres',
          'cuatro',
          'cinco',
          'seis',
          'siete',
          'ocho',
          'nueve',
          'diez',
        ].includes(id)
      "
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="#f4f4f5"
        stroke="#3b82f6"
        stroke-width="4"
      />
      <text
        x="50"
        y="65"
        font-size="40"
        font-weight="bold"
        font-family="sans-serif"
        text-anchor="middle"
        fill="#3b82f6"
      >
        {{ numberMap[id] }}
      </text>
    </g>

    <!-- Comida -->
    <g v-else-if="id === 'manzana'">
      <circle cx="50" cy="55" r="30" fill="#ef4444" />
      <path
        d="M 50 25 Q 60 10 70 20"
        stroke="#16a34a"
        stroke-width="4"
        fill="none"
      />
    </g>
    <g v-else-if="id === 'platano'">
      <path d="M 20 20 Q 50 100 80 20 Q 60 80 20 20" fill="#eab308" />
    </g>
    <g
      v-else-if="
        [
          'naranja_fruta',
          'uva',
          'zanahoria',
          'papa_comida',
          'leche',
          'agua',
          'galleta',
          'pan',
          'huevo',
          'queso',
          'sandwich',
          'pizza',
          'melon',
          'fresa',
          'tomate',
          'arroz',
          'jugo',
          'helado',
        ].includes(id)
      "
    >
      <rect x="25" y="40" width="50" height="40" fill="#fcd34d" />
      <path d="M 25 40 L 50 20 L 75 40" fill="#f59e0b" />
      <text x="50" y="15" font-size="10" text-anchor="middle" fill="#374151">
        Comida
      </text>
    </g>

    <!-- Generic Fallback for everything else (Cuerpo, Hogar, Ropa) -->
    <g v-else>
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        rx="8"
        fill="#e5e7eb"
        stroke="#9ca3af"
        stroke-width="4"
      />
      <circle cx="50" cy="50" r="15" fill="#9ca3af" />
      <text x="50" y="85" font-size="12" text-anchor="middle" fill="#6b7280">
        ?
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id: string;
}>();

const numberMap: Record<string, string> = {
  uno: "1",
  dos: "2",
  tres: "3",
  cuatro: "4",
  cinco: "5",
  seis: "6",
  siete: "7",
  ocho: "8",
  nueve: "9",
  diez: "10",
};
</script>

<style scoped>
.item-icon {
  width: 100%;
  height: 100%;
}
</style>
