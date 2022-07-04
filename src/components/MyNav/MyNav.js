import React from 'react';
import './MyNav.css'
import Logo from './Logo.svg'
const MyNav = () => {
    return (
        <nav className={'nav'}>
            <div className="nav__container-all">
                <div className="nav__logo">
                    <img loading={"eager"} src={Logo} alt="Logo"/>
                    <a href="./"></a></div>
                <div className="nav__container container">

                    <a href="#projects" className="nav__link link">Projects</a>
                    <a href="#about" className="nav__link link">About</a>
                    <a href="#news" className="nav__link link">News</a>
                    <a href="#team" className="nav__link link">Team</a>
                    <a href="#contact" className="nav__link link">Contact</a>
                    <a href="#getTemplate" className="nav__link link">Get template</a>
                </div>
            </div>

        </nav>
    );
};

export default MyNav;