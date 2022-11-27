export default class Store {
  #state;
  #reducers;
  #handlers;

  constructor(reducers) {
    this.#reducers = reducers;
    this.#handlers = [];
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    if (this.#state === value) return;
    if (JSON.stringify === JSON.stringify(value)) return;

    this.#state = value;
    this.#handlers.forEach((handler) => handler());
  }

  static actionCreator = (type) => (payload) => ({ type, payload });

  dispatch(key, action = {}) {
    if (!key) throw new Error('reducerKey is not defined.');

    this.state = this.#reducers[key](action, this.#state);
  }

  subscribe(handler) {
    if (this.#handlers.length === 0) this.#handlers.push(handler);
  }
}
