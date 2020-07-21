import React from 'react'
import { Link } from 'react-router-dom'



const About = props => {

    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </header>
            <p>About</p>
        </div>
    )
}

export default About