import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { errorRequestToken, setRequestToken, FETCH_REQUEST_TOKEN } from "../actions";

const fetchData = () => {
    return axios.get('/oauth/requesttoken')
}

function* getRequestToken() {
    try {
        const data = yield call(fetchData)
        const prom = yield call(() => new Promise(res => res(data.data)))
        yield put(setRequestToken(prom))
    }
    catch (error) {
        yield put(errorRequestToken(error))
    }
}

export function* getRequestTokenSaga() {
    yield takeEvery(FETCH_REQUEST_TOKEN, getRequestToken)
}