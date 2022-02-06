import React from 'react'
import UserInfo from '../user-info/user-info'
import { data } from '../../constants'

import MenuIcon from '@mui/icons-material/Menu';
import './styles/top-nav.scss';

const TopNav = () => {
    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }

    return (
        <div className='topnav'>
            <UserInfo user={data.user} />
            <div className="sidebar-toggle" onClick={openSidebar}>
                <MenuIcon />
            </div>
        </div>
    )
}

export default TopNav
