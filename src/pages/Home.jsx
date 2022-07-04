import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import Navbar from '../components/NavbarMain'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Axios from 'axios'
import { API_URL } from '../config/url'
import { toast } from 'react-toastify'
import { Formik } from 'formik'

export default function Home() {
    const [data, setData] = useState([])
    const [detailData, setDetailData] = useState({})
    const navigate = useNavigate()

    const [showCreate, setShowCreate] = useState(false);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (id) => {
        Axios.get(`${API_URL}/v1/products/${id}`)
            .then((response) => {
                setDetailData(response.data.result)
            }).catch((error) => {
                console.log(error)
            })
        setTimeout(() => {
            setShowEdit(true)
        }, 800);
    }

    const getProducts = () => {
        Axios.get(`${API_URL}/v1/products`)
            .then((response) => {
                setData(response.data.result)
            }).catch((error) => {
                console.log(error)
            })
    }

    const deleteProduct = (id) => {
        Axios.delete(`${API_URL}/v1/products/${id}`)
            .then(() => {
                toast.success("Product Succesfully Delete")
                getProducts()
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
        getProducts()
    }, [])

    return (
        <>
            <Navbar show={handleShowCreate} />
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
                                <FiEdit onClick={() => {
                                    handleShowEdit(item.id)
                                }} style={{ cursor: "pointer" }} color='blue' size={25} />
                                <FiTrash2 onClick={() => {
                                    deleteProduct(item.id)
                                    getProducts()
                                }} style={{ cursor: "pointer" }} color='red' size={25} />
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
            <Footer />

            {/* MODAL CREATE */}
            <Modal show={showCreate} onHide={handleCloseCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>CREATE NEW</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: "",
                            price: "",
                            imageurl: ""
                        }}
                        onSubmit={(values) => {
                            Axios.post(`${API_URL}/v1/products/`, values)
                                .then(() => {
                                    toast.success("Product Successfully created!!");
                                    handleCloseCreate()
                                    getProducts()
                                })
                                .catch((error) => {
                                    if (error.response) {
                                        toast.error(error.response.data.message);
                                    } else {
                                        toast.error("Cannot Connect to Server");
                                    }
                                })
                        }
                        }
                    >
                        {({ handleSubmit, handleChange }) => (
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Product Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" name='name' placeholder="Product Name" onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Price (Dollar USD)" className="mb-3">
                                    <Form.Control type="Number" name='price' placeholder="Product Price" onChange={handleChange} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Image URL">
                                    <Form.Control type="text" name='imageurl' placeholder="Image" onChange={handleChange} />
                                </FloatingLabel>
                                <hr />
                                <div className='float-end create-btn'>
                                    <Button variant="light" onClick={handleCloseCreate}>
                                        Back
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit}>
                                        Create
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>

            {/* MODAL EDIT */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: detailData.name,
                            price: detailData.price,
                            imageurl: detailData.imageurl
                        }}
                        onSubmit={(values) => {
                            Axios.put(`${API_URL}/v1/products/${detailData.id}`, values)
                                .then(() => {
                                    toast.success("Product Successfully Updated!!");
                                    handleCloseEdit()
                                    getProducts()
                                })
                                .catch((error) => {
                                    if (error.response) {
                                        toast.error(error.response.data.message);
                                    } else {
                                        toast.error("Cannot Connect to Server");
                                    }
                                })
                        }
                        }
                    >
                        {({ values, handleSubmit, handleChange }) => (
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Product Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" value={values.name} name='name' placeholder="Product Name" onChange={handleChange} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Price (Dollar USD)" className="mb-3">
                                    <Form.Control type="Number" value={values.price} name='price' placeholder="Product Price" onChange={handleChange} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Image URL">
                                    <Form.Control type="text" value={values.imageurl} name='imageurl' placeholder="Image" onChange={handleChange} />
                                </FloatingLabel>
                                <hr />
                                <div className='float-end create-btn'>
                                    <Button variant="light" onClick={() => {
                                        setDetailData({})
                                        handleCloseEdit()
                                    }}>
                                        Back
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit}>
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}