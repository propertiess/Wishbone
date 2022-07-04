import React from 'react';
import './FPage.css'
// import BGFPage from './bgFPage.svg'
import BGFPage from './bgFPage low quality.jpg'
import { motion } from "framer-motion"
const FPage = () => {
    const variants = {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        visible: custom => (
            {
                opacity: 1,
                y: 0,
                transition: {type: 'spring', bounce: 0.1, delay: custom * 1, duration: 1},
            }
        ),

    }

    return (
        <section className={'desc'}>
            <div className="desc__container">
                <div className="desc__content-left">
                    <div className="desc__logo">Wishbone+Partners</div>
                    <motion.h1 initial="hidden" whileInView="visible"
                               variants={variants}
                               custom={0}
                               viewport={{once:true,}}
                               className="desc__title">The home of beautiful architecture.</motion.h1>
                    <motion.p
                        initial="hidden" whileInView="visible"
                        variants={variants}
                        custom={0.3}
                        className="desc__desc">We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.</motion.p>
                    <motion.a
                        initial="hidden" whileInView="visible"
                        variants={variants}
                        custom={0.7}
                        viewport={{amount: 0.3}}
                        href="./" className={'desc__link link'}>Read more</motion.a>
                </div>
                <div className="desc__content-right">
                    <a data-srcset={'https://i.imgur.com/9wui7Y6.png'} href="https://i.imgur.com/9wui7Y6.png" className={'full progressive replace'}>
                        <img src={BGFPage} alt={'Дом'} loading="eager" className="preview"></img>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default FPage;