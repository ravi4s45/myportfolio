import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Harshita_Patil_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Andriod Developer Intern [Samsung]"
              date="January 2022 - Present"
              content={[
                "Worked on the development of an Music Player App",
                "Redesigned and created features to enhance the user experience and optimized designs for smartphones.",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using Kotlin.",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Coordinator of rECursion Coding Club"
              content={[
                "Worked on team to building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics and Telecommunication [SGSITS, Indore] "
              date="2018 - Present"
              content={[`CGPA: 8.14 (Till 7th Sem)`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Article published on GFG that is based on detailed working of NodeJs behind the scenes",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rating in Leetcode 1613 `,
                "Finalist in HackOn2.0 Hackathon",
                "Published an article of Node.js on GeeksforGeeks",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
