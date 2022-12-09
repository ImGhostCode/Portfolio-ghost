import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {

    return (
        <>
            <div className="container bg-dark text-white text-start">
                <div className="row">
                    <div className="col p-5">
                        <h2 className='h2'>IM Ghost</h2>
                        <p>&copy; 2022 IM Ghost All rights reserved</p>
                        <p>
                            <span className='p-1 fs-5'> <i className="fa-brands fa-instagram"></i></span>
                            <span className='p-1 fs-5'><i className="fa-brands fa-facebook"></i></span>
                        </p>
                    </div>
                    <div className="col p-5">
                        <h2 className="h2">Get in Touch</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione quae! Dolorem ducimus officia dignissimos consequuntur est veniam?</p>
                        <p>info@imghost.com</p>
                        <p>+84 12345678</p>
                    </div>
                    <div className="col p-5">
                        <h2 className="h2">About</h2>
                        <p>Resume</p>
                    </div>
                </div>
            </div>
        </>
    )
}
