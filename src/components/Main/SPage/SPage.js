import React from 'react';
import './SPage.css'
import { motion } from "framer-motion"
import Partner from './partnerimg.svg'
const SPage = () => {
    const variantsTitle = {
        hidden: {
            opacity: 0,
            x: '-50%',
        },
        visible: custom => ({
            opacity: 1,
            x: 0,
            transition: {type: 'spring', bounce: 0.1, duration: 2},
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

            transition: {type: 'spring', bounce: 0.1, duration: 1, delay: custom * 0.2,},
        }),
    }
    const variantsPartner = {
        hidden: {
            opacity: 0,
            x: '100%',
        },
        visible: custom => ({
            opacity: 1,
            x: 0,
            transition: {type: 'spring', bounce: 0.1, duration: 2},
        }),
    }
    return (
        <section className={'about'} id={'about'}>
            <div className="about__container">
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variantsTitle}
                    viewport={{once: true, amount: 1}}
                    className="about__content-left">
                    <h2 className="about__title">Our firm</h2>
                </motion.div>
                <div className="about__content-right">
                    <motion.p
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variantsP}
                    viewport={{once: true}}
                    custom={1}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</motion.p>
                    <motion.p
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variantsP}
                    viewport={{once: true}}

                    custom={1.1}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</motion.p>
                    <motion.p
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true}}

                    variants={variantsP}
                    custom={1.3}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</motion.p>
                    <div className="about__partner">
                        <div className="partner__content-left">
                            <motion.div
                                initial={'hidden'}
                                whileInView={'visible'}
                                variants={variantsTitle}
                                className="partner__img">
                                <img loading={'lazy'} width={'100%'} src={Partner} alt="Partner"/>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={'hidden'}
                            whileInView={'visible'}
                            variants={variantsPartner}
                            className="partner__content-right">
                            <p className="partner__name">Stephen Collier</p>
                            <p className="partner__prof">Senior Partner</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SPage;