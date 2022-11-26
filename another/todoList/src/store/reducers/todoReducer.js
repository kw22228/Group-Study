import * as ActionTypes from '@store/actions/actionTypes';

const initialState = {
  TodoList: [{ Todo: ['reading', 'sleeping'] }],
};
export default function todoReducer(action, prevState = { ...initialState }) {
  switch (action.type) {
    case ActionTypes.TODO_TITLE_ADD:
      return { ...prevState, ...action.payload };

    default:
      return { ...prevState };
  }
}
