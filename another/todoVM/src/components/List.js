import Component from '../core/Component';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import ChildList from './ChildList';

import store from '../redux';
import { todoActions } from '../redux/slices/todoSlices';

export default class List extends Component {
    setup() {
        this.Input = new Input();
        this.Button = new Button(
            { className: 'addBtn', value: '입력' },
            { onClickHandler: this.onClickHandler.bind(this) }
        );
        this.ChildList = new ChildList();
    }

    template() {
        const { TodoList } = store.getState();
        if (!TodoList) return '';

        return /* html */ `
            ${TodoList.map(todo => {
                const [todoTitle, todoValue] = Object.entries(todo)[0];

                /** Component Props Set */
                this.Input.setProps({
                    className: 'todoText',
                    placeholder: `${todoTitle}을 입력해주세요.`,
                });
                this.ChildList.setProps({ todoValue });

                return /* html */ `
                    <div style="padding: 10px;width: 40%; border:1px solid black; margin-top:10px;" data-title='${todoTitle}'>
                        <h1>${todoTitle}</h1>
                        <div class="addList">
                            ${this.Input.template()}
                            ${this.Button.template()}
                        </div>
                        <div class="todoList">
                            ${this.ChildList.template()}
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    }

    onClickHandler({ target }) {
        const { title } = target.closest('[data-title]').dataset;
        const { value } = target.previousElementSibling;

        if (!value) return false;

        const { todoListAdd } = todoActions;
        store.dispatch(todoListAdd({ title, value }));
    }
}
