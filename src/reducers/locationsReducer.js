import {FETCH_LOCATIONS, TRIGGER_LOADING} from '../actions/locations'

const initialState = {
    dataLocations: {},
    countryGroups: [],
    isLoading: false,
};

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case TRIGGER_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case FETCH_LOCATIONS:
            return {
                ...state,
                dataLocations: action.payload.dataLocations,
                countryGroups: action.payload.countryGroups,
                isLoading: action.payload.isLoading,
            };
        default:
            return state
    }
}