import pickRandomNumber from './lib/utils/pickRandomNumber';

export default class App {
  #rootElement;
  #state;

  constructor(rootId) {
    this.#rootElement = document.getElementById(rootId);
    this.#state = { randomNumber: 0, gameCount: 0 };

    this.pickRandomNumber();
    setTimeout(this.setEventHandler.bind(this), 0);
  }

  // eslint-disable-next-line class-methods-use-this
  template() {
    return /* html */ `
        <h1>숫자 야구게임</h1>
        <form id="form">
            <input type="text" id="input">
            <button id="addBtn">확인</button>
        </form>
        <h3>결과</h3>
        <div id="result"></div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  checkStrike(strike) {
    return strike === 3;
  }

  play(value) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      const index = value.indexOf(this.#state.randomNumber[i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }

    this.#state.gameCount++;

    return { strike, ball };
  }

  setEventHandler() {
    this.#rootElement.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault();

      // 결과 체크
      const { value } = this.#rootElement.querySelector('#input');
      const result = this.play(value);

      // 결과 렌더링
      this.resultRender(result);
    });
  }

  resultRender({ strike, ball }) {
    if (this.checkStrike(strike)) {
      this.#rootElement.querySelector('#result').innerHTML = /* html */ `
            <h3>정답을 맞추셧습니다. ${this.#state.gameCount}</h3>
            <h4>게임을 새로 시작하겠습니까?</h4>
            <button id="resetBtn">게임 재시작</button>
        `;

      //이벤트 위임 리팩토링 하기
      this.#rootElement.querySelector('#resetBtn').addEventListener('click', () => {
        this.resetGame();
      });

      return;
    }

    //게임 안끝남
    const div = document.createElement('div');
    div.innerHTML = `스트라이크 :${strike}, 볼 :${ball}, 횟수 : ${this.#state.gameCount}회`;
    this.#rootElement.querySelector('#result').appendChild(div);
  }

  resetGame() {
    this.#rootElement.querySelector('#result').innerHTML = '';
    this.#rootElement.querySelector('#input').value = '';
    this.pickRandomNumber();
  }

  pickRandomNumber() {
    this.#state.randomNumber = pickRandomNumber(3);
    console.log(this.#state.randomNumber);
  }

  render() {
    this.#rootElement.innerHTML = this.template();
  }
}
