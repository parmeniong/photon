import Element from "./element";

export default class View {
    elements: Array<Element>;

    constructor(...elements: Array<Element>) {
        this.elements = elements;
    }

    render(): string {
        var result: string = "";
        this.elements.forEach((element) => result += element.render());
        return result;
    }
}