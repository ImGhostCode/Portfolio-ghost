
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px"
}

function Header() {
    return (
        <>
            <Navbar bg="light" variant="light" expand='sm'>
                <Container>
                    <div className="">
                        <h2 className='mt-2 fw-bold fs-1' style={{ color: "#6C63FF" }}>
                            <NavLink to="/" style={{ textDecoration: "none" }}>Im Ghost</NavLink>
                        </h2>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>

                        <div className='mt-2 d-sm-flex'>
                            <NavLink to="/" className="text-decoration-none btn d-block m-sm-4 m-0" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none btn d-block m-sm-4 m-0" style={common}>About</NavLink>
                            <NavLink to="playlist" className="text-decoration-none btn d-block m-sm-4 m-0" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none btn d-block m-sm-4 m-0" style={common}>Contact</NavLink>
                        </div>
                        <div>
                            <Button href='http://github.com/ImGhostCode' className='' target='_blank' variant="danger">GitHub</Button>{' '}
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header