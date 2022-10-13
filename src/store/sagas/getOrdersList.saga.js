import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { errorOrdersList, setOrdersList, FETCH_ORDERS_LIST } from "../actions";

const fetchData = (params) => {
    return axios.get('http://api.pixlpark.com/orders', { params })
}

function* getOrdersList(action) {
    try {
        const data = yield call(fetchData, action.payload)
        const prom = yield call(() => new Promise(res => res(data.data)))
        yield put(setOrdersList(prom))
    }
    catch (error) {
        yield put(errorOrdersList(error))
    }
}

export function* getOrdersListSaga() {
    yield takeEvery(FETCH_ORDERS_LIST, getOrdersList)
}