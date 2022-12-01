import Component from '../../core/Component';

export default class Input extends Component {
    template() {
        const { type, id, className, value, placeholder } = this.props;

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
}
