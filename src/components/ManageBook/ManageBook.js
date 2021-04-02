import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import BookDetails from './BookDetails';

const ManageBook = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://paperback-bookstore.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    return (
        <div>
            <h1 className="border-bottom mt-3 mb-4">Manage Books</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <BookDetails book={book}></BookDetails>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBook;