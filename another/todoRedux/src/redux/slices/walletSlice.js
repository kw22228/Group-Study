import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    money: 1000,
};
const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        increase(state, action) {
            return state.money + action.payload.money;
        },
        decrease(state, action) {
            return state.money - action.payload.money;
        },
    },
});

export const walletActions = walletSlice.actions;

export default walletSlice.reducer;
