import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [inputValue, setInputValue] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const getValue = e => {
        const { value, name } = e.target
        setInputValue(pre => {
            return {
                ...pre,
                [name]: value
            }
        })

    }

    const sendData = async e => {
        e.preventDefault()

        const { fname, lname, email, phone, message } = inputValue

        if (!fname) {
            toast.error('First name is require')
        } else
            if (!lname) {
                toast.error('Last name is require')
            } else
                if (!email) {
                    toast.error('Email is require')
                } else
                    if (!phone) {
                        toast.error('Phone is require')
                    } else {
                        const res = await fetch('http://localhost:3051/contact', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ fname, lname, email, phone, msg: message })
                        })

                        const data = await res.json()

                        console.log(data)
                        if (data.code == 400) {
                            toast.error(data.message)
                        }
                        if (data.code == 200) {
                            toast.success("Your response sent")
                            setInputValue({
                                fname: "",
                                lname: "",
                                email: "",
                                phone: "",
                                message: ""
                            })
                        }
                    }
    }
    return (
        <div className="container text-start">
            <h1 className='text-center mb-3'>Contact me</h1>
            <Form>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="fn">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={inputValue.fname} name='fname' type="text" onChange={getValue} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="ln">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={inputValue.lname} name='lname' type="text" onChange={getValue} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={inputValue.email} name='email' type="text" onChange={getValue} />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control value={inputValue.phone} name='phone' type="text" onChange={getValue} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <Form.Group className="mb-3" controlId="msg">
                        <Form.Label>Message</Form.Label>
                        <Form.Control value={inputValue.message} name='message' as={'textarea'} onChange={getValue} style={{ height: 100 }} />
                    </Form.Group>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto mb-4">
                        <Button className='w-100' variant="primary" type='submit' onClick={sendData}>Submit</Button>{' '}
                    </div>
                </div>
            </Form>
            <ToastContainer />
        </div>
    )
}
