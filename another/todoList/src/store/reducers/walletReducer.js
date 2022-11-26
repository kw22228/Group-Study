import * as ActionTypes from '@store/actions/actionTypes';

const initialState = {
  wallet: {
    money: 0,
  },
};
export default function walletReducer(action, prevState = { ...initialState }) {
  switch (action.type) {
    case ActionTypes.TODO_TITLE_ADD:
      return { ...prevState };

    default:
      return { ...prevState };
  }
}
