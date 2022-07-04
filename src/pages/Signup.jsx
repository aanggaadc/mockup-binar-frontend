import React from 'react'
import './Signup.css'

export default function Signup() {
    return (
        <>
            <div className='container container-register'>
                <div class="register-form">
                    <h2 class="text-center">Register</h2>
                    <form >
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" required="required" />
                        </div>
                        <div class="form-group mt-2">
                            <input type="password" class="form-control" placeholder="Email" required="required" />
                        </div>
                        <div class="form-group mt-2">
                            <input type="password" class="form-control" placeholder="Password" required="required" />
                        </div>
                        <div class="form-group mt-4">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                    </form>
                    <p class="text-center"> Already have account ? <a href="#">Login</a></p>
                </div>
            </div>
        </>
    )
}