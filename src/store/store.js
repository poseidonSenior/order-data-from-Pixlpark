import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from "./sagas";
import { dataReducer } from "./state";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(dataReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)