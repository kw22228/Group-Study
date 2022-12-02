import Component from '../core/Component';
import Button from './common/Button';
import Input from './common/Input';

import store from '../redux';
import { todoActions } from '../redux/slices/todoSlices';

export default class AddTitle extends Component {
    mounted() {
        new Input(this.target, {
            append: true,
            id: 'todoTitle',
            className: 'todoTitle',
            value: '',
            placeholder: 'Title 입력해주세요.',
        });
        new Button(this.target, {
            append: true,
            id: 'addTitleBtn',
            className: 'addTitleBtn',
            value: '추가',
            onClickHandler: this.onClickHandler.bind(this),
        });
    }

    onClickHandler() {
        const { value } = this.target.querySelector('#todoTitle');
        if (!value) return false;

        const { todoTitleAdd } = todoActions;
        store.dispatch(todoTitleAdd({ title: value }));
    }
}
