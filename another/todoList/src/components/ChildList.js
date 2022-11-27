import store from '@store';
import Component from '@core/Component';
import { todoListUpdate, todoListDelete } from '@store/actions/actions';

export default class ChildList extends Component {
  template() {
    const { todoValue } = this.props;

    return /* html */ `
      ${todoValue
        .map((v, index) => {
          return /* html */ `
          <div data-idx='${index}'>
            <span>${v}</span>
            <button class="modifyBtn">수정</button>
            <button class="deleteBtn">삭제</button>
          </div>
        `;
        })
        .join('')}
    `;
  }

  setEvent() {
    this.addEvent('click', '.modifyBtn', (event) => this.onUpdateHandler(event)) // 수정
      .addEvent('click', '.deleteBtn', (event) => this.onDeleteHandler(event)); // 삭제
  }

  onDeleteHandler({ target }) {
    const $idx = target.closest('[data-idx]');
    const { title } = target.closest('[data-title]').dataset;
    const { idx } = $idx.dataset;

    store.dispatch('todoReducer', todoListDelete({ title, idx }));
  }

  onUpdateHandler({ target }) {
    const $idx = target.closest('[data-idx]');
    const $textSpan = $idx.children[0];
    const { title } = target.closest('[data-title]').dataset;
    const { idx } = $idx.dataset;

    const flag = target.textContent;

    if (flag === '수정') {
      const text = $textSpan.textContent;

      $textSpan.innerHTML = /* html */ `<input type="text" value="${text}" />`;
      target.innerText = '수정완료';

      return;
    }

    target.innerText = '수정';

    const { value } = $textSpan.children[0];
    store.dispatch('todoReducer', todoListUpdate({ title, idx, value }));
  }
}
