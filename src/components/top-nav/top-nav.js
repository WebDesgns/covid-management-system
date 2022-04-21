import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import './styles/top-nav.scss';

const TopNav = () => {
    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }

    return (
        <div className='topnav'>
            <div className="sidebar-toggle" onClick={openSidebar}>
                <MenuIcon />
            </div>
        </div>
    )
}

export default TopNav
