export default class Component {
    #container;
    #template;
    #data;

    constructor(template, container, data) {
        this.#template = template;
        this.#container = document.querySelector(container);
        this.#data = data;
    }

    render() {
        this.#container.innerHTML = this.#template(this.#data);
    }
}
