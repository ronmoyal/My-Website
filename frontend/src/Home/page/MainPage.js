import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Details from "../../Details/Details";
import './MainPage.css';

const MainPage = () => {
    return (
        <React.Fragment>
        <div className="main-page">
            <div className="about">
                <About />
            </div>
            <div className="skills">
                <Skills />
            </div>
        </div>
        <div className="details-main">
            <Details />
        </div>

        </React.Fragment>        
    );
};

export default MainPage;
