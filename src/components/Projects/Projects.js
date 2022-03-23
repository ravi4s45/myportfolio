import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CoHelp"
              description="CoHelp acts as a bridge between the needy people and the
              people who are willing to help including NGO’s.
              Tech Stack Used: Node.js, Express.js,
              MongoDB,Geo-Coding API, CSS, EJS, JavaScript."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FooBae"
              description="FooBae helps people to search cafes and restaurants
              quickly according to their preferences.
              Tech Stack Used: Node.js, Express, Apache Solr, CSS, EJS,
              JavaScript."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense Tracker"
              description="A MERN application build fortracking all the expenses.
              • It displays the current balance amount and keeps the
              history of all the previous transactions which we have
              made.
              • Tech Stack Used: React,Node.js, MongoDB, Express.js."
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="Web development project that shows weatherrelated
              details of around 2 lac cities worldwide.
              Tech Stack Used: React.js, Weather API."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
