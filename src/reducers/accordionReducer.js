import {ACCORDION_SELECT, INPUT_SELECT} from '../actions/accordion'

const initialState = {
    isSelect: null,
    inputName: null,
};

export default function accordionReducer(state = initialState, action) {
    switch (action.type) {
        case ACCORDION_SELECT:
            return {
                ...state,
                isSelect: action.payload.isSelect,
            };
            case INPUT_SELECT:
            return {
                ...state,
                inputName: action.payload.inputName,
            };
        default:
            return state
    }
}