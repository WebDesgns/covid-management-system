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
import HospitalUser from "./pages/hospital/user";
import Beds from "./pages/hospital/appointment";
import Dashboard from "./pages/dashboard";
import Blank from "./pages/blank";
import RequireAuth, { IsUserRedirect } from './helpers/routes';
import Home from "./pages/home";
import { AuthProvider } from './context/auth';
import AdminUser from "./pages/admin/users";
import SecretaryUser from "./pages/secretary/users";
import './App.scss';




function App() {

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Blank />}>

                    {/* Public Routes  */}
                    <Route path='/' element={<Home />} />
                    <Route element={<IsUserRedirect />}>
                        <Route path="/signin" element={<Signin />} />
                    </Route>

                    <Route element={<IsUserRedirect />}>
                        <Route path="/signup" element={<Signup />} />
                    </Route>

                    {/* <Route path="signup" element={<Signup />} /> */}


                    {/* Protected Route  */}
                    <Route element={<RequireAuth role='user' />}>
                        <Route path="user" element={<UserPage />} />
                    </Route>

                    <Route element={<RequireAuth role='admin' />}>
                        <Route path="admin" element={<AdminPage />}>
                            <Route index element={<Dashboard />} />
                            <Route path="user" element={<AdminUser />} />
                        </Route>
                    </Route>

                    <Route element={<RequireAuth role='society' />}>
                        <Route path="society" element={<SecretaryPage />}>
                            <Route index element={<Dashboard />} />
                            <Route path="member" element={<SecretaryUser />} />
                        </Route>
                    </Route>

                    <Route element={<RequireAuth role='hospital' />}>
                        <Route path="hospital" element={<HospitalPage />}>
                            <Route index element={<Dashboard />} />
                            <Route path='user' element={<HospitalUser />} />
                            <Route path="Beds" element={<Beds />} />
                            <Route path="Appointments" element={<Appointment />} />
                            <Route path="Messages" element={<Message />} />
                            <Route path="Email" element={<Email />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
