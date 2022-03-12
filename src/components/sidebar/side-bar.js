import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../../assets/images/logo.svg';

import './styles/side-bar.scss';


function SideBar({ menuItems }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = menuItems.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
    <>
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <CloseIcon />
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    menuItems.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <LogoutIcon />
                    </div>
                    <div className="sidebar__menu__item__txt">
                        <Link to='/signin'>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default SideBar;
