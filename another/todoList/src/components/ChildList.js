import Component from '@core/Component';

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
    const { onDeleteList, onModifyList } = this.props;

    this.addEvent('click', '.modifyBtn', (event) => onModifyList(event)) // 수정
      .addEvent('click', '.deleteBtn', (event) => onDeleteList(event)); // 삭제
  }
}
