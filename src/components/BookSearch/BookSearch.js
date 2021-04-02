import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';


const BookSearch = () => {
    return (
        <InputGroup className="my-5 w-50 mx-auto">
            <FormControl
                placeholder="Search Book"
                name="search"
            />
            <InputGroup.Append>
                <Button variant="success">Button</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default BookSearch;