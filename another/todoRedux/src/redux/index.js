// import { createStore } from 'redux';
// import reducer from './reducer';
// const store = createStore(reducer);

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TodoList from './slices/todoSlices';
import wallet from './slices/walletSlice';

const rootReducer = combineReducers({
    TodoList,
    wallet,
});

/** store 생성 함수 (나중에 미들웨어도 추가가능.) */
const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production', // dev모드일때만 devTools 킴
    });
};
const store = makeStore();

// store.subscribe(() => {
//     console.log(store.getState());
// });
export default store;
