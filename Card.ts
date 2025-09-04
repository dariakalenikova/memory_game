import { HIDDEN_CLASS_NAME } from "./game-constants.js";

export class Card {
    public readonly id: number;
    public element: HTMLElement;

    constructor(id: number) {
        this.id = id;
        this.element = document.createElement("div");
        this.element.classList.add("card", HIDDEN_CLASS_NAME);

        const image: HTMLImageElement = document.createElement("img");
        image.src = `images/${id}.png`;
        this.element.appendChild(image);
    }
}