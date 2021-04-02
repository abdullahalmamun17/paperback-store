import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import CheckoutDetails from './CheckoutDetails';

const Checkout = () => {
    const { bookId } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [books, setBooks] = useState([])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])

    const book = books.find(book => book._id === bookId)


    const handleQuantity = quantityStatus => {
        if (quantityStatus === 'increase') {
            setQuantity(quantity + 1)
        }
        if (quantityStatus === 'decrease') {
            if (quantity > 0) {
                setQuantity(quantity - 1)
            }
        }
    }
    const handleCheckout = () => {
        const {name, author, price, image} = book

        const orderData = {
            name,
            author,
            price,
            image,
            quantity,
            date: new Date(),
            email: loggedInUser.email,
            userName: loggedInUser.displayName,
            total: price * quantity
        }


        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => alert('Checkout Successful'))
    }


    return (
        <Container>
            <Header></Header>
            <Table className="mt-5 bg-light rounded">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book?.name && <CheckoutDetails book={book} quantity={quantity} handleQuantity={handleQuantity}></CheckoutDetails>
                    }
                </tbody>
                <tr>
                    <th colSpan={2}>Total</th>
                    <th>{book?.price * quantity}</th>
                </tr>
            </Table>
            <div className="d-flex justify-content-end">
                <Button onClick={handleCheckout} className="btn btn-primary">Checkout</Button>
            </div>
        </Container>
    );
};

export default Checkout;