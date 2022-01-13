import React, { useState } from "react";
import Home from "./Tabs/Home";
import Register from "./Tabs/Register";
import Diagram from "./Tabs/Diagram";
import Contact from "./Tabs/Contact";
import About from "./Tabs/About";

function TabManager() {
    const [activeTab, setActiveTab] = useState(<Home/>);

    const handleHome = () => {
        setActiveTab(<Home/>)
    }
    const handleRegister = () => {
        setActiveTab(<Register/>)
    }
    const handleDiagram = () => {
        setActiveTab(<Diagram/>)
    }
    const handleContact = () => {
        setActiveTab(<Contact/>)
    }
    const handleAbout = () => {
        setActiveTab(<About/>)
    }

    return (
        <div>
            <header>
                <ul>
                    <li><a href="home" onClick={handleHome}>Home</a></li>
                    <li><a href="#register" onClick={handleRegister}>Login/Register</a></li>
                    <li><a href="#diagram" onClick={handleDiagram}>Events</a></li> {/*CHANGE THIS LATER!!*/}
                    <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
                    <li><a href="#about" onClick={handleAbout}>About Us</a></li>
                </ul>
            </header>
            <body>
                {activeTab}
            </body>
        </div>
    )
}

export default TabManager
