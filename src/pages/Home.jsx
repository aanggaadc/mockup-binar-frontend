import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Navbar from '../components/NavbarMain'
import Footer from '../components/Footer'
import './Home.css'
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Home() {
    return (
        <>
            <Navbar />

            <div className='container mt-5 mb-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div className='card-container'>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <div className='action-card'>
                                <FiEdit color='blue' size={25} />
                                <FiTrash2 color='red' size={25} />
                            </div>
                        </div>
                    ))}
                </Row>
            </div>

            <Footer />
        </>
    )
}