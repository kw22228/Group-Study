import Component from '../core/Component';

import Input from '../components/common/Input';
import Button from '../components/common/Button';

import store from '../redux';
import { todoActions } from '../redux/slices/todoSlices';
export default class AddTitle extends Component {
    setup() {
        this.state = { inputValue: '' };

        this.Input = new Input(
            {
                id: 'todoTitle',
                className: 'todoTitle',
                placeholder: 'Title을 입력해주세요.',
                value: this.state.inputValue,
            },
            { onKeyupHandler: this.onKeyupHandler.bind(this) }
        );
        this.Button = new Button(
            {
                id: 'addTitleBtn',
                className: 'addTitleBtn',
                value: '추가',
            },
            { onClickHandler: this.onClickHandler.bind(this) }
        );
    }

    template() {
        return /* html */ `
            ${this.Input.template()}
            ${this.Button.template()}
        `;
    }

    onKeyupHandler({ target }) {
        const { inputValue } = this.state;
        this.setState({ inputValue: target.value });
    }

    onClickHandler() {
        const { inputValue } = this.state;
        const { todoTitleAdd } = todoActions;

        if (!inputValue) return;

        store.dispatch(todoTitleAdd({ title: inputValue }));
    }
}
