import { Card } from "./Card.js";
import { CARD_SELECTOR, GAME_CONTAINER_SELECTOR, HIDDEN_CLASS_NAME, TITLE_SELECTOR } from "./game-constants.js";


export class Game {
    private readonly _IMAGE_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
    private readonly _MAX_OPEN_CARD_COUNT = 2;
    private readonly _END_GAME_TITLE = "🎉 Congratulations! 🎉";

    private _cards: Card[];
    private _gameContainer: HTMLElement;
    private _showCards: Card[] = [];

    constructor() {
        this._cards = this._generateCards();
        this._gameContainer = document.querySelector(GAME_CONTAINER_SELECTOR) as HTMLElement;
        this._displayCards();
        this._clickCards();
    }

    private _generateCards(): Card[] {
        const shuffledArray: number[] = [...this._IMAGE_IDS, ...this._IMAGE_IDS].sort(() => 0.5 - Math.random());
        const originalCards: Card[] = shuffledArray.map((id: number) => new Card(id));

        return originalCards;
    }

    private _displayCards(): void {
        if (!this._gameContainer) {
            return;
        }

        this._gameContainer.innerHTML = '';
        this._cards.forEach((card: Card) => {
            this._gameContainer.appendChild(card.element);
        });
    }

    private _clickCards(): void {
        this._gameContainer.addEventListener("click", (event: Event) => {
            const target: HTMLElement = event.target as HTMLElement;
            const cardElement: HTMLElement | null = target.closest(CARD_SELECTOR);

            const card: Card | undefined = this._cards.find((matchCard: Card) => matchCard.element === cardElement);

            if (!card || !cardElement?.classList.contains(HIDDEN_CLASS_NAME) || this._showCards.includes(card)) {
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

            const isStillHidden: boolean = this._cards.some(c => c.element.classList.contains(HIDDEN_CLASS_NAME));

            if (isStillHidden) {
                return;
            }

            const title: HTMLElement | null = document.querySelector(TITLE_SELECTOR);

            if (title) {
                title.textContent = this._END_GAME_TITLE;
            }

        });
    }
};