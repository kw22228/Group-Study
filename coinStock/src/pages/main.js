import template from './main.template';
import Header from '../components/header';

import '../styles/index.css';
import CoinList from '../components/coinList';
import CoinData from '../api/coinData';
import { COINLIST_URL, COIN_DOMAIN } from '../lib/constant';

export default class Main {
    #element;
    #template;
    #components;
    #store;
    #api;

    constructor(elem, store) {
        this.#element = document.querySelector(elem);
        this.#template = template;
        this.#components = [];
        this.#store = store;
        this.#api = new CoinData(`${COIN_DOMAIN}${COINLIST_URL}`);

        this.render();
    }

    setComponents() {
        //header 컴포넌트 생성
        const headerComponent = new Header('#header');
        this.addComponent(headerComponent);

        const { coinData } = this.#store;

        const coinListComponent = new CoinList('#coinlist', {
            COINDATA: coinData,
        });
        this.addComponent(coinListComponent);
    }

    addComponent(component) {
        this.#components.push(component);
    }

    async render() {
        if (this.#store.coinData.length === 0) {
            this.#store.setCoinData(await this.#api.getCoinData());
        }

        this.#element.innerHTML = this.#template;

        this.setComponents();
        this.#components.map((component) => component.render());
    }
}
