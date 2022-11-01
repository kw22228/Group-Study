import template from '@pages/main.template.hbs';

import Header from '@components/header';
import CoinList from '@components/coinList';

import CoinData from '@api/coinData';

import { COINLIST_URL } from '@lib/constant';

import '@styles/index.css';

export default class Main {
    #root;
    #template;
    #components;
    #store;
    #api;

    constructor(root, store) {
        this.#root = document.querySelector(root);
        this.#template = template;
        this.#store = store;
        this.#api = new CoinData(COINLIST_URL);

        this.#components = [];
    }

    setComponents() {
        const headerComponent = new Header('#header');
        this.addComponent(headerComponent);

        const { coinData: COINDATA } = this.#store;

        const coinListComponent = new CoinList('#coinlist', { COINDATA });
        this.addComponent(coinListComponent);
    }

    addComponent(component) {
        this.#components.push(component);
    }

    async render() {
        if (this.#store.coinData.length === 0) {
            this.#store.setCoinData(await this.#api.getData());
        }

        this.#root.innerHTML = this.#template();

        this.setComponents();
        this.#components.map((component) => component.render());
    }
}
