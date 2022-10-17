import './order.css'

export const Order = (props) => {
    const { order } = props;
    const date = new Date(+order.StatusDate.replace(/\D/g, ''))
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return (
        <div className="order-container">
            <div className='order'>
                <img className='img' src={order.PreviewImageUrl} />
                <span className='text-info text-id'>Идентификатор заказа: {order.Id}</span>
                <span className='text-info'>Дата заказа: {date.toLocaleString("ru", options)}</span>
                <div className='delivery-address'>
                    Адрес доставки:
                    <span className='text-info'>Индекс: {order.DeliveryAddress && order.DeliveryAddress.State}</span>
                    <span className='text-info'>Город: {order.DeliveryAddress && order.DeliveryAddress.City}</span>
                    <span className='text-info'>Улица: {order.DeliveryAddress && order.DeliveryAddress.AddressLine1}</span>
                    <span className='text-info'>ФИО: {order.DeliveryAddress && order.DeliveryAddress.FullName}</span>
                    <span className='text-info'>Номер телефона: {order.DeliveryAddress && order.DeliveryAddress.Phone}</span>
                </div>

            </div>
        </div>
    )
};
