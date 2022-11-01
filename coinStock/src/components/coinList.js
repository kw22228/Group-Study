import Component from '@core/component';
import template from '@components/coinList.template.hbs';

export default class CoinList extends Component {
    constructor(container, data) {
        super(template, container, data);
    }

    // async dataList() {
    //     const data = await axios.get('https://api.coinpaprika.com/v1/coins');
    //     const res = data.data.slice(0, 100);

    //     const coin = document.querySelector('.coinlistUl');
    //     coin.innerHTML = res
    //         .map(
    //             ({ name, id, symbol, rank }) =>
    //                 `<li>name: ${name}, id: ${id}, symbol: ${symbol}, rank: ${rank}</li>`,
    //         )
    //         .join('');
    // }
}
