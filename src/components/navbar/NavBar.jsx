import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import burger from '../assets/icon/burger.svg'
import './navbar.scss'



function NavBar() {

    const [activMenu, setActivMenu] = useState(false);

    const showMenu = () => {
        setActivMenu(!activMenu);
    }

    const menuItems = [
        {
            id: 1,
            menu: 'home',
            link: '/'
        },
        {
            id: 2,
            menu: 'about',
            link: 'about'
        },
        {
            id: 3,
            menu: 'portfolio',
            link: 'portfolio'
        },
        {
            id: 4,
            menu: 'contact',
            link: 'contact'
        }
    ]

    return (
        <div className=" header-nav">
            <div className="container header-nav__container">
                <div className="logo">
                    <Link to='/'>Asel</Link>
                </div>
                <div onClick={showMenu} className="burger">
                    <img src={burger} alt="" />
                </div>
                <div className={activMenu ? "nav nav--show" : "nav "}>

                    {menuItems.map((menu) => {
                        return (
                            <NavLink key={menu.id} onClick={showMenu} to={menu.link}>{menu.menu}</NavLink>
                        )
                    })

                    }

                    {/* <NavLink onClick={showMenu} to='/'>Home</NavLink>
                    <NavLink onClick={showMenu} to='/about'>About</NavLink>
                    <NavLink onClick={showMenu} to='/portfolio'>Portfolio</NavLink>
                    <NavLink onClick={showMenu} to='/contact'>Contact</NavLink> */}
                </div>

            </div>
        </div>
    )
}

export default NavBar