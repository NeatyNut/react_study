import { Card, Button } from 'react-bootstrap';

function ProjectCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Todo App</Card.Title>
        <Card.Text>
          React state를 연습하기 위한 Todo 프로젝트입니다.
        </Card.Text>
        <Button variant="outline-primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;