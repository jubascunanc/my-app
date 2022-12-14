import logo from "./imagen/logo-emprende.png";
import Navbar from "./componentes/NavBar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./imagen/clases-online.jpg";
import Login from "./componentes/Login/Login.jsx";
import { Link } from "react-router-dom";
import './componentes/Cart/Cart';
import './componentes/CheckOut/CheckOut';
import './componentes/Item/Item';
import './componentes/ItemCart/ItemCart';
import './componentes/ItemCount/ItemCount';
import './componentes/ItemDetail/ItemDetail';
import './componentes/ItemList/ItemList';
import './componentes/ItemListContainer/ItemListContainer';
import "./componentes/NavBar/Navbar.css";
import "./componentes/contenido/contenido.css";
import "./componentes/contenido/Bienvenida.jsx";
import Bienvenida from "./componentes/contenido/Bienvenida.jsx";
import Boton from "./componentes/contenido/Boton.jsx";
import carrito from "./componentes/asset/shopping-cart.png";
import user from "./componentes/asset/user.png";
import './componentes/CartWidget/CartWidget'
import Card from "./componentes/CartWidget/Card.jsx";
import Menu from "./componentes/NavBar/menu.jsx";


function App() {
  const handleChangeInput = (event) => {
    console.log(event.target.value);
  };

  let bienvenida = "¡Bienvenidos a Mprende!";
  let comenzar = "Inscribete Aquí";
  let login = "Inicio de sesión";
  let cards = "Cursos";
  let menu = "Menu";


  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar" style={Navbar} id="navbar">
          <div>
            <input onChange={handleChangeInput} type="text" />
            <input type="submit" value="Buscar" id="enviar"></input>
          </div>
          <nav>
            <Menu prop={menu} />
          </nav>
          <div className="Carrito">
            <img src={carrito} />
          </div>
          <div className="Usuario">
            <img src={user} className="user-img" alt="user" />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Banner">
            <h4>
              <Bienvenida prop={bienvenida} />
            </h4>
            <img src={Banner} />
            <div className="contenido">
              <button>
                <Boton prop={comenzar} />
              </button>
              <div className="Login">
                <button>
                  <Login prop={login} />
                </button>
              </div>
            </div>
          </div>
          <h1>Mprende Eclass</h1>
          <h2>Cursos en linea para estudiantes</h2>

          <h3>Estudia desde tu casa 100% Online</h3>
          <p>
            Estas en la plataforma de cursos online más completa, aquí podrás
            aprender muchos nuevos conocimientos, y formar parte de una
            comunidad educativa.
          </p>
          <p>
            Estudia desde casa sin problemas y con mentores expertos en cursos
            100% Online y certificados. Se parte de una comunidad de estudiantes
            virtuales.
          </p>

          <h2>Cursos disponibles:</h2>
          <div className="Cards-items">
            <h3>Aprende aquí</h3>
            <div className="cards-details">
              <Card prop={cards} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
