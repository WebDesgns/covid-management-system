import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authentication/signin";
import Signup from "./pages/authentication/signup";
import UserPage from "./pages/normal-user/user-page";
import AdminPage from "./pages/admin/admin-page";


import HospitalPage from "./pages/hospital/hospitalPage";
import Beds from "./pages/hospital/beds"
import Appointment from "./pages/hospital/appointment";
import Message from "./pages/hospital/message";
import Email from "./pages/hospital/email"
import Dashboard from "./pages/hospital/dashboard"

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


                <Route path="hospitalAdmin" element={<HospitalPage/>}>
                    <Route index element={<Dashboard />}/>
                    <Route path="Beds" element={<Beds/>}/>
                    <Route path="Appointments" element={<Appointment/>}/>
                    <Route path="Messages"element={<Message/>}/> 
                    <Route path="Email" element={<Email/>}/>
                </Route>
            </Routes>

            <CssBaseline />
        </>
    );
};

export default App;
