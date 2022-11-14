import pickNumberInList from '@lib/utils/pickNumberInList';

export default class Charger {
  #target;
  #state;

  constructor(target) {
    this.#target = document.querySelector(target);
    this.#state = {
      wallet: {
        account: 0,
        coins: {},
      },
    };
    this.render();
    this.setEvent();
  }
  render() {
    this.#target.innerHTML = this.template();
  }
  template() {
    return /* html */ `
    <div>
        <h2>자판기 동전 충전하기</h2>
        <input id="account" />
        <button class="inputBtn">충전하기</button>
        <div class="myAccount">보유금액 : ${this.#state.wallet}원</div>
    </div>
    <div>
      <h1>동전 보유 현황</h1>
      <div>
        <div>동전 | 개수<div>
        <div >500원 |  </div>
        <div >100원 |  </div>
        <div >50원 |  </div>
        <div >10원 |  </div>
      </div>
    </div>
    `;
  }

  setEvent() {
    const btn = this.#target.querySelector('.inputBtn');
    btn.addEventListener('click', (e) => {
      let account = this.#target.querySelector('#account').value;
      this.setState({ wallet: this.#state.wallet + Number(account) }); // {wallet: 0} {wallet : wallet + account}
      const pickPrice = pickNumberInList(this.#state.wallet);
    });
  }

  setState(newState) {
    this.#state = { ...this.#state, ...newState }; // { wallet: 0, wallet: account }

    this.render();
    this.setEvent();
  }
}
