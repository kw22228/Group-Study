import store from '@store';

import Component from '@core/Component';
import AddTitle from '@components/AddTitle';
// import List from '../components/List';

export default class TodoList extends Component {
  setup() {
    store.dispatch('todoReducer');
  }

  template() {
    return /* html */ `
        <div class='addTitleArea'></div>
        <div class='listArea'></div>
    `;
  }

  mounted() {
    new AddTitle(document.querySelector('.addTitleArea'), {
      // onAddTitle: this.onAddTitle.bind(this),
    });
    // new List(document.querySelector('.listArea'), {
    //   onAddList: this.onAddList.bind(this),
    //   onDeleteList: this.onDeleteList.bind(this),
    //   onModifyList: this.onModifyList.bind(this),
    // });
  }

  // onAddTitle() {
  //   const { value } = this.target.querySelector('#todoTitle');
  //   const { TodoList } = this.state;

  //   if (!value) return false;

  //   this.setState({ TodoList: [...TodoList, { [value]: [] }] });
  // }

  // onAddList({ target }) {
  //   const { title } = target.closest('[data-title]').dataset;
  //   const { value } = target.previousElementSibling;

  //   if (!value) return false;

  //   const { TodoList } = this.state;

  //   this.setState({
  //     TodoList: TodoList.map((todo) => {
  //       const [todoTitle, todoValue] = Object.entries(todo)[0];

  //       if (title !== todoTitle) return todo;

  //       return {
  //         [todoTitle]: [...todoValue, value],
  //       };
  //     }),
  //   });
  // }

  // onDeleteList({ target }) {
  //   const $idx = target.closest('[data-idx]');
  //   const { title } = target.closest('[data-title]').dataset;
  //   const { idx } = $idx.dataset;

  //   const { TodoList } = this.state;

  //   this.setState({
  //     TodoList: TodoList.map((todo) => {
  //       const [todoTitle, todoValue] = Object.entries(todo)[0];

  //       if (title !== todoTitle) return todo;

  //       todoValue.splice(idx, 1);

  //       return { [todoTitle]: todoValue };
  //     }),
  //   });
  // }

  // onModifyList({ target }) {
  //   const $idx = target.closest('[data-idx]');
  //   const $textSpan = $idx.children[0];
  //   const { title } = target.closest('[data-title]').dataset;
  //   const { idx } = $idx.dataset;

  //   const flag = target.textContent;

  //   if (flag === '수정') {
  //     const text = $textSpan.textContent;

  //     $textSpan.innerHTML = /* html */ `<input type="text" value="${text}" />`;
  //     target.innerText = '수정완료';

  //     return;
  //   }

  //   target.innerText = '수정';
  //   const { value: modifyText } = $textSpan.children[0];

  //   const { TodoList } = this.state;

  //   this.setState({
  //     TodoList: TodoList.map((todo) => {
  //       const [todoTitle, todoValue] = Object.entries(todo)[0];

  //       if (title !== todoTitle) return todo;

  //       todoValue.splice(idx, 1, modifyText);
  //       return { [todoTitle]: todoValue };
  //     }),
  //   });
  // }
}
