import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>

      <Row>
        <Col md={4}>
          <ProjectCard />
        </Col>
        <Col md={4}>
          <ProjectCard />
        </Col>
        <Col md={4}>
          <ProjectCard />
        </Col>
      </Row>
    </section>
  );
}

export default ProjectsPage;