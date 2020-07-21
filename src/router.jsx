import React, {useState} from 'react';
import { RouterContext } from './contexts';




const Router = ({children, ...rest}) => {

    function useForceUpdate(){
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => ++value); // update the state to force render
    }
    
    const forceUpdate = useForceUpdate();

    console.log(children.props)

    return(
        <RouterContext.Provider value={{forceUpdate}}>
            {children}
        </RouterContext.Provider>
    )
}

export default Router;