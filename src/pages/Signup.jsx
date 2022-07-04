import React from 'react'
import './Signup.css'
import { Formik } from 'formik'
import { API_URL } from '../config/url'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    return (
        <>
            <div className='container container-register'>
                <div class="register-form">
                    <h2 class="text-center">Register</h2>

                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",

                        }}
                        onSubmit={(values) => {
                            Axios.post(`${API_URL}/auth/signup`, values)
                                .then(() => {
                                    navigate("/login");
                                    toast.success("You Are Succesfully Registered, Please Login!");
                                })
                                .catch((error) => {
                                    if (error.response) {
                                        toast.error(error.response.data.message);
                                    } else {
                                        toast.error("Can't Connect to Our Server");
                                    }
                                    console.log(error);
                                });
                        }}
                    >

                        {({ handleSubmit, handleChange }) => (
                            <form >
                                <div class="form-group">
                                    <input type="text" class="form-control" name='name' placeholder="Name" onChange={handleChange} />
                                </div>
                                <div class="form-group mt-2">
                                    <input type="email" class="form-control" name='email' placeholder="Email" onChange={handleChange} />
                                </div>
                                <div class="form-group mt-2">
                                    <input type="password" class="form-control" name='password' placeholder="Password" onChange={handleChange} />
                                </div>
                                <div class="form-group mt-4">
                                    <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-block">Register</button>
                                </div>
                            </form>

                        )}
                    </Formik>
                    <p class="text-center"> Already have account ? <a href="#">Login</a></p>
                </div>
            </div>
        </>
    )
}