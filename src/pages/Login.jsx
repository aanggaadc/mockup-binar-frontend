import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../config/url'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import Axios from 'axios'

export default function Login() {
    const navigate = useNavigate()
    return (
        <>
            <div className='container container-login'>
                <div class="login-form">
                    <h2 class="text-center">Login</h2>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",

                        }}
                        onSubmit={(values) => {
                            Axios.post(`${API_URL}/auth/login`, values)
                                .then((response) => {
                                    console.log(response)
                                    localStorage.setItem("token", JSON.stringify(response.data.result))
                                    navigate("/");
                                    toast.success(`Welcome`);
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
                                    <input type="email" class="form-control" name='email' placeholder="Email" onChange={handleChange} />
                                </div>
                                <div class="form-group mt-2">
                                    <input type="password" class="form-control" name='password' placeholder="Password" onChange={handleChange} />
                                </div>
                                <div class="form-group mt-4">
                                    <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-block">Log in</button>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <p class="text-center"> Don't have an account? <a href="#">Register</a></p>
                </div>
            </div>
        </>
    )
}