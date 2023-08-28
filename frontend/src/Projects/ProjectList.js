import React from "react";

import ProjectItem from "./ProjectItem";
import './ProjectList.css';

import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png"; 
import projImg4 from "../assets/img/project-img4.jpg"; 
import projImg5 from "../assets/img/project-img5.jpg"; 
import projImg6 from "../assets/img/project-img6.jpg"; 
import projImg7 from "../assets/img/project-img7.jpg"; 

import { Container } from "react-bootstrap";

const ProjectList = props => {

    const projects = [
        {
          title: "VetPet",
          description: "Java Android app that connects veterinarians with pet owners, utilizing Firebase for data storage and real-time communication for professional advice",
          imgUrl: projImg1,
          link:"https://github.com/ronmoyal/VetPet-Project",
    
        },
        {
          title: "Warehouse",
          description: "web application for academic equipment management using MERN stack (MongoDB, Express.js, React.js, Node.js), featuring multi-user role functionality and mobile compatibility.",
          imgUrl: projImg4,
          link:"https://github.com/ronmoyal/Warehouse",
        },
        {
          title: "WeTravel",
          description: "Web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform focuses on sharing and discovering public places, allowing users to recommend and explore various locations while also providing location details and reviews.",
          imgUrl: projImg7,
          link:"https://github.com/ronmoyal/WeTravel",
        },
        {
          title: "BookFlight",
          description: "ASP.NET MVC web application for travel agency management, enabling admins to manage flights and users to book seats. Technologies used include C#, HTML, CSS, and Microsoft SQL Server for data storage.",
          imgUrl: projImg2,
          link:"https://github.com/ronmoyal/BookFlight-Project-MVC-",
        },
        {
          title: "SmartBrain",
          description: "Full Stack Face Detecting App with API, React, NodeJs, ExpressJs, MongoDB &Authentication system. It can detect faces through image URLs",
          imgUrl: projImg3,
          link:"https://github.com/ronmoyal/SmartBrain",
        },
        {
          title: "BloodTest",
          description: "C# system for users to upload blood test results, either manually or via Excel. Instant feedback is provided based on predefined data from Ben-Gurion University's medical department.",
          imgUrl: projImg5,
          link:"https://github.com/ronmoyal/BloodTest-Projct",
        },
        {
          title: "Aquarium-gui",
          description: "The Java GUI app manages a virtual fish aquarium where users can quickly feed the fish and make changes like adjusting their movement, color, and adding/removing them. Threads are utilized for smooth execution.",
          imgUrl: projImg6,
          link:"https://github.com/ronmoyal/Aquarium-Gui",
        }
    ];

    return (
        <Container className="project">
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.map(project => (
                <ProjectItem 
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    link={project.link}
                />
            ))}
            </div>
        </Container>
        );    
   };

    export default ProjectList;
