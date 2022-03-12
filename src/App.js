import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authentication/signin";
import Signup from "./pages/authentication/signup";
import UserPage from "./pages/normal-user/user-page";
import AdminPage from "./pages/admin/admin-page";


import SecretaryPage from "./pages/secretary/secretary-page";
import SecretaryDashboard from "./pages/secretary/secretary-dashboard";
import HospitalPage from "./pages/hospital/hospitalPage";
import Appointment from "./pages/hospital/appointment";
import Message from "./pages/hospital/message";
import Email from "./pages/hospital/email"
import HospitalSociety from "./pages/hospital/soicety";
// import Dashboard from "./pages/hospital/dashboard"
import Beds from "./pages/hospital/appointment";
import Blank from "./pages/admin/blank";
import Dashboard from "./pages/dashboard";

import './App.scss';
import { CssBaseline } from "@mui/material";




function App() {

    return (
        <>
            <Routes>
                <Route path="/signin" element={<Signin />}/>
                <Route path="/signup" element={<Signup />}/>

                <Route path="/" element={<UserPage />}/>

                <Route path="/admin" element={<AdminPage />}>
                    <Route index element={<Dashboard />} />
                    <Route path="society" element={<HospitalSociety />} />
                    <Route path="user" element={<Blank />} />
                </Route>

                <Route path="/secretary" element={<SecretaryPage />}>
                    <Route index element={<Dashboard />} />
                    <Route path="society" element={<Blank />} />
                    <Route path="member" element={<Blank />} />
                </Route>

                <Route path="/hospital" element={<HospitalPage/>}>
                    <Route index element={<Dashboard />}/>
                    <Route path='society' element={<HospitalSociety />} />
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
