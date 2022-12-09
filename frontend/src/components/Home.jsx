import React from 'react'
import Button from 'react-bootstrap/esm/Button'

export default function Home() {
    return (
        <>
            <div className="container text-start d-md-flex" style={{ minHeight: 800, marginTop: 128 }}>

                <div className="col">
                    <h2 className="h2 fw-bold">Welcome to <span className='text-primary'>IM Ghost</span></h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi alias vero quis pariatur dignissimos beatae maiores nulla dolor, quaerat quidem velit voluptas, consequuntur aut perspiciatis repellendus quas totam modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio consequuntur ab quasi fuga quibusdam dolore expedita, id aperiam commodi enim iste similique! Illum quisquam quasi perspiciatis, nesciunt inventore nostrum.</p>
                    <Button className='me-4' variant="info">Projects</Button>{' '}
                    <Button href='http://github.com/ImGhostCode' target='_blank' variant="danger">GitHub</Button>{' '}
                </div>
                <div className="col">
                    <img src="hp.png" className='img-fluid' alt="hp" />
                </div>
            </div>
        </>
    )
}
