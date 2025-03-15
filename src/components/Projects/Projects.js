import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bidding from "../../Assets/Projects/Bidding.png";
import GeoLocator from "../../Assets/Projects/GeoLocator.jpeg";
import FruTect from "../../Assets/Projects/Frutect.jpeg";
import Swipe from "../../Assets/Projects/Swipe.png";
import FitSRM from "../../Assets/Projects/FitSRM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FitSRM}
              isBlog={false}
              title="FitSRM"
              description="Developed a fitness app using React Native, FastAPI, and SQL for SRM faculty, featuring a step counter, calorie tracker, rewards system, and leaderboard. Implemented secure authentication, seamless data sync, and an intuitive UI/UX. Optimized API performance and hosted the backend on a cloud platform for scalability."
              ghLink="https://github.com/Akash-Balaji003/fitness_app_frontend"
              demoLink="https://drive.google.com/file/d/1Mw4dIE75TcFHCu7ZtnBA3j397kcilt6n/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FruTect}
              isBlog={false}
              title="FruTect"
              description="Developed a fruit spoilage detection system using IoT sensors and machine learning. Implemented a CNN for image classification, followed by a linear regression model that predicts fruit expiration based on image data and environmental factors such as temperature, humidity and CO2 levels."
              ghLink="https://github.com/Akash-Balaji003/Fruit_SpoilDetection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Swipe}
              isBlog={false}
              title="Swipe"
              description="Developed and deployed DigiVCard, a digital visiting card application using React Native and FastAPI, hosted on Microsoft Azure for scalability and reliability. Enabled users to create and manage multiple profiles under a single account, facilitating seamless digital networking. Implemented secure data storage, optimized API performance, and designed an intuitive UI/UX for an enhanced user experience. Leveraged Azure services to ensure high availability and efficient backend operations."
              ghLink="https://github.com/Akash-Balaji003/SwippAppFrontend"
              demoLink="https://drive.google.com/file/d/1CO6HUOB83Xh7mJJLjm9xpgnaGOKuF3UO/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeoLocator}
              isBlog={false}
              title="GeoLocator"
              description="This project is a geolocation-based application that allows users to create accounts, authenticate securely with token-based authentication, and set their location using the Google Maps API. The project is built with a Python backend, handling authentication, database interactions, and communication with the Google Maps API."
              ghLink="https://github.com/Akash-Balaji003/OptaGeolocation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bidding}
              isBlog={false}
              title="Bidding Cost Estimator"
              description="Finalist in Pragyan Hackathon, developed a bidding optimizer system to calculate the accurate construction cost range, preventing fraud and corruption in government auctions using Machine Learning, Python(FastAPI), and data analytics."
              ghLink="https://github.com/Akash-Balaji003/Tender_Optimiser_Backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
