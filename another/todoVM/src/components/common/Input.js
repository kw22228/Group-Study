import Component from '../../core/Component';

export default class Input extends Component {
    template() {
        const { id, className, placeholder, value, type } = this.props;

        return /* html */ `
            <input
                type='${type || 'text'}'
                ${id ? `id='${id}'` : ''}
                ${className ? `class='${className}'` : ''}
                ${value ? `value='${value}'` : ''}
                ${placeholder ? `placeholder='${placeholder}'` : ''}
            />
        `;
    }

    setEvent() {
        const { id, className } = this.props;
        const { onKeyupHandler } = this.handler;
        if (!onKeyupHandler) return;

        const selector = id ? `#${id}` : `.${className}`;

        this.addEvent('keyup', selector, onKeyupHandler);
    }
}
