import React from 'react'
import projectsData from './data'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Playlist() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <>
            {isLoading ? <div className='d-flex  justify-content-center align-items-center' style={{ height: '90vh' }} >
                <Spinner animation="grow" variant="info" />  &nbsp;&nbsp; Loading .....
            </div> :
                <div className="container p1">
                    <h2 className="h2 fs-1 fw-bold">Projects</h2>
                    <div className="project-wrapper d-flex flex-wrap ">
                        {projectsData && projectsData.map((project, index) => {
                            return (
                                <div className="col-md-4" key={project.id}>
                                    <Card className='p-0 mb-5'>
                                        <Card.Img variant="top" src={project.imgsrc} />
                                        <Card.Body>
                                            <Card.Title>{project.projectName}</Card.Title>
                                            <Button href={project.demo} target='_blank' variant="primary" className='w-100'>Live Demo</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}


                    </div>
                </div>
            }
        </>
    )
}
