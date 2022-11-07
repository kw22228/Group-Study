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

    `;
  }
  render() {
    this.#rootElement.innerHTML = this.template();
  }
}
