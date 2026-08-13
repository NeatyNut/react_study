import { Card, Button } from 'react-bootstrap';

function ProfileCard() {
  return (
    <Card>
      <Card.Body>
        <h1>Mingi Kim</h1>
        <p>AI Developer</p>
        <p>React, TypeScript, Bootstrap</p>

        <Button variant="primary">About Me</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;