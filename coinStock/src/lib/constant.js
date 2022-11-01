import axios from 'axios';

export const COIN_DOMAIN = 'https://api.coinpaprika.com';
export const COINLIST_URL = '/v1/coins';

export const axiosInstance = axios.create({
    baseURL: COIN_DOMAIN,
});
