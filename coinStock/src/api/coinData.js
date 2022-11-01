import Api from '@core/api';

export default class CoinData extends Api {
    async getData(params) {
        const data = await this.request(params);

        return data.slice(0, 100);
    }
}
