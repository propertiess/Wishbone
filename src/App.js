import React, {Suspense, useState} from 'react';
import './App.css';
import LoadingSpin from "react-loading-spin";
const LazyNav = React.lazy(() => import ('./components/MyNav/MyNav'))
const LazyMain = React.lazy(() => import ('./components/Main/Main'))
function App() {

    return (
    <div className={'App active'}>
        <Suspense fallback={<div  style={{ display: 'flex', justifyContent: 'center', alignItems:'center', background: "transparent", textAlign: "center", minWidth: '101%', minHeight: '300px'}}><LoadingSpin primaryColor={'#4B77BE'} size={'150px'}/></div>}>
            <LazyNav></LazyNav>

            <LazyMain></LazyMain>


        </Suspense>

    </div>
    );
}


export default App;
