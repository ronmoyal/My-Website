import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png"; 
import projImg4 from "../assets/img/project-img4.jpg"; 
import projImg5 from "../assets/img/project-img5.jpg"; 
import projImg6 from "../assets/img/project-img6.jpg"; 
import '../App.css'; 

export const Projects = () => {

  const projects = [
    {
      title: "VetPet",
      description: "Java Android app that connects veterinarians with pet owners, utilizing Firebase for data storage and real-time communication for professional advice",
      imgUrl: projImg1,
      link:"https://github.com/ronmoyal/VetPet-Project",

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
      title: "Warehouse",
      description: "web application for academic equipment management using MERN stack (MongoDB, Express.js, React.js, Node.js), featuring multi-user role functionality and mobile compatibility.",
      imgUrl: projImg4,
      link:"https://github.com/ronmoyal/Warehouse",
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

    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col xs={12}>
              <div >
                <h2>Projects</h2>
                <Tab.Container >
                  <Tab.Content >
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Projects;
