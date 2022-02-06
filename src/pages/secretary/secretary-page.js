import React from "react";
import SideBar from "../../components/sidebar/side-bar";
import TopNav from "../../components/top-nav/top-nav";
import { Outlet } from "react-router-dom";

import "./styles/secretary-page.scss";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";

const menuItems = [
    {
        link: "/secretary",
        section: "home",
        icon: <HomeIcon />,
        text: "Home",
    },
    {
        link: "/secretary/society",
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
