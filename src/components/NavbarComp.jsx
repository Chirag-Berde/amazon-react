import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const NavbarComp = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top navigation-custom'>
                <Container>
                    <Navbar.Brand href="#home"><img className='pt-3' src={logo} alt="logo" width={100} /></Navbar.Brand>
                    <Nav className="me-auto mt-3">
                        
                        <Nav.Link><Link  to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></Nav.Link>
                        <Nav.Link><Link  to="/features" style={{textDecoration:"none",color:"white"}}>Features</Link></Nav.Link>
                        <Nav.Link><Link  to="/pricing" style={{textDecoration:"none",color:"white"}}>Pricing</Link></Nav.Link>
                        <Nav.Link><Link  to="/minitv" style={{textDecoration:"none",color:"white"}}>Mini Tv</Link></Nav.Link>
                        <div className="form ms-5">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>All</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" placeholder='Search Amazon.in'/>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup>
                    </div>
                    </Nav>
                    <div className="button">
                    <Button className='me-3' variant="outline-light">Sign In</Button>
                    <Button variant="outline-light">Login</Button>
                    </div>

                </Container>
            </Navbar>
            
        </>
    )
}

export default NavbarComp