import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import './sidebar.scss'

import logo from '../../assets/images/logo.svg';

const adminOptions = [
    {
        link: '/',
        section: 'home',
        icon: <HomeIcon />,
        text: 'Home'
    },
    {
        link: '/society',
        section: 'society',
        icon: <ApartmentIcon />,
        text: 'Society'
    },
    {
        link: '/member',
        section: 'member',
        icon: <PeopleIcon />,
        text: 'Member'
    },
  ]

function SideBar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = adminOptions.findIndex(item => item.section === curPath)

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
                    adminOptions.map((nav, index) => (
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
                        Logout
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default SideBar;
