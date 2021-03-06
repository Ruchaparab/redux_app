import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxImmuatableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmuatableStateInvariant()))
    );
}