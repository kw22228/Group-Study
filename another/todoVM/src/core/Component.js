export default class Component {
    #target;
    #props;
    #state;

    constructor(target, props = {}) {
        this.#target = target;
        this.#props = { append: false, ...props };

        this.setup();
        this.setEvent();
        this.render();
    }
    get props() {
        return this.#props;
    }
    get target() {
        return this.#target;
    }
    get state() {
        return this.#state;
    }
    set state(defaultState) {
        this.#state = defaultState;
    }

    setup() {}

    template() {
        return '';
    }

    mounted() {}

    render() {
        if (this.#props.append) {
            const div = document.createElement('div');
            div.innerHTML = this.template();

            this.#target.appendChild(div.children[0]);
            return;
        }

        this.#target.innerHTML = this.template();
    }

    setState(newState) {
        this.#state = { ...this.#state, ...newState };

        this.render();
        this.mounted();
    }

    makeComponent(cp) {
        return `{{__${cp}__}}`;
    }

    setEvent() {}

    addEvent(eventType, selector, callback) {
        const children = [...this.#target.querySelectorAll(selector)];

        const isTarget = target => children.includes(target) || target.closest(selector);

        this.#target.addEventListener(eventType, e => {
            if (!isTarget(e.target)) return false;

            callback(e);
        });

        return this;
    }
}
