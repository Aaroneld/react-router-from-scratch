import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './link';
import { useParams } from './useParams';
import { useHistory } from './useHistory';


const About = props => {

    console.log(props);

    const { params } = useParams();
    console.log(params);

    const { location, push } = useHistory();
    console.log(location);


    const handleClick = _ => {
        push("/");
    }

    return(
        <div>
            <header>
                <p onClick={handleClick}>Home</p>
                <CustomLink to="/about/1">About</CustomLink>
            </header>
            <p>About</p>
        </div>
    )
}

export default About