import Component from '../../core/Component';

export default class Button extends Component {
    template() {
        const { id, className, value } = this.props;

        return /* html */ `
            <button 
                ${id ? `id='${id}'` : ''}
                ${className ? `class='${className}'` : ''}
            >
                ${value || ''}
            </button>
        `;
    }

    setEvent() {
        const { id, className } = this.props;
        const { onClickHandler } = this.handler;
        if (!onClickHandler) return;

        const selector = id ? `#${id}` : `.${className}`;

        this.addEvent('click', selector, onClickHandler);
    }
}
