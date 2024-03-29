import React from "react";
import Button from '../../shared/Elements/Button';

import './About.css';

const About = () => {
    return (
        <div className="banner">
            <h1 className="my-name">Hi! I'm <span className="highlight">Ron Moyal</span></h1>
            <h2 className="web-development-title">SOFTWARE ENGINEER</h2>
                
            <div className="aboutme">
                    <p>Welcome! I'm a Fourth-year Software Engineering student at Sami Shamoon College of Engineering with a strong foundation in programming and problem-solving. I've had the privilege of working on various projects, honing my skills in languages and technologies such as Java, MERN Stack, C#, and React Native.</p>
                    <p>Additionally, I've furthered my full-stack development capabilities by completing a comprehensive MERN Stack course on Udemy. This experience has not only strengthened my technical skills but also expanded my proficiency in developing modern web applications.</p>
                    <p>These experiences have developed my teamwork capabilities and adaptability to ever-evolving challenges, enriching my journey in the software engineering realm.</p>
                    <p>This website showcases my projects, skills, and experiences, providing an insight into my journey in the software engineering realm. Thank you for your time and for visiting my site!</p>
                </div>

                <div className="place-item__actions">
                <Button to={`/projects`}>to My Projects →</Button>
                <Button to={`/contact`}>Contact Me! </Button>

                </div>
        </div>
    );
};

export default About;
