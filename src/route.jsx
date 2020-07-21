import React, { useEffect, useState } from 'react'




const CustomRoute = ({children, path }) => {

   
    if(window.location.pathname === path){
        console.log(children);
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