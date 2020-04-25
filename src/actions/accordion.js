import {searchAC} from "./search";

export const ACCORDION_SELECT = 'ACCORDION_SELECT';
export const INPUT_SELECT = 'INPUT_SELECT';

export const accordionAC = (isSelect) => ({
    type: ACCORDION_SELECT,
    payload: {
        isSelect,
    },
});

export const inputAC = (inputName) => ({
    type: INPUT_SELECT,
    payload: {
        inputName,
    },
});

export const getNameAccordionThunk = (id) => {
    return async (dispatch, getState) => {
        try {
            const {isSelect} = getState().accordionReducer;
            if (id !== isSelect) {
                dispatch(inputAC(null));
            }
            dispatch(accordionAC(id));
        } catch (err) {
            console.error(err);
        }
    };
};

export const getNameInputThunk = (name) => {
    return async (dispatch, getState) => {
        try {
            const {inputName} = getState().accordionReducer;
            if (inputName === null) {
                dispatch(searchAC([]))
            }
            dispatch(inputAC(name));
        } catch (err) {
            console.error(err);
        }
    };
};