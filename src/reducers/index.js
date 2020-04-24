import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import locationsReducer from "./locationsReducer";
import accordionReducer from "./accordionReducer";
import searchReducer from "./searchReducer";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    locationsReducer,
    accordionReducer,
    searchReducer,
});

export default createRootReducer
