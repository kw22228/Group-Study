import { axiosInstance } from '@lib/constant';

export default class Api {
    #url;

    constructor(url) {
        this.#url = url;
    }

    async request(params) {
        const response = await axiosInstance.get(this.#url, { params });

        return response.data;
    }
}
