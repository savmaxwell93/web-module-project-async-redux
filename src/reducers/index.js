import data from "../data";

const initialState = {
    spells: data,
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;