import pickNumberInRange from '@lib/utils/pickNumberInRange';

export default class RacingCarGame {
  #rootElement;
  #state;

  constructor(rootId) {
    this.#rootElement = document.querySelector(rootId);
    this.#state = new Map();

    this.render();
    this.setEvent();
  }

  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return /* html */ `
        <div>
            <h2>자동차 경주 게임</h2>
            <h5>자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.</h5>
        </div>

        <div>
            <input type="text" id="setCarsInput">
            <button class="setCarsBtn">확인</button>
        </div>

        <h3>시도할 횟수를 입력해주세요.</h3>

        <div>
            <input type="text" id="playCount">
            <button class="playBtn">확인</button>
        </div>

        <h3>실행 결과</h3>
        <ul id="result">
        </ul>
    `;
  }

  render() {
    this.#rootElement.innerHTML = this.getTemplate();
  }

  setEvent() {
    this.#rootElement
      .querySelector('.setCarsBtn')
      .addEventListener('click', this.onClickSetCars.bind(this));

    this.#rootElement
      .querySelector('.playBtn')
      .addEventListener('click', this.onClickPlay.bind(this));
  }

  onClickSetCars() {
    const { value } = this.#rootElement.querySelector('#setCarsInput');
    value.split(',').forEach((v) => this.#state.set(v, ''));
  }

  onClickPlay() {
    const { value } = this.#rootElement.querySelector('#playCount');

    for (let i = 0; i < value; i++) {
      for (const [key, value] of this.#state) {
        const number = pickNumberInRange(0, 9);
        if (number < 4) continue;

        this.#state.set(key, `${value}-`);
      }
      this.resultRender();
    }

    this.playEnd();
  }

  playEnd() {
    const max = [...this.#state].reduce(
      (pre, [_, value]) => Math.max(pre, value.length),
      Number.MIN_SAFE_INTEGER,
    );

    const result = [...this.#state].filter(([_, value]) => value.length === max);

    const div = document.createElement('div');
    div.innerHTML = /* html */ `
        <div>최종 우승자: ${result.map(([key, _]) => key)}</div>
    `;

    this.#rootElement.querySelector('#result').appendChild(div.children[0]);
  }

  resultTemplate() {
    return /* html */ `
        <div style="border:1px solid black; margin-top:10px;">
            ${[...this.#state].map(([key, value]) => `<div>${key}: ${value}</div>`).join('')}
        </div>
    `;
  }

  resultRender() {
    const div = document.createElement('div');
    div.innerHTML = this.resultTemplate();

    this.#rootElement.querySelector('#result').appendChild(div.children[0]);
  }
}
