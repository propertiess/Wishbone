import React from 'react';
import FPage from "./FPage/FPage";
import SPage from "./SPage/SPage";
import ThPage from "./ThPage/ThPage";
import FourPage from "./FourPage/FourPage";

const Main = () => {
    return (
        <main className={'main'}>
            <FPage></FPage>
            <SPage></SPage>
            <ThPage></ThPage>
            <FourPage></FourPage>
        </main>
    );
};

export default Main;