import store from '../redux';

const List = () => {
    const { TodoList } = store.getState();
    if (!TodoList) return '';

    const template = /* html */ `
        ${TodoList.map(todo => {
            const [todoTitle] = Object.keys(todo);

            return /* html */ `
                <div style="padding: 10px;width: 40%; border:1px solid black; margin-top:10px;" data-title='${todoTitle}'>
                    <h1>${todoTitle}</h1>
                    <div class="addList">
                        <input type="text" class="todoText" />
                        <button class="addBtn">입력</button>
                    </div>
                    <div class="todoList"></div>
                </div>
            `;
        }).join('')}
    `;

    return { cpName: 'List', template };
};

export default List;
