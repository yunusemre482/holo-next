import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import Viewer from '../pages/Viewer';

const Route = () => {
    // state to track URL and force component to re-render on change
    const [routeInfo, setCurrentPath] = useState({path:window.location.pathname,id:window.location.pathname.split("/")[3] || null});
    console.log(routeInfo);
    useEffect(() => {
        // define callback as separate function so it can be removed later with cleanup function
        const onLocationChange = () => {
            // update path state to current window URL
            setCurrentPath(window.location.pathname);
        }

        // listen for popstate event
        window.addEventListener('popstate', onLocationChange);

        // clean up event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, [])

    return (routeInfo.path === "/holo-next/")
    ? <HomePage sceneId={null}/>
    : <HomePage sceneId={routeInfo.id}/>;
}

export default Route;