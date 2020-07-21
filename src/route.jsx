import React, { useState, useEffect } from 'react'


const CustomRoute = ({children, path}) => {

    let pathname; 
   
    window.location.pathname === "/" ? 
    pathname ="/" : 
    pathname = "/" + window.location.pathname.split('/')[1];
    
    if(pathname ===  "/" + path.split("/")[1]){
        console.log("here");
        return(
            <div>
                {children}
            </div>
        )
    }
    else {
        return null
    }
}


export default CustomRoute; 