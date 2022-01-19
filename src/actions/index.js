import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getSpells = () => {
    return (dispatch => {
        dispatch(fetchStart())
        axios.get('https://api.open5e.com/spells/')
        .then(resp => {
            dispatch(fetchSuccess(resp.data.results))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
    })
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}

export const fetchSuccess = (spells) => {
    return ({type: FETCH_SUCCESS, payload: spells})
}

export const fetchFail = () => {
    return ({type: FETCH_FAIL})
}