import React from "react";
import SideBar from "../../components/sidebar/side-bar";
import { Outlet } from "react-router-dom";
import TopNav from "../../components/top-nav/top-nav";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";

const HospitalPage = () => {
  const menuItems = [
    { link: "/hospitalAdmin",  section: "Dashboard",  icon: <DashboardIcon />,  text: "Dashboard"},
    { link: "./Appointments", section: "Appointments",  icon: <BookOnlineIcon />,  text: "Appointments"},
    { link: "./Beds",section: "Beds",icon: <LocalHotelIcon />,text: "Beds" },
    {link: "./Messages",section: "Message",icon: <MessageIcon />,text: "Message"},
    { link: "./Email", section: "Email", icon: <EmailIcon />, text: "Email" },
  ];

  return (
    <div>
      <h1>hello</h1>
      <SideBar menuItems={menuItems} />
      <div className="main">
        <div className="main__content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HospitalPage;
