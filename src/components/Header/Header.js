import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext)

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Paperback Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link to='/home' className="text-dark text-decoration-none">Home</Link></Nav.Link>
                    <Nav.Link><Link to='/orders' className="text-dark text-decoration-none">Orders</Link></Nav.Link>
                    <Nav.Link><Link to="/admin" className="text-dark text-decoration-none">Admin</Link></Nav.Link>
                    <Nav.Link><Link to='#deals' className="text-dark text-decoration-none">Deals</Link></Nav.Link>
                    {
                        loggedInUser.email
                            ? <Nav.Link>
                                <img src={loggedInUser.photoURL} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" srcset="" />
                            </Nav.Link>
                            : <Link to='/login' className="ml-3 btn btn-primary">Login</Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;