import React from 'react';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi'

const BookDetails = props => {
    const { _id, name, author, price } = props.book

    const deleteBook = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{author}</td>
            <td className="d-flex align-items-center">
                <HiOutlineCurrencyBangladeshi />
                {price}
            </td>
            <td className="text-center">
                <RiEditBoxLine className="text-success font-20 mx-1" />
                <RiDeleteBinLine onClick={() => deleteBook(_id)} style={{cursor: 'pointer'}} className="text-danger font-20 mx-1" />
            </td>
        </tr>
    );
};

export default BookDetails;