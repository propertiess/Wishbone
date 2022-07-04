import React, {Suspense} from 'react';
import FPage from "./FPage/FPage";
import ThPage from "./ThPage/ThPage";
import FourPage from "./FourPage/FourPage";
import SPage from "./SPage/SPage";

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