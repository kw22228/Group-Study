export default class Store {
    #coinData;

    constructor() {
        this.#coinData = [];
    }

    get coinData() {
        return this.#coinData;
    }

    setCoinData(data) {
        this.#coinData = data;
    }
}
