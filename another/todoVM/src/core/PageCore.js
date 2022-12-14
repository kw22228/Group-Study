import currentPage from '../router/currentPage';
import diff from '../lib/diff';

import store from '../redux';

export default class PageCore {
    #target;
    #props;
    #state;

    constructor(target, props = {}) {
        this.#target = target;
        this.#props = { append: false, ...props };

        store.subscribe(() => {
            this.render();
        });

        this.setRoutingPage();
        this.setup();
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

    setRoutingPage() {
        currentPage.Page = this;
    }

    template() {
        return '';
    }

    render() {
        // this.#target.innerHTML = this.template();
        const newNode = this.#target.cloneNode(true);
        newNode.innerHTML = this.template();

        const oldChildNodes = [...this.#target.childNodes];
        const newChildNodes = [...newNode.childNodes];
        const maxLength = Math.max(oldChildNodes.length, newChildNodes.length);
        for (let i = 0; i < maxLength; i++) {
            diff(this.#target, newChildNodes[i], oldChildNodes[i]);
        }
    }

    setState(newState) {
        this.#state = { ...this.#state, ...newState };

        this.render();
    }
}
