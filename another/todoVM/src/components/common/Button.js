const Button = ({ id, className, value }) => {
    return /* html */ `
        <button 
            ${id ? `id='${id}'` : ''}
            ${className ? `class='${className}'` : ''}
        >
            ${value || ''}
        </button>
    `;
};

export default Button;
