import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
    return (
        <footer class="border-top mt-5">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/anggara-setiawan/">
                                    <span class="fa-stack fa-lg">
                                        <FaLinkedin size={50} color="black" />
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/aanggaadc">
                                    <span class="fa-stack fa-lg">
                                        <FaGithub size={50} color="black" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="small text-center text-muted fst-italic">Copyright &copy; Anggara Setiawan 2022</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}