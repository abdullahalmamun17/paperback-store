import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderDetail from '../OrderDetail/OrderDetail';

const Orders = () => {

    const [loggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://paperback-bookstore.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [loggedInUser.email])

    return (
        <Container>
            <Header></Header>
            {
                orders.map(order => <OrderDetail order={order}></OrderDetail>)
            }
        </Container>
    );
};

export default Orders;