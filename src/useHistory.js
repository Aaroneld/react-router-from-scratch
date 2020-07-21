import { useState } from 'react';

export function useHistory() {
    const [ history ] = useState({
        location: window.location.pathname,
        push: (path) => {
            window.location.replace(path);
        }
    });

    return history;
}