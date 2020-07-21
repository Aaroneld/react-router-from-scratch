import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './link';
import { useParams } from './useParams';


const About = props => {

    console.log(props);

    const { params } = useParams();
    console.log(params);

    return(
        <div>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about/1">About</CustomLink>
            </header>
            <p>About</p>
        </div>
    )
}

export default About