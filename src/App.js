import React, {Suspense} from 'react';
import './App.css';
import LoadingSpin from "react-loading-spin";
const LazyNav = React.lazy(() => import ('./components/MyNav/MyNav'))
const LazyMain = React.lazy(() => import ('./components/Main/Main'))
function App() {
  return (
    <div className="App">
        <Suspense fallback={<div style={{background: "transparent", textAlign: "center", minWidth: '100%', minHeight: '100%'}}><LoadingSpin/></div>}>
            <LazyNav></LazyNav>
            <LazyMain></LazyMain>
        </Suspense>

    </div>
  );
}


export default App;
