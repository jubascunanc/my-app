import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagen/curso-programación" />
      <Card.Body>
        <Card.Title>Curso Online</Card.Title>
        <Card.Text>
          Aprende programación web en vivo con expertos en el desarrollo web front end y Back End
        </Card.Text>
        <Button variant="primary">Compra</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;