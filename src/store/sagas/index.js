import { all } from 'redux-saga/effects'
import { getAccessTokenSaga } from './getAccessToken.saga'
import { getOrdersListSaga } from './getOrdersList.saga'
import { getRequestTokenSaga } from './getRequestToken.saga'

export function* rootSagas() {
    yield all([getRequestTokenSaga(), getAccessTokenSaga(), getOrdersListSaga()])
}