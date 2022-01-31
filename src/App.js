import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authentication/signin";
import Signup from "./pages/authentication/signup";
import UserPage from "./pages/normal-user/user-page";
import AdminPage from "./pages/admin/admin-page";

import './App.scss';
import { CssBaseline } from "@mui/material";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminPage />}>
                    <Route path="society" element={<UserPage />} />
                    <Route path="member" element={<UserPage />} />
                </Route>
                {/* <Route path="/" element={<UserPage />}/> */}
                <Route path="/signin" element={<Signin />}/>
                <Route path="/signup" element={<Signup />}/>
            </Routes>

            <CssBaseline />
        </>
    );
};

export default App;
