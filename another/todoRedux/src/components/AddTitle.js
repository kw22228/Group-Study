import Component from '../core/Component';

export default class AddTitle extends Component {
    template() {
        return /* html */ `
        <input id="todoTitle" type="text" value="" />
        <button id="addTitleBtn">추가</button>
    `;
    }

    setEvent() {
        this.addEvent('click', '#addTitleBtn', this.onClickHandler.bind(this));
    }

    onClickHandler() {
        const { value } = this.target.querySelector('#todoTitle');

        if (!value) return false;

        // store.dispatch('todoReducer', todoTitleAdd({ title: value }));
    }
}
