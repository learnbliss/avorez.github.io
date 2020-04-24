import {GET_DATA_SEARCH} from '../actions/search'

const initialState = {
    dataSearch: [],
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_SEARCH:
            return {
                ...state,
                dataSearch: action.payload.dataSearch,
            };
        default:
            return state
    }
}