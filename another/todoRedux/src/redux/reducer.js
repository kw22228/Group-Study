import {
    TODO_SETUP,
    TODO_TITLE_ADD,
    TODO_LIST_ADD,
    TODO_LIST_DELETE,
    TODO_LIST_MODIFY,
} from './action';

export default function reducer(state = {}, action) {
    const { TodoList } = state;

    switch (action.type) {
        case TODO_SETUP:
            return { ...state, ...action.payload };

        case TODO_TITLE_ADD:
            const addTitleState = { TodoList: [...TodoList, { [action.payload.title]: [] }] };

            return { ...state, ...addTitleState };

        case TODO_LIST_ADD:
            const addListState = {
                TodoList: TodoList.map(todo => {
                    const [todoTitle, todoValue] = Object.entries(todo)[0];

                    if (action.payload.title !== todoTitle) return todo;

                    return { [todoTitle]: [...todoValue, action.payload.value] };
                }),
            };

            return { ...state, ...addListState };

        case TODO_LIST_DELETE:
            const deleteListState = {
                TodoList: TodoList.map(todo => {
                    const [todoTitle, todoValue] = Object.entries(todo)[0];

                    if (action.payload.title !== todoTitle) return todo;

                    todoValue.splice(action.payload.idx, 1);

                    return { [todoTitle]: todoValue };
                }),
            };
            return { ...state, ...deleteListState };

        case TODO_LIST_MODIFY:
            const updateListState = {
                TodoList: TodoList.map(todo => {
                    const [todoTitle, todoValue] = Object.entries(todo)[0];

                    if (action.payload.title !== todoTitle) return todo;

                    todoValue.splice(action.payload.idx, 1, action.payload.value);
                    return { [todoTitle]: todoValue };
                }),
            };
            return { ...state, ...updateListState };

        default:
            return state;
    }
}
