import React from 'react'

export default function About() {
    return (
        <>
            <div className="d-md-flex p-5">
                <div className="col">
                    <h2 className="h2">Meet IM Ghost</h2>
                    <p>Hello, I'm Ghost. I'm Software Engineering. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum vero autem sunt perspiciatis laudantium, omnis voluptatem temporibus tempore ex itaque? Recusandae iure voluptate sint reprehenderit, illum reiciendis optio praesentium!</p>
                </div>
                <div className="col">
                    <img src="me.jpg" className='img-fluid' alt="me" height={400} width={500} />
                </div>
            </div>
        </>
    )
}
