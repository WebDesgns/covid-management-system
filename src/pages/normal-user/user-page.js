import React from "react";
import Header from "../../components/header/header";
import PageHeader from "../../components/page-header/page-header";
import PeopleIcon from "@mui/icons-material/People";
import UserForm from "./user-form";
import { Paper } from "@mui/material";

import './styles/user-page.css';

function UserPage() {
    return (
        <>
            <Header />
            <PageHeader title="Last Name" subTitle="Aparment No: 110    Member: 4" icon={<PeopleIcon />} />
            <Paper className="page-content">
                <UserForm />
            </Paper>
        </>
    );
}

export default UserPage;
