export default class App {
  #rootElement;

  constructor(rootId) {
    this.#rootElement = document.getElementById(rootId);
  }
  // eslint-disable-next-line class-methods-use-this
  template() {
    return /* html */ `
    <h1> 숫자 야구 게임 </h1>
    <h5> 1~9까지의 수를 중복없이 3개 입력해주세요. </h5>
    <h5>올바른 예) 139</h5>
    <h5>틀린 예) 122</h5>
    <form id = "form">
        <input type="text" id="input">
        <button id="btn">가위바위보</button>
    </form>
    <h3> 결과 </h3>
    <div id="result"><div>  
    `;
  }

  render() {
    this.#rootElement.innerHTML = this.template();
  }
}
