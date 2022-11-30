import store from '@store';
import { todoListAdd } from '@store/actions/actions';

import Component from '@core/Component';
import ChildList from '@components/ChildList';

export default class List extends Component {
  template() {
    const { TodoList } = store.state;

    return /* html */ `
        ${TodoList.map((todo) => {
          const [todoTitle] = Object.keys(todo);

          return /* html */ `
            <div style="padding: 10px;width: 40%; border:1px solid black; margin-top:10px;" data-title='${todoTitle}'>
                <h1>${todoTitle}</h1>
                <div class="addList">
                    <input class="todoText" type="text" value=""/>
                    <button id="addBtn">입력</button>
                </div>
                <div class="todoList"></div>
            </div>
          `;
        }).join('')}
    `;
  }

  setEvent() {
    this.addEvent('click', '#addBtn', (event) => this.onClickHandler(event));
  }

  onClickHandler({ target }) {
    const { title } = target.closest('[data-title]').dataset;
    const { value } = target.previousElementSibling;

    if (!value) return false;

    store.dispatch('todoReducer', todoListAdd({ title, value }));
  }

  mounted() {
    const { TodoList } = store.state;
    TodoList.forEach((todo) => {
      const [todoTitle, todoValue] = Object.entries(todo)[0];
      const $parent = this.target.querySelector(`[data-title='${todoTitle}']`);
      new ChildList($parent.querySelector('.todoList'), { todoValue });
    });
  }
}
