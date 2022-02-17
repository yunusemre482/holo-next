import './App.css';
import { useContext } from 'react'
import HomePage from './pages/HomePage';
import Viewer from './pages/Viewer';

import { pagesMapping, RoutingContext } from './routes/Routing';

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <>
      {(pagesMapping.home === page) && <HomePage/>}
      {(pagesMapping.viewer === page) && <Viewer />}
    </>
  )
}

export default App;
