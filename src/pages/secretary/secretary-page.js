import React from "react";
import SideBar from "../../components/sidebar/side-bar";
import TopNav from "../../components/top-nav/top-nav";
import { Outlet } from "react-router-dom";

import "./styles/secretary-page.scss";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";

const menuItems = [
    {
        link: "/society",
        section: "home",
        icon: <HomeIcon />,
        text: "Home",
    },
    {
        link: "member",
        section: "member",
        icon: <PeopleIcon />,
        text: "Members",
    },
];


function SecretaryPage() {
    return (
        <>
            <SideBar menuItems={menuItems}/>
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default SecretaryPage;
