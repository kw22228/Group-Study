import Component from '../../core/Component';

export default class Button extends Component {
    template() {
        const { id, className, value } = this.props;

        return /* html */ `
            <button style="margin-right:5px"
                ${id ? `id='${id}'` : ''}
                ${className ? `class='${className}'` : ''}
            >
                ${value || ''}
            </button>
        `;
    }

    setEvent() {
        const { onClickHandler, id, className } = this.props;
        if (!onClickHandler) return;

        const selector = id ? `#${id}` : `.${className}`;

        this.addEvent('click', selector, event => onClickHandler(event));
    }
}
