import React from "react";
import { Outlet } from 'react-router-dom'
import Sidebar from "../../components/sidebar/side-bar";

import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";

import "./styles/admin-page.scss";

const menuItems = [
    {
        link: "/admin",
        section: "home",
        icon: <HomeIcon />,
        text: "Home",
    },
    {
        link: "user",
        section: "user",
        icon: <PeopleIcon />,
        text: "Users",
    },
];

function AdminPage() {

    return (
        <>
            <Sidebar menuItems={menuItems} />
            <div className="main">
                <div className="main__content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AdminPage;
