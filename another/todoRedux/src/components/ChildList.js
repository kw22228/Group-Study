import Component from '../core/Component';
import Button from './common/Button';

import store from '../redux';
import { todoActions } from '../redux/slices/todoSlices';

export default class ChildList extends Component {
    template() {
        const { todoValue } = this.props;

        return /* html */ `
        ${todoValue
            .map((v, index) => {
                return /* html */ `
            <div data-idx='${index}'>
                <span>${v}</span>
                <span class="btnArea">
                
                </span>
            </div>
            `;
            })
            .join('')}
        `;
    }

    mounted() {
        const { todoValue } = this.props;

        todoValue.forEach((_, index) => {
            const $parent = this.target.querySelector(`[data-idx='${index}']`);
            const $btnArea = $parent.querySelector('.btnArea');

            new Button($btnArea, {
                append: true,
                className: 'modifyBtn',
                value: '수정',
                onClickHandler: this.onModifyHandler.bind(this),
            });

            new Button($btnArea, {
                append: true,
                className: 'deleteBtn',
                value: '삭제',
                onClickHandler: this.onDeleteHandler.bind(this),
            });
        });
    }

    onDeleteHandler({ target }) {
        const $idx = target.closest('[data-idx]');
        const { title } = target.closest('[data-title]').dataset;
        const { idx } = $idx.dataset;

        const { todoListDelete } = todoActions;
        store.dispatch(todoListDelete({ title, idx }));
    }

    onModifyHandler({ target }) {
        const $idx = target.closest('[data-idx]');
        const $textSpan = $idx.children[0];
        const { title } = target.closest('[data-title]').dataset;
        const { idx } = $idx.dataset;

        const flag = target.textContent;

        if (flag.trim() === '수정') {
            const text = $textSpan.textContent;

            $textSpan.innerHTML = /* html */ `<input type="text" value="${text}" />`;
            target.innerText = '수정완료';

            return;
        }

        target.innerText = '수정';

        const { value } = $textSpan.children[0];

        const { todoListModify } = todoActions;
        store.dispatch(todoListModify({ title, idx, value }));
    }
}
