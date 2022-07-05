import React, {useRef, useState} from 'react';
import './MyNav.css'
import Logo from './Logo.svg'
import {CSSTransition} from "react-transition-group";
import { StickyContainer, Sticky } from 'react-sticky';
const MyNav = (props) => {
    const nodeRef = useRef(null)
    return (
        <nav className={'nav'}>
            <div className="nav__container-all">
                <div className="nav__logo">
                    <img loading={"eager"} src={Logo} alt="Logo"/>
                    <a href="./"></a></div>
                <div onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} className="nav__burger">
                    <div className="burger__btn"></div>

                </div>

                <div className="nav__container container">

                    <a href="#projects" className="nav__link link">Projects</a>
                    <a href="#about" className="nav__link link">About</a>
                    <a href="#news" className="nav__link link">News</a>
                    <a href="#team" className="nav__link link">Team</a>
                    <a href="#contact" className="nav__link link">Contact</a>
                    <a href="#getTemplate" className="nav__link link">Get template</a>
                </div>
            </div>
            <CSSTransition nodeRef={nodeRef} in={props.activeBurgerMenu}  timeout={500} classNames={'burger__menu'} mountOnEnter unmountOnExit>
                <div ref={nodeRef} className="burger__menu" onBlur={() => props.setActiveBurgerMenu(false)}>

                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#projects" className="burger__link link">Projects</a>
                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#about" className="burger__link link">About</a>
                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#news" className="burger__link link">News</a>
                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#team" className="burger__link link">Team</a>
                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#contact" className="burger__link link">Contact</a>
                    <a onClick={() => props.setActiveBurgerMenu(!props.activeBurgerMenu)} href="#getTemplate" className="burger__link link">Get template</a>

                </div>
            </CSSTransition>

        </nav>


    );
};

export default MyNav;