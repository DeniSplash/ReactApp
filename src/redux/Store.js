import { applyMiddleware, createStore, compose } from "redux";
import { toggleReducer } from "./Reducer"

const composeState = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(toggleReducer, composeState(applyMiddleware()));
