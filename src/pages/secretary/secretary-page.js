import React from "react";
import SideBar from "../../components/sidebar/side-bar";

import "./styles/secretary-page.scss";

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

function SecretaryPage() {
    return (
        <>
            <SideBar menuItems={menuItems}/>
        </>
    );
}

export default SecretaryPage;
