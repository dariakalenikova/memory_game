import { Card } from "./Card.js";
import { CARD_SELECTOR, GAME_CONTAINER_SELECTOR, HIDDEN_CLASS_NAME, TITLE_SELECTOR } from "./game-constants.js";
export class Game {
    constructor() {
        this._IMAGE_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
        this._MAX_OPEN_CARD_COUNT = 2;
        this._END_GAME_TITLE = "🎉 Congratulations! 🎉";
        this._showCards = [];
        this._cards = this._generateCards();
        this._gameContainer = document.querySelector(GAME_CONTAINER_SELECTOR);
        this._displayCards();
        this._clickCards();
    }
    _generateCards() {
        const shuffledArray = [...this._IMAGE_IDS, ...this._IMAGE_IDS].sort(() => 0.5 - Math.random());
        const originalCards = shuffledArray.map((id) => new Card(id));
        return originalCards;
    }
    _displayCards() {
        if (!this._gameContainer) {
            return;
        }
        this._gameContainer.innerHTML = '';
        this._cards.forEach((card) => {
            this._gameContainer.appendChild(card.element);
        });
    }
    _clickCards() {
        this._gameContainer.addEventListener("click", (event) => {
            const target = event.target;
            const cardElement = target.closest(CARD_SELECTOR);
            const card = this._cards.find((matchCard) => matchCard.element === cardElement);
            if (!card || !(cardElement === null || cardElement === void 0 ? void 0 : cardElement.classList.contains(HIDDEN_CLASS_NAME)) || this._showCards.includes(card)) {
                return;
            }
            if (this._showCards.length === this._MAX_OPEN_CARD_COUNT) {
                const [card1, card2] = this._showCards;
                if (card1.id !== card2.id) {
                    card1.element.classList.add(HIDDEN_CLASS_NAME);
                    card2.element.classList.add(HIDDEN_CLASS_NAME);
                }
                this._showCards = [];
            }
            card.element.classList.remove(HIDDEN_CLASS_NAME);
            this._showCards.push(card);
            const isStillHidden = this._cards.some(c => c.element.classList.contains(HIDDEN_CLASS_NAME));
            if (isStillHidden) {
                return;
            }
            const title = document.querySelector(TITLE_SELECTOR);
            if (title) {
                title.textContent = this._END_GAME_TITLE;
            }
        });
    }
}
;
