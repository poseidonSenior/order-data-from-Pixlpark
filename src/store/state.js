import { ERROR_ACCESS_TOKEN, ERROR_REQUEST_TOKEN, GET_ACCESS_TOKEN, GET_REQUEST_TOKEN, GET_ORDERS_LIST, ERROR_ORDERS_LIST } from "./actions";


const defaultState = {
    requestToken: undefined,
    errorRequestToken: undefined,
    accessToken: undefined,
    errorAccessToken: undefined,
    ordersList: undefined,
    errorOrdersList: undefined,
    loading: false,
}

export function dataReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_REQUEST_TOKEN:
            return { ...state, requestToken: action.payload, loading: true };
        case ERROR_REQUEST_TOKEN:
            return { ...state, errorRequestToken: action.error, loading: true };
        case GET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload, loading: true };
        case ERROR_ACCESS_TOKEN:
            return { ...state, errorAccessToken: action.error, loading: true };
        case GET_ORDERS_LIST:
            return { ...state, ordersList: action.payload, loading: true };
        case ERROR_ORDERS_LIST:
            return { ...state, errorOrdersList: action.error, loading: true };
        default:
            return state;
    }
}