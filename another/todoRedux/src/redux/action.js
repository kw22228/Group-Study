const actionCreator = type => payload => ({ type, payload });

/** Action types */
export const TODO_SETUP = 'TODO SETUP';
export const TODO_TITLE_ADD = 'TODO TITLE ADD';
export const TODO_LIST_ADD = 'TODO LIST ADD';
export const TODO_LIST_DELETE = 'TODO LIST DELETE';
export const TODO_LIST_MODIFY = 'TODO LIST MODIFY';

/** Actions */
export const todoSetup = actionCreator(TODO_SETUP);
export const todoTitleAdd = actionCreator(TODO_TITLE_ADD);
export const todoListAdd = actionCreator(TODO_LIST_ADD);
export const todoListDelete = actionCreator(TODO_LIST_DELETE);
export const todoListModify = actionCreator(TODO_LIST_MODIFY);
