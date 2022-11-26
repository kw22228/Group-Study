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

  static actionCreator = (type) => (payload) => ({ type, payload });

  dispatch(key, action = {}) {
    if (!key) throw new Error('reducerKey is not defined.');

    this.#state = this.#reducers[key](action, this.#state);
    this.#handlers.forEach((handler) => handler());
  }

  subscribe(handler) {
    this.#handlers.push(handler);
  }
}
