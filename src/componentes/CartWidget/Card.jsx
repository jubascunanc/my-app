
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./imagenes/programador-frontend.jpeg" />
      <Card.Body>
        <Card.Title>Curso Online</Card.Title>
        <Card.Text>
          Aprende programación web en vivo con expertos en el desarrollo web front end y Back End
        </Card.Text>
        <Button onClick={Card}>Compra</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;