import React from "react";

import html from '../../shared/UIElements/html.png';
import java from '../../shared/UIElements/java.png';
import react from '../../shared/UIElements/react.png';
import css from '../../shared/UIElements/css.png';
import ndodejs from '../../shared/UIElements/nodejs.png';
import cpp from '../../shared/UIElements/cpp.png';
import mongodb from '../../shared/UIElements/mongo-db.png';
import csharp from '../../shared/UIElements/c-sharp.png';
import github from '../../shared/UIElements/github.png';

import './Skills.css';

const Skills = () => {
    const icons = [
        react, ndodejs, mongodb, java, cpp,
        csharp, html, css, github
    ];

    const radius = 100;
    const totalIcons = icons.length;
    const angleStep = (2 * Math.PI) / totalIcons;

    return (
        <div className="icons">
            <div className="circle">
                {icons.map((icon, index) => {
                    const angle = angleStep * index;
                    const x = radius * Math.cos(angle) + radius;
                    const y = radius * Math.sin(angle) + radius;

                    const style = {
                        top: `${y}px`,
                        left: `${x}px`,
                    };

                    return (
                        <img
                            src={icon}
                            alt={`Icon ${index}`}
                            className="menu-item"
                            style={style}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
