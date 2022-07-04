import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './NavbarMain.css'
import useAuth from '../utils/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function NavbarMain({ show }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        toast.success("You are logged out, see ya!!");
        localStorage.removeItem("token");
        navigate('/login')

    };

    const authData = useAuth()
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand style={{ fontSize: "30px" }} > Product List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button onClick={show}>Create New</Button>
                    </Nav>
                    {authData && <Nav className="ml-auto">
                        <Nav.Link style={{ fontSize: "20px" }} onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>}
                    {!authData && <Nav className="ml-auto">
                        <Nav.Link style={{ fontSize: "20px" }} href="/signup">Signup</Nav.Link>
                    </Nav>}
                    {!authData && <Nav className="ml-auto">
                        <Nav.Link style={{ fontSize: "20px" }} href="/login">Login</Nav.Link>
                    </Nav>}
                </Container>
            </Navbar>
        </>
    )
}