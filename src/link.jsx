import React, { useEffect, useState } from 'react';
import { RouterContext } from './contexts';


const CustomLink = ({children, to}) => {

    return (
        <RouterContext.Consumer>
            {({forceUpdate}) => (
                <a onClick={(_) => {
                    window.location.replace(to);
                    forceUpdate();
                    }}>
                        {children}</a>
            )}
        </RouterContext.Consumer>
    )
}

export default CustomLink