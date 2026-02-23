# Heros Minigame - AI Agent Instructions

## Project Overview

- **Name:** Heros (named after the user's nephew).
- **Type:** Educational vocabulary minigame for children.
- **Tech Stack:** Vue 3 + Vite SPA (Single Page Application), deployed to Cloudflare Workers.
- **Languages:**
  - **Codebase:** All code (variables, components, functions, commits) MUST be written in **English**.
  - **Game UI/Content:** The user interface and game content MUST be in **Spanish**.

## Gameplay Rules

- **Core Loop:** The game will present **3 cards** to the user at a time. Endless progression; no scorekeeping or pressure, just continuous learning.
- **Cards:** Each card will display a picture/illustration representing an item.
- **Prompt:** The game will prompt the user with a single word (e.g., "León").
- **Interaction:** The player (Heros) must tap the card that matches the prompt.

## Audio & Visual Feedback

- **Animations:**
  - **Correct Answer:** Positive visual feedback (e.g., card scaling up, confetti, success glow).
  - **Incorrect Answer:** Gentle encouragement (e.g., gentle shake/jiggle animation on the wrong card).
- **Audio (Text-to-Speech):** The game should use the Web Speech API (or similar) to read the prompt out loud in Spanish when presented, helping the child associate the audio with the text and image.
- **Assets/Images:** Since custom illustrations are not available yet, use free stock picture APIs (like Unsplash, Pixabay, or similar accessible free image sources) to fetch high-quality placeholder images for the items.

## Vocabulary Database

The game utilizes elements from the `Items.md` file. The categories include:

- Animals (León, Perro, Gato...)
- Family & People (Mamá, Papá...)
- Colors (Rojo, Azul...)
- Numbers (Uno, Dos...)
- Food & Fruits (Manzana, Plátano...)
- Body Parts (Cabeza, Ojo...)
- Household Objects (Cama, Mesa...)
- Clothes (Camisa, Pantalón...)

_(AI Agents: Always refer to `Items.md` for the single source of truth regarding game items.)_

## Engineering Guidelines

- **Framework:** Vue.js 3 with Vite (use Composition API `<script setup>`).
- **Styling:** Design must be extremely child-friendly! Prioritize rich aesthetics, vibrant colors, large readable text, rounded corners, and dynamic micro-animations.
- **Deployment:** Configured for Cloudflare Workers (ensure compatibility with edge environments). Keep the build fast and optimized.
