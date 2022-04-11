import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import burger from '../assets/icon/burger.svg'
import './navbar.scss'



function NavBar() {

    const [activMenu, setActivMenu] = useState(false);

    const showMenu = () => {
        setActivMenu(!activMenu);
    }

    useEffect(() => {

    })

    return (
        <div className=" header-nav">
            <div className="container header-nav__container">
                <div className="logo">
                    <Link to='/'>logo</Link>
                </div>
                <div onClick={showMenu} className="burger">
                    <img src={burger} alt="" />
                </div>
                <div className={activMenu ? "nav nav--show" : "nav "}>
                    <NavLink onClick={showMenu} to='/'>Home</NavLink>
                    <NavLink onClick={showMenu} to='/about'>About</NavLink>
                    <NavLink onClick={showMenu} to='/portfolio'>Portfolio</NavLink>
                    <NavLink onClick={showMenu} to='/contact'>Contact</NavLink>
                </div>

            </div>
        </div>
    )
}

export default NavBar