export default class App {
  #rootElement;

  constructor(rootId) {
    this.#rootElement = document.getElementById(rootId);
  }
}
