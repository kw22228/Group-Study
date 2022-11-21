import Component from '@core/Component';

export default class TodoList extends Component {
  setup() {
    this.state = {
      TodoList: [
        { Todo: ['reading', 'sleeping'] }, //
      ],
    };
  }

  setEvent() {
    this.addEvent('click', '#addTitleBtn', () => {
      const { value } = this.target.querySelector('#todoTitle');
      const { TodoList } = this.state;

      if (!value) return false;

      this.setState({ TodoList: [...TodoList, { [value]: [] }] });
    }).addEvent('click', '#addBtn', ({ target }) => {
      const { title } = target.closest('[data-title]').dataset;
      const { value } = target.previousElementSibling;

      if (!value) return false;

      const { TodoList } = this.state;
      this.setState({
        TodoList: TodoList.map((todo) => {
          const [todoTitle, todoValue] = Object.entries(todo)[0];

          if (title !== todoTitle) return todo;

          return {
            [todoTitle]: [...todoValue, value],
          };
        }),
      });
    });
  }

  template() {
    const { TodoList } = this.state;

    return /* html */ `
        <div>
          <input id="todoTitle" type="text" value="" />
          <button id="addTitleBtn">추가</button>
        </div>

        ${TodoList.map((todos) => {
          const [key, value] = Object.entries(todos)[0];

          return /* html */ `
            <div style="border:1px solid black; margin-top:10px;" data-title='${key}'>
              <h1>${key}</h1>
              <div class="addList">
                <input class="todoText" type="text" value=""/>
                <button id="addBtn">입력</button>
              </div>
              <div class="list">
                ${value
                  .map((v, index) => {
                    return /* html */ `
                    <div data-idx=${index}>
                      <span>${v}</span>
                      <button class="modifyBtn">수정</button>
                      <button class="deleteBtn">삭제</button>
                    </div>
                  `;
                  })
                  .join('')}
              </div>
            </div>
          `;
        }).join('')}
    `;
  }
}
