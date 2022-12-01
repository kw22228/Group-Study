import Component from '../core/Component';
import ChildList from '../components/ChildList';
import Input from './common/Input';
import Button from './common/Button';

import store from '../redux';
import { todoListAdd } from '../redux/action';

export default class List extends Component {
    template() {
        const { TodoList } = store.getState();
        if (!TodoList) return '';

        return /* html */ `
        ${TodoList.map(todo => {
            const [todoTitle] = Object.keys(todo);

            return /* html */ `
            <div style="padding: 10px;width: 40%; border:1px solid black; margin-top:10px;" data-title='${todoTitle}'>
                <h1>${todoTitle}</h1>
                <div class="addList"></div>
                <div class="todoList"></div>
            </div>
          `;
        }).join('')}
    `;
    }

    // setEvent() {
    //     this.addEvent('click', '.addBtn', event => this.onClickHandler(event));
    // }

    mounted() {
        const { TodoList } = store.getState();
        if (!TodoList) return '';

        TodoList.forEach(todo => {
            const [todoTitle, todoValue] = Object.entries(todo)[0];
            const $parent = this.target.querySelector(`[data-title='${todoTitle}']`);

            //todoList
            new ChildList($parent.querySelector('.todoList'), { todoValue });

            //addList
            const $addListDiv = $parent.querySelector('.addList');
            new Input($addListDiv, {
                append: true,
                className: 'todoText',
                value: '',
                placeholder: `${todoTitle}을 작성해주세요.`,
            });
            new Button($addListDiv, {
                append: true,
                className: 'addBtn',
                value: '입력',
                onClickHandler: this.onClickHandler.bind(this),
            });
        });
    }

    onClickHandler({ target }) {
        const { title } = target.closest('[data-title]').dataset;
        const { value } = target.previousElementSibling;

        if (!value) return false;

        // store.dispatch('todoReducer', todoListAdd({ title, value }));
        store.dispatch(todoListAdd({ title, value }));
    }
}
