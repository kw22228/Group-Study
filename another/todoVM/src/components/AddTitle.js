import Input from '../components/common/Input';
import Button from '../components/common/Button';

const AddTitle = () => {
    return /* html */ `
        ${Input({ id: 'todoTitle', className: 'todoTitle', placeholder: 'Title을 입력해주세요.' })}
        ${Button({ id: 'addTitleBtn', className: 'addTitleBtn', value: '추가' })}
    `;
};

export default AddTitle;
