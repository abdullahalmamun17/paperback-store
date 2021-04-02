import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const axios = require('axios').default;


const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = (data, e) => {

        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            image: imageURL,
            category: data.category,
            description: data.description
        }

        fetch('http://localhost:5000/addBook', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => console.log(result));

        e.target.reset();
    };

    const uploadImage = event => {
        const imageData = new FormData();
        imageData.set('key', '60c0867742f4bcdbcb06ca3d6dd382d5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const inputStyle = {
        borderRadius: '5px',
        border: '0',
        width: '100%',
        height: '35px',
        marginBottom: '20px'
    }

    return (
        <div style={{ padding: '20px' }}>
            <h3 style={{ borderBottom: '2px solid gray', marginBottom: '30px' }}>Add Book</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-3 rounded">
                <Row>
                    <Col md={6}>
                        <h6 className="mb-2">Name <span className="text-danger">*</span></h6>
                        <input name="name" ref={register({ required: true })} style={inputStyle} />
                    </Col>
                    <Col md={6}>
                        <h6 className="mb-2">Author <span className="text-danger">*</span></h6>
                        <input name="author" ref={register({ required: true })} style={inputStyle} />
                    </Col>
                    <Col md={6}>
                        <h6 className="mb-2">Price <span className="text-danger">*</span></h6>
                        <input name="price" type="number" ref={register({ required: true })} style={inputStyle} />
                    </Col>
                    <Col md={6}>
                        <h6 className="mb-2">Add Book Cover Photo</h6>
                        <input name="image" onChange={uploadImage} type="file" ref={register} style={inputStyle} />
                    </Col>
                    <Col md={6}>
                        <h6 className="mb-2">Category <span className="text-danger">*</span></h6>
                        <input name="category" type="text" ref={register({ required: true })} style={inputStyle} />
                    </Col>
                    <Col md={6}>
                        <h6 className="mb-2">Description</h6>
                        <input name="description" type="text" ref={register} style={inputStyle} />
                    </Col>
                </Row>

                <input type="submit" className="d-block w-25 mx-auto btn btn-primary" value="Save" />
            </form>
        </div>
    );
};

export default AddProduct;