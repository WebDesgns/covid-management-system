import React from "react";
import { Outlet } from 'react-router-dom'
import Sidebar from "../../components/sidebar/side-bar";

import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";

import "./styles/admin-page.scss";
import TopNav from "../../components/top-nav/top-nav";

const menuItems = [
    {
        link: "/",
        section: "home",
        icon: <HomeIcon />,
        text: "Home",
    },
    {
        link: "/society",
        section: "society",
        icon: <ApartmentIcon />,
        text: "Society",
    },
    {
        link: "/member",
        section: "member",
        icon: <PeopleIcon />,
        text: "Member",
    },
];

function AdminPage() {

    return (
        <>
            <Sidebar menuItems={menuItems} />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AdminPage;
