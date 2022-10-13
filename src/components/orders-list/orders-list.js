import sha1 from "sha1"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestToken, fetchAccessToken, fetchOrdersList } from "../../store/actions";
import { PRIVATE_KEY, PUBLIC_KEY } from "../../store/constants";
import { Order } from "./order";

export const OrdersList = () => {
    const dispatch = useDispatch()
    const requestToken = useSelector(state => state.requestToken)
    const accessToken = useSelector(state => state.accessToken)
    const ordersList = useSelector(state => state.ordersList)

    useEffect(() => {
        dispatch(fetchRequestToken())
    }, [])

    useEffect(() => {
        if (requestToken) {
            const params = {
                oauth_token: requestToken.RequestToken,
                grant_type: 'api',
                username: PUBLIC_KEY,
                password: sha1(requestToken.RequestToken.concat(PRIVATE_KEY))
            }
            dispatch(fetchAccessToken(params))
        }
    }, [requestToken])

    useEffect(() => {
        if (accessToken) {
            const params = {
                oauth_token: accessToken.AccessToken
            }
            dispatch(fetchOrdersList(params))
        }
    }, [accessToken])

    return (
        <div className="orders-list">
            {!ordersList
                ?
                'Загрузка...'
                :
                ordersList.Result.map((order, index) => <Order key={index} order={order} />
                )}
        </div>
    )
};
