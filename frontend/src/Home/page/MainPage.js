import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="about">
                <About />
            </div>
            <div className="skills">
                <Skills />
            </div>
        </div>
    );
};

export default MainPage;
