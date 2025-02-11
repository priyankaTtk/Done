import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import NavFooter from "./NavFooter";


function App() {
    return (
        <div className="App">
            <Header text="Just Another Movie Website"/>
            <NavFooter />
            <Outlet />
        </div>
    );
}

export default App;