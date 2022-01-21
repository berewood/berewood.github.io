import React from "react";
import Menu from "./menu";
import Router from "./router";
import usePin from "./usePin";
import validatePin from "./auth";
import Login from "./login";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./auth";

import "./App.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-toastify/dist/ReactToastify.css";


function App() {
    const [pin, setPin] = usePin();
    const isAuthed = validatePin(pin);

    return (
        <div className="main-app">
            <AuthContext.Provider value={[pin, setPin]}>
                {isAuthed ? (
                    <React.Fragment>
                        <Menu />
                        <div className="active-route">
                            <Router />
                        </div>
                    </React.Fragment>
                ) : (
                    <Login />
                )}
            </AuthContext.Provider>
            <ToastContainer />
        </div>
    );
}

export default App;
