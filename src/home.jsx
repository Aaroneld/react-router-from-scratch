import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './link';



const Home = props => {

    return(
        <div>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>
            <p>Home</p>
        </div>
    )
}

export default Home