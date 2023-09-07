import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Carear</Nav.Link>
                        </Nav>
                        <Nav>
                            <p>{user?.email}</p>
                            <FaUserCircle style={{ fontSize: '2rem' }} />

                            {user ?
                                <Button onClick={logOut} variant="secondary">Logout</Button> :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;