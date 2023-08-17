import React from "react";
import './ProjectItem.css';

const ProjectItem = props => {
    return (
        
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project-img">
                <img src={props.imgUrl} alt={props.title} />

                <div className="project-txt">
                    <h4>{props.title}</h4>
                    <span>{props.description}</span>
                </div>
            </div>
        </a>
    );
};

export default ProjectItem;
