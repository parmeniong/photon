import Element from "../element";
import { sanitize } from "../util";

class TextElement implements Element {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    render(): string {
        return `<span>${sanitize(this.text)}</span>`;
    }
}

export default function text(text: string): TextElement {
    return new TextElement(text);
}