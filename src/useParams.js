import {useState} from 'react';


export function useParams () {
    
    const [params] = useState(window.location.pathname.split("/")[2]);
    return {params}
}