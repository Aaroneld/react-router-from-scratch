import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './link';


const About = props => {

    return(
        <div>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>
            <p>About</p>
        </div>
    )
}

export default About