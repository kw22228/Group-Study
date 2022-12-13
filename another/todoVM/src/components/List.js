import store from '../redux';
import ChildList from './ChildList';

import Input from '../components/common/Input';
import Button from '../components/common/Button';

const List = () => {
    const { TodoList } = store.getState();
    if (!TodoList) return '';

    return /* html */ `
        ${TodoList.map(todo => {
            const [todoTitle, todoValue] = Object.entries(todo)[0];

            return /* html */ `
                <div style="padding: 10px;width: 40%; border:1px solid black; margin-top:10px;" data-title='${todoTitle}'>
                    <h1>${todoTitle}</h1>
                    <div class="addList">
                        ${Input({
                            className: 'todoText',
                            placeholder: `${todoTitle}을 입력해주세요.`,
                        })}
                        ${Button({ className: 'addBtn', value: '입력' })}
                    </div>
                    <div class="todoList">${ChildList({ todoValue })}</div>
                </div>
            `;
        }).join('')}
    `;
};

export default List;
