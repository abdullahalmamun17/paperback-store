import React from 'react';
import { Container } from 'react-bootstrap';
import Books from '../Books/Books';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="bg-light">
            <Container>
                <Header></Header>
                <Books></Books>
            </Container>
        </div>
    );
};

export default Home;