import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Book from '../Book/Book';
import BookSearch from '../BookSearch/BookSearch';


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://paperback-bookstore.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [books])

    return (
        <div>
            <BookSearch></BookSearch>
            <Row className="mb-3">
                {
                    books.length === 0 && <Spinner size="lg" className="mx-auto" animation="border" variant="info" />
                }
                {
                    books.map(book => <Book book={book} key={book._id}></Book>)
                }
            </Row>
        </div>
    );
};

export default Books;