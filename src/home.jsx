import React from 'react'
import { Link } from 'react-router-dom'



const Home = props => {

    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </header>
            <p>Home</p>
        </div>
    )
}

export default Home