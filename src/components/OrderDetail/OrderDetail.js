import React from 'react';

const OrderDetail = props => {
    console.log(props.order)
    const { image, name, date, total, quantity } = props.order

    return (
        <div style={{ borderRadius: '10px', backgroundColor: 'tomato'}} className="d-flex p-3 mt-5 justify-content-between text-light">
            <div className="d-flex">
                <img src={image} style={{ width: '100px', marginRight: '10px' }} alt="" srcset="" />
                <h4>{name}</h4>
            </div>
            <h4><span className="text-muted">Qty: </span>{quantity}</h4>
            <h4>Total: {total}</h4>
            <h6>Order on {date.split('T')[0]}</h6>
        </div>
    );
};

export default OrderDetail;