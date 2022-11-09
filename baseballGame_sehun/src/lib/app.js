export default class App {
  #rootElement;

  constructor(rootId) {
    this.#rootElement = document.getElementById(rootId);
  }
  // eslint-disable-next-line class-methods-use-this
  template() {
    return /* html */ `
    <h1> 숫자 야구 게임 </h1>
    <form id = "form">
        <input type="text" id="input">
        ..? 웹팩 너무 많이 에러뜸

    `;
  }
  render() {
    this.#rootElement.innerHTML = this.template();
  }
}
