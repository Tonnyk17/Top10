import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { topReducer } from "./topDuck";



const reducers = combineReducers({
    categories: topReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const generateStore = () => {
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}