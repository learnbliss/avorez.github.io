import {fetchData, apiUrl} from "../api/fetch";
import test from '../mock/test'


export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const TRIGGER_LOADING = 'TRIGGER_LOADING';

//action creators
export const locationsAC = (dataLocations, countryGroups,) => ({
    type: FETCH_LOCATIONS,
    payload: {
        dataLocations,
        countryGroups,
        isLoading: false,
    },
});

const triggerLoadingAC = (boolean) => ({
    type: TRIGGER_LOADING,
    payload: boolean,
});

// action functions

export const getLocationsThunk = () => {
    return async (dispatch, getState) => {
        try {
             dispatch(triggerLoadingAC(true));
            let dataLocations;
            if (window.location.hostname !== 'localhost') {
                dataLocations = await fetchData(apiUrl);
            } else {
                dataLocations = test;
                console.log('dataLocations: ', dataLocations);
            }
            const countryGroups = Object.values(dataLocations.payload.country_groups);
            dispatch(locationsAC( dataLocations, countryGroups));
        } catch (err) {
            console.error(err);
        }
    };
};