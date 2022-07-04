import React from 'react';
import './MyNav.css'
const MyNav = () => {
    return (
        <nav className={'nav'}>
            <div className="nav__logo"><a href="./"></a></div>
            <div className="nav__container container">

                <a href="#projects" className="nav__link link">Projects</a>
                <a href="#about" className="nav__link link">About</a>
                <a href="#news" className="nav__link link">News</a>
                <a href="#team" className="nav__link link">Team</a>
                <a href="#contact" className="nav__link link">Contact</a>
                <a href="#getTemplate" className="nav__link link">Get template</a>
            </div>
        </nav>
    );
};

export default MyNav;