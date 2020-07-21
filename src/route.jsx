import React, { useEffect, useState } from 'react'




const CustomRoute = ({component: Component, path }) => {

    const [isValid, setIsValid] = useState(false);
    const [forceUpdate, setForceUpate] = useState(0);

    useEffect(() => {
        if(window.location.pathname === path){
            setIsValid(true)
        } else setIsValid(false)
        setForceUpate(forceUpdate + 1)
    }, [setForceUpate])

   
    if(isValid){
        console.log('here');
        return(
            <div>
                <Component />
            </div>
        )
    }
    else {
        return null
    }
}


export default CustomRoute; 