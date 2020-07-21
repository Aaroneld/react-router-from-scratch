import React, {useState} from 'react';
import { RouterContext } from './contexts';




const Router = ({children}) => {

    function useForceUpdate(){
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value === 1? 0 : 1); // update the state to force render
    }
    
    const forceUpdate = useForceUpdate();

    return(
        <RouterContext.Provider value={{forceUpdate}}>
            {children}
        </RouterContext.Provider>
    )
}

export default Router;