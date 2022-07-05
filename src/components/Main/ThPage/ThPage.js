import React from 'react';
import './ThPage.css'
import {motion} from 'framer-motion'
const ThPage = () => {
    const variants = {
        hidden: {
            opacity: 0,
            x: 300,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {type: 'spring', duration: 1},
        }
    }
    return (
        <section className={'third-page'} >
            <div className="third-page__container">
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={variants}
                    viewport={{amount: 0.1, once: true,}}
                    className="third-page__row">
                    <h3 className="third-page__title title">Reeding House</h3>
                    <p className={'third-page__desc'}>Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
                </motion.div>


            </div>

        </section>
    );
};

export default ThPage;