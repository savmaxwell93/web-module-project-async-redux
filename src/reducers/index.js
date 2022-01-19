import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';
import data from "../data";

const initialState = {
    spells: [],
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                fetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: 'Something went wrong...'
            }
        default:
            return state;
    }
}

export default reducer;