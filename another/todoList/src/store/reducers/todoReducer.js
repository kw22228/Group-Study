import * as ActionTypes from '@store/actions/actionTypes';

const initialState = {
  TodoList: [{ Todo: ['reading', 'sleeping'] }],
};
export default function todoReducer(action, prevState = { ...initialState }) {
  const { TodoList } = prevState;

  switch (action.type) {
    case ActionTypes.TODO_TITLE_ADD:
      const addTitleState = { TodoList: [...TodoList, { [action.payload.title]: [] }] };

      return { ...prevState, ...addTitleState };

    case ActionTypes.TODO_LIST_ADD:
      const addListState = {
        TodoList: TodoList.map((todo) => {
          const [todoTitle, todoValue] = Object.entries(todo)[0];

          if (action.payload.title !== todoTitle) return todo;

          return {
            [todoTitle]: [...todoValue, action.payload.value],
          };
        }),
      };
      return { ...prevState, ...addListState };

    case ActionTypes.TODO_LIST_UPDATE:
      const updateListState = {
        TodoList: TodoList.map((todo) => {
          const [todoTitle, todoValue] = Object.entries(todo)[0];

          if (action.payload.title !== todoTitle) return todo;

          todoValue.splice(action.payload.idx, 1, action.payload.value);
          return { [todoTitle]: todoValue };
        }),
      };
      return { ...prevState, ...updateListState };

    case ActionTypes.TODO_LIST_DELETE:
      const deleteListState = {
        TodoList: TodoList.map((todo) => {
          const [todoTitle, todoValue] = Object.entries(todo)[0];

          if (action.payload.title !== todoTitle) return todo;

          todoValue.splice(action.payload.idx, 1);

          return { [todoTitle]: todoValue };
        }),
      };
      return { ...prevState, ...deleteListState };

    default:
      return { ...prevState };
  }
}
