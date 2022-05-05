import React from "react";
import SideBar from "../../components/sidebar/side-bar";
import { Outlet } from "react-router-dom";
import TopNav from "../../components/top-nav/top-nav";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";

const HospitalPage = () => {
    const menuItems = [
        { link: "/hospital", section: "Dashboard", icon: <DashboardIcon />, text: "Dashboard" },
        { link: "user", section: "User", icon: <PeopleIcon />, text: "User" },
        { link: "Appointments", section: "Appointments", icon: <BookOnlineIcon />, text: "Appointments" },
        { link: "Beds", section: "Beds", icon: <LocalHotelIcon />, text: "Beds" },
        { link: "Messages", section: "Message", icon: <MessageIcon />, text: "Message" },
        { link: "Email", section: "Email", icon: <EmailIcon />, text: "Email" },
    ];

    return (
        <div>
            <SideBar menuItems={menuItems} />
            <div className="main">
                <div className="main__content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HospitalPage;
