import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import Viewer from '../pages/Viewer';

const Route = () => {
    // state to track URL and force component to re-render on change
    const [routeInfo, setCurrentPath] = useState({path:window.location.pathname,id:window.location.pathname.split("/")[3] || null});
    console.log(routeInfo);


    return (routeInfo.path === "/holo-next/")
    ? <HomePage sceneId={null}/>
    : <HomePage sceneId={routeInfo.id}/>;
}

export default Route;