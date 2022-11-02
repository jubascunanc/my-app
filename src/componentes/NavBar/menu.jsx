import Nav from 'react-bootstrap/Nav';
import { BrowserRouter } from 'react-router-dom';

function BasicExample() {
  return (
    <BrowserRouter>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/inicio">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Cursos">Cursos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="./Perfil">Perfil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          Cerrar sesion
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </BrowserRouter>
  );
}

export default BasicExample;