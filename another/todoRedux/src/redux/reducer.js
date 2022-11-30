const initialState = {
    TodoList: [{ Todo: ['reading', 'sleeping'] }],
};

export default function reducer(state = { ...initialState }, action) {
    switch (action.type) {
        default:
            return state;
    }
}
