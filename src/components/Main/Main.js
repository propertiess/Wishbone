import React, {Suspense, useRef} from 'react';
import FPage from "./FPage/FPage";
import ThPage from "./ThPage/ThPage";
import FourPage from "./FourPage/FourPage";
import SPage from "./SPage/SPage";
import './Main.css'
import {CSSTransition} from "react-transition-group";

const Main = ({activeBurger, setActiveBurger}) => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition nodeRef={nodeRef} in={activeBurger} timeout={500} classNames={'main'}>
            <main  ref={nodeRef} onClick={() => setActiveBurger(false)}>

                <FPage></FPage>
                <SPage></SPage>

                <ThPage></ThPage>
                <FourPage></FourPage>
            </main>
        </CSSTransition>

    );
};

export default Main;