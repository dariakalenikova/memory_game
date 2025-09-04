import { HIDDEN_CLASS_NAME } from "./game-constants.js";
export class Card {
    constructor(id) {
        this.id = id;
        this.element = document.createElement("div");
        this.element.classList.add("card", HIDDEN_CLASS_NAME);
        const image = document.createElement("img");
        image.src = `images/${id}.png`;
        this.element.appendChild(image);
    }
}
