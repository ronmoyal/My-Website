import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import headerImg from '../assets/img/resume.png';
import '../App.css';

export const Home = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="banner" id="home">
      <Container className="home-container">
        <Row >
          <Col xs={12} md={6} xl={7}>
              <div>
                <h1 className="my-name">Hi! I'm <span className="highlight">Ron Moyal</span></h1>
                <p>Welcome! I'm a Fourth-year Software Engineering student at Sami Shamoon College of Engineering with a strong foundation in programming and problem-solving. I've had the privilege of working on various projects, honing my skills in languages and technologies such as Java, MERN Stack, C#, and HTML.</p>
                <p>These experiences have not only strengthened my technical skills but also developed my teamwork capabilities and adaptability to ever-evolving challenges.</p>
                <p>This website showcases my projects, skills, and experiences, providing an insight into my journey in the software engineering realm. Thank you for your time and for visiting my site!</p>
                <div className="my-projects">
                  <button className="btn-projects" onClick={goToProjects}>to My Projects.. <ArrowRightCircle size={25} /></button>
                </div>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <div>
                <div className="image-overlay">
                  <h2 className="image-title">Scan Me for My Resume</h2>
                </div>
                <img src={headerImg} alt="Header Img" className="my-image" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
