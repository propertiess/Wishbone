import React, {Suspense, useState} from 'react';
import './App.css';
import LoadingSpin from "react-loading-spin";
const LazyNav = React.lazy(() => import ('./components/MyNav/MyNav'))
const LazyMain = React.lazy(() => import ('./components/Main/Main'))
function App() {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false)

    return (
    <div className={activeBurgerMenu ? 'App  active fixed' : 'App active'} >
        <Suspense fallback={<div  style={{ display: 'flex', justifyContent: 'center', alignItems:'center', background: "transparent", textAlign: "center", minWidth: '101%', minHeight: '100vh'}}><LoadingSpin primaryColor={'#4B77BE'} size={'50px'}/></div>}>
            <LazyNav activeBurgerMenu={activeBurgerMenu} setActiveBurgerMenu={setActiveBurgerMenu}></LazyNav>

            <LazyMain activeBurger={activeBurgerMenu} setActiveBurger={setActiveBurgerMenu}></LazyMain>


        </Suspense>


    </div>
    );
}


export default App;
