import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <div className='container container-login'>
                <div class="login-form">
                    <h2 class="text-center">Login</h2>
                    <form >
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" required="required" />
                        </div>
                        <div class="form-group mt-2">
                            <input type="password" class="form-control" placeholder="Password" required="required" />
                        </div>
                        <div class="form-group mt-4">
                            <button type="submit" class="btn btn-primary btn-block">Log in</button>
                        </div>
                    </form>
                    <p class="text-center"> Don't have an account? <a href="#">Register</a></p>
                </div>
            </div>
        </>
    )
}