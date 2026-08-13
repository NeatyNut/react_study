import { Badge } from 'react-bootstrap';

function SkillBadges() {
  return (
    <div className="d-flex gap-2 flex-wrap">
      <Badge bg="primary">React</Badge>
      <Badge bg="info">TypeScript</Badge>
      <Badge bg="secondary">Bootstrap</Badge>
      <Badge bg="dark">Git</Badge>
    </div>
  );
}

export default SkillBadges;