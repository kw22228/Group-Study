import Store from '@store/Store';
import * as ActionTypes from '@store/actions/actionTypes';

export const todoTitleAdd = Store.actionCreator(ActionTypes.TODO_TITLE_ADD);
export const todoListAdd = Store.actionCreator(ActionTypes.TODO_LIST_ADD);
export const todoListUpdate = Store.actionCreator(ActionTypes.TODO_LIST_UPDATE);
export const todoListDelete = Store.actionCreator(ActionTypes.TODO_LIST_DELETE);
