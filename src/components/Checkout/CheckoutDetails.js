import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CheckoutDetails = (props) => {
    const { name, author, price } = props.book
    const quantity = props.quantity


    return (
        <tr>
            <td>{name}</td>
            <td>
                <AiOutlineMinus style={{cursor: 'pointer'}} onClick={() => props.handleQuantity('decrease')} />
                <input value={quantity} disabled type="number" style={{ width: '30px', textAlign: 'center', margin: '0 5px' }} />
                <AiOutlinePlus style={{cursor: 'pointer'}} onClick={() => props.handleQuantity('increase')} />
            </td>
            <td>{price * quantity}</td>
        </tr>
    );
};

export default CheckoutDetails;