import React from 'react';
import { Tab, Col, Row, Nav, Container } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import { CgMicrosoft } from 'react-icons/cg'
import AddProduct from '../AddProduct/AddProduct';
import ManageBook from '../ManageBook/ManageBook';



const Admin = () => {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="addProduct">
                <Row>
                    <Col sm={3} className="bg-dark" style={{height: '100vh'}}>
                        <h1 className="text-center my-4 text-light">BOOK SHOP</h1>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="manageBooks" className="text-light">
                                    <CgMicrosoft /> MANAGE BOOKS
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addProduct" className="text-light">
                                    <BsPlusSquare /> ADD BOOK
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="editBook" className="text-light">
                                    <FiEdit /> EDIT BOOK
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="manageBooks">
                                <ManageBook></ManageBook>
                            </Tab.Pane>
                            <Tab.Pane eventKey="addProduct">
                                <AddProduct></AddProduct>
                            </Tab.Pane>
                            <Tab.Pane eventKey="editBook">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Admin;