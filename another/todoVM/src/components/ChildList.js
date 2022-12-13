import Input from '../components/common/Input';
import Button from '../components/common/Button';

const ChildList = ({ todoValue }) => {
    return /* html */ `
        ${todoValue
            .map((v, index) => {
                return /* html */ `
                <div data-idx='${index}'>
                    <span>${v}</span>
                    <span class="btnArea">
                        ${Button({ className: 'modifyBtn', value: '수정' })}
                        ${Button({ className: 'deleteBtn', value: '삭제' })}
                    </span>
                </div>
            `;
            })
            .join('')}
    `;
};

export default ChildList;
