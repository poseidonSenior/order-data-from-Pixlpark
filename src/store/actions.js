export const GET_REQUEST_TOKEN = "GET_REQUEST_TOKEN"
export const FETCH_REQUEST_TOKEN = "FETCH_REQUEST_TOKEN"
export const ERROR_REQUEST_TOKEN = "ERROR_REQUEST_TOKEN"
export const setRequestToken = payload => ({ type: GET_REQUEST_TOKEN, payload })
export const fetchRequestToken = () => ({ type: FETCH_REQUEST_TOKEN })
export const errorRequestToken = error => ({ type: ERROR_REQUEST_TOKEN, error })



export const GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN"
export const FETCH_ACCESS_TOKEN = "FETCH_ACCESS_TOKEN"
export const ERROR_ACCESS_TOKEN = "ERROR_ACCESS_TOKEN"
export const setAccessToken = payload => ({ type: GET_ACCESS_TOKEN, payload })
export const fetchAccessToken = payload => ({ type: FETCH_ACCESS_TOKEN, payload })
export const errorAccessToken = error => ({ type: ERROR_ACCESS_TOKEN, error })



export const GET_ORDERS_LIST = "GET_ORDERS_LIST"
export const FETCH_ORDERS_LIST = "FETCH_ORDER_LIST"
export const ERROR_ORDERS_LIST = "ERROR_ORDER_LIST"
export const setOrdersList = payload => ({ type: GET_ORDERS_LIST, payload })
export const fetchOrdersList = payload => ({ type: FETCH_ORDERS_LIST, payload })
export const errorOrdersList = error => ({ type: ERROR_ORDERS_LIST, error })