# memory_game

This project is a browser-based **Memory Game** implemented using **TypeScript**, **HTML**, and **CSS**. The game challenges players to find pairs of matching cards by flipping them over, emphasizing memory and pattern recognition skills.

## Overview
The game dynamically generates a shuffled set of cards and renders them on the game board. Players can interact with the cards by clicking to reveal their values. The game logic ensures that only two cards can be open at a time and handles matching logic efficiently.

## Implementation Details
- **TypeScript**: The core game logic is implemented in TypeScript, using object-oriented programming principles. Classes such as Card and Game encapsulate the behavior and state management of individual cards and the overall game. TypeScript provides static typing, making the codebase more maintainable and less prone to runtime errors.
- **DOM Manipulation**: The cards are created dynamically and added to the DOM. Event listeners manage player interactions, ensuring a responsive and interactive experience.
- **CSS Animations**: The card-flip effect is implemented entirely with CSS 3D transforms (perspective, rotateY, backface-visibility) and smooth transitions, providing a visually appealing and realistic flipping animation.
- **Game Mechanics**: The system efficiently tracks opened cards, compares them for matches, and updates their state accordingly. Cards are randomized each game, ensuring replayability.

This project demonstrates how modern **TypeScript** and **CSS** techniques can be combined to build interactive, maintainable, and visually engaging browser-based games.

[PLAY NOW]()
