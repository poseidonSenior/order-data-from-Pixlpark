import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { errorAccessToken, setAccessToken, FETCH_ACCESS_TOKEN } from "../actions";

const fetchData = (params) => {
    return axios.get('http://api.pixlpark.com/oauth/accesstoken', { params })
}

function* getAccessToken(action) {
    try {
        const data = yield call(fetchData, action.payload)
        const prom = yield call(() => new Promise(res => res(data.data)))
        yield put(setAccessToken(prom))
    }
    catch (error) {
        yield put(errorAccessToken(error))
    }
}

export function* getAccessTokenSaga() {
    yield takeEvery(FETCH_ACCESS_TOKEN, getAccessToken)
}