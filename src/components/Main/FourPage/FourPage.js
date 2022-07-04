import React from 'react';
import './FourPage.css'
import {motion} from "framer-motion";
import imgFourPage1 from './grid_img_1.svg'
import imgFourPage2 from './grid_img_2.svg'
import imgFourPage3 from './grid_img_3.svg'
const FourPage = () => {
    const variantsTitles = {
        hidden: {
            opacity: 0,
            // transform: 'scale(0)',
            y: 30,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            // transform: 'scale(1)',
            transition: {type: 'spring', duration: 2, delay: custom * 0.5,},
        }),
    }
    const variantsImageLeft = {
        hidden: {
            opacity: 0,
            // transform: 'scale(0)',
            x: -100,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            // transform: 'scale(1)',
            transition: {type: 'spring', bounce: 0.1, duration: 1.3, delay: custom * 0.5,},
        }),
    }
    const variantsImageCenter = {
        hidden: {
            opacity: 0,
            transform: 'scale(0)',
        },
        visible: custom => ({
            opacity: 1,
            transform: 'scale(1)',
            transition: {type: 'spring', bounce: 0.1, duration: 1.3, delay: custom * 0.5,},
        }),
    }
    const variantsImageRight = {
        hidden: {
            opacity: 0,
            // transform: 'scale(0)',
            x: 100,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            // transform: 'scale(1)',
            transition: {type: 'spring', bounce: 0.1, duration: 1.3, delay: custom * 0.5,},
        }),
    }
    const variantsP = {
        hidden: {
            opacity: 0,
            transform: 'scale(0)',
        },
        visible: custom => ({
            opacity: 1,
            transform: 'scale(1)',

            transition: {type: 'spring', bounce: 0.1, duration: 1.3, delay: custom * 0.2,},
        }),
    }
    return (
        <section className={'four-page'}>
            <div className="four-page__container">
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variantsTitles}
                    viewport={{once: true, amount: 0.1,}}
                    custom={0}
                    className="four-page__logo title">Our process</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variantsTitles}
                    viewport={{once: true,amount: 0.1,}}
                    custom={1}
                    className="four-page__title">How we do what we do.</motion.div>
                <div className="four-page__grid">
                    <div className="grid__container">
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsImageLeft}
                            viewport={{once: true,amount: 0.1,}}
                            custom={1}

                            className="grid__img_1">
                            <img loading={'lazy'} width={'100%'} src={imgFourPage1} alt="Sketching"/>
                        </motion.div>
                        <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={variantsP}
                        viewport={{once: true}}
                        custom={1}
                        className="grid__title">Sketching</motion.div>
                        <motion.p
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsP}
                            // viewport={{once: true}}
                            custom={1}
                            className="grid__desc text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.</motion.p>
                    </div>
                    <div className="grid__container grid__container_center">
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsImageCenter}
                            viewport={{once: true,amount: 0.1,}}
                            custom={1.1}
                            className="grid__img_1 grid__img_2">
                            <img loading={'lazy'} width={'100%'} src={imgFourPage2} alt="Finalizing"/>

                        </motion.div>
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsP}
                            viewport={{once: true}}
                            custom={1.1}
                            className="grid__title">Finalizing</motion.div>
                        <motion.p
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsP}
                            // viewport={{once: true}}
                            custom={1.1}
                            className="grid__desc text">Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.</motion.p>
                    </div>
                    <div className="grid__container">
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsImageRight}
                            viewport={{once: true,amount: 0.1,}}
                            custom={1}
                            className="grid__img_1 grid__img_3">
                            <img width={'100%'} src={imgFourPage3} alt="Finalizing"/>
                        </motion.div>
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsP}
                            viewport={{once: true}}
                            custom={1}
                            className="grid__title">Building</motion.div>
                        <motion.p
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsP}
                            // viewport={{once: true}}
                            custom={1}
                            className="grid__desc text">Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.</motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourPage;