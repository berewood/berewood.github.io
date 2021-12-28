import React from "react";
import './App.css';

import Menu from "./menu";
import Router from "./router";
import usePin from "./usePin";
import validatePin from "./auth";
import Login from "./login";
import { ToastContainer } from 'react-toastify';
import { AuthContext } from "./auth";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [pin, setPin] = usePin();
  const isAuthed = validatePin(pin);

  return (
    <div className="App"
        style={{
            display: "flex", flexDirection: "column", minHeight: "100vh",
            background: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
    >
        <AuthContext.Provider value={[pin, setPin]}>
            {isAuthed ? (
                <React.Fragment>
                    <Menu />
                    <div className="active-route"
                        style={{
                            display: "flex",
                            flexGrow: 1,
                            alignItems: "center",
                        }}
                    >
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
