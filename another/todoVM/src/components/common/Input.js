const Input = ({ type = 'text', id, className, value, placeholder }) => {
    return /* html */ `
        <input 
            type='${type}'
            ${id ? `id='${id}'` : ''}
            ${className ? `class='${className}'` : ''}
            ${value ? `value='${value}'` : ''}
            ${placeholder ? `placeholder='${placeholder}'` : ''}
        /> 
    `;
};

export default Input;
