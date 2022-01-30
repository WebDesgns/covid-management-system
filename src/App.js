import React from "react";
import { Route, Routes } from "react-router-dom";


import Signin from "./pages/authentication/signin";
import Signup from "./pages/authentication/signup";




function App() {
    return (
        
        <Routes>
            
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
        </Routes>
       
        
    );
};

export default App;
