import axios from 'axios';

export default class CoinData {
    #url;
    constructor(url) {
        this.#url = url;
    }

    async getCoinData() {
        const res = await axios.get(this.#url);

        return res.data.slice(0, 100);
    }
}
