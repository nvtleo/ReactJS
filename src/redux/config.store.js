import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducers/Project-movies/reducer";
import { reactFormReducer } from "../Form/conect/reducer";

const rootReducer = combineReducers({
    movieReducer,
    reactFormReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ &&
    window.__REDUX_DEVTOOLS_EXTENTION__()

)