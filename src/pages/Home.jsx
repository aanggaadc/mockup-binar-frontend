import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Navbar from '../components/NavbarMain'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Axios from 'axios'
import { API_URL } from '../config/url'
import { toast } from 'react-toastify'

export default function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = () => {
        Axios.get(`${API_URL}/v1/products`)
            .then((response) => {
                setData(response.data.result)
            }).catch((error) => {
                console.log(error)
            })
    }

    Axios.interceptors.request.use(
        function (config) {
            const userAuthData = localStorage.getItem("token");
            if (userAuthData) {
                const parsedAuth = JSON.parse(userAuthData);
                config.headers.Authorization = "Bearer " + parsedAuth.access_token;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    Axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    navigate("/login");
                    localStorage.removeItem("token");
                    toast.error(error.response.data.message);
                }
            }
            return Promise.reject(error);
        }
    );

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Navbar />
            <div className='container mt-5 mb-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map((item, index) => (
                        <div key={index} className='card-container'>
                            <Col>
                                <Card className="text-center shadow h-100">
                                    <div className='card-trip'>
                                        <Card.Img variant="top" src={item.imageurl} className="card-imgTrip" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            ${item.price}
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