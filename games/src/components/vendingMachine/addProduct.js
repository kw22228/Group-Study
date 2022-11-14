export default class AddProduct {
  #state;
  #target;
  constructor(target) {
    this.#target = document.querySelector(target);
    this.#state = {
      product: [],
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
        <h2>상품 추가하기</h2>
        <input id="name" />
        <input id="price" />
        <input id="count" />
        <button class="inputBtn">추가하기</button>

        <div class="productList">
       ${this.#state.product
         .map((v) => {
           return /* html */ `
            <div> 상품명: ${v.name} / 가격:${v.price} / 수량:${v.count}  </div>`;
         })
         .join('')}
        </div>
    </div>
    `;
  }
  setEvent() {
    const btn = this.#target.querySelector('.inputBtn');
    btn.addEventListener('click', (e) => {
      let name = this.#target.querySelector('#name').value;
      let price = this.#target.querySelector('#price').value;
      let count = this.#target.querySelector('#count').value;

      const { product } = this.#state; // [ {name:콜라, price: 1500, count: 3}, {name:콜라1, price: 15000, count: 33} {방금 입력한 input}] {...product, 방금이력한 input},
      this.setState({ product: [...product, { name, price, count }] }); //state는 변함.
    });
  }

  setState(newState) {
    this.#state = { ...this.#state, ...newState };

    this.render();
    this.setEvent();
  }
}
