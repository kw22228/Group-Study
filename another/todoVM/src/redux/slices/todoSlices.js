import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ Todo: ['sleeping', 'swimming'] }, { Done: ['study'] }];
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoTitleAdd(state, action) {
            state.push({ [action.payload.title]: [] });
        },
        todoListAdd(state, action) {
            const index = state.findIndex(todo => Object.keys(todo)[0] === action.payload.title);
            state[index][action.payload.title].push(action.payload.value);
        },
        todoListDelete(state, action) {
            const index = state.findIndex(todo => Object.keys(todo)[0] === action.payload.title);
            state[index][action.payload.title].splice(action.payload.idx, 1);
        },
        todoListModify(state, action) {
            const index = state.findIndex(todo => Object.keys(todo)[0] === action.payload.title);
            state[index][action.payload.title].splice(action.payload.idx, 1, action.payload.value);
        },
    },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
