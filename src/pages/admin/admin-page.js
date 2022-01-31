import React from "react";
import Sidebar from "../../components/sidebar/SideBar";

import './styles/admin-page.scss';

function AdminPage() {
    return (
    <>
    <Sidebar />
    <div className="main">
        <div className="main__content">
            {/* <TopNav />
            <Outlet /> */}
        </div>
    </div>
    </>
    );
}

export default AdminPage;
