const AddTitle = () => {
    const template = /* html */ `
        <input type="text" id="todoTitle" />
        <button id="addTitleBtn">추가</button>
    `;

    return { cpName: 'AddTitle', template };
};

export default AddTitle;
