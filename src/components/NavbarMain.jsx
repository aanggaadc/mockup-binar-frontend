import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './NavbarMain.css'

export default function NavbarMain() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand style={{ fontSize: "30px" }} > Product List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button>Create New</Button>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link style={{ fontSize: "20px" }} href="/login">Login</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link style={{ fontSize: "20px" }} href="/signup">Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}