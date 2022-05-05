import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { firebase } from './firebase';
import FirebaseContext from './context/firebase';
import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseContext.Provider value={{ firebase }}>
                <App />
            </FirebaseContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
