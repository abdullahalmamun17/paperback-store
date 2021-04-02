import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Book = props => {
    const { _id, name, author, price, image } = props.book


    return (
        <Col lg={4}>
            <Card style={{ width: '20rem', margin: '0 auto', borderRadius: '10px', marginBottom: '10px', border: '0' }}>
                <div className="m-3 bg-light py-4 text-center" style={{ borderRadius: '15px' }}>
                    <Card.Img variant="top" src={image} className="rounded" style={{ width: '60%' }} />
                </div>
                <Card.Body className="pt-0">
                    <Card.Title className="mb-0">{name}</Card.Title>
                    <Card.Text className="mt-0">by <span className="text-success">{author}</span></Card.Text>
                    <div className="d-flex align-items-center justify-content-between" >
                        <div className="d-flex align-items-center text-info" >
                            <HiOutlineCurrencyBangladeshi style={{ fontSize: '30px' }} />
                            <strong style={{ fontSize: '25px' }}>{price}</strong>
                        </div>
                        <Link to={`/checkout/${_id}`} className="btn btn-primary">Buy now</Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Book;