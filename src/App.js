import logo from './imagen/logo-emprende.png';
import Navbar from './componentes/NavBar/Navbar.js';
import Banner from './imagen/education-teacher.jpg';
import Login from './componentes/Login/Login.js';
import './componentes/NavBar/Navbar.css';
import './componentes/contenido/contenido.css';
import './componentes/contenido/Bienvenida.js';
import Bienvenida from './componentes/contenido/Bienvenida.js';
import Boton from './componentes/contenido/Boton.js';
import carrito from './componentes/CartWidget/asset/shopping-cart.png';

function App() {
  let bienvenida= '¡Bienvenidos a Mprende!';
  let comenzar= 'Inscribete Aquí';
  let login= 'Inicio de sesión';

  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar" style={Navbar} id="navbar" >
        <div className="Carrito">
      <img src={carrito}/>
    </div>
      <img src={logo} className="App-logo" alt="logo"/>
      <div className='Banner'>
    <div className='Usuario'>
    </div>
      <img src={Banner}/>
      </div>
        <h1>Mprende Eclass</h1>
           <h2>Cursos en linea para estudiantes</h2>

              <h3>Estudia desde tu casa 100% Online</h3>
          <p>
            Estas en la plataforma de cursos online más completa, aquí podrás aprender
            muchos nuevos conocimientos, y formar parte de una comunidad educativa.
          </p>
          <p>
            Estudia desde casa sin problemas y con mentores expertos en cursos 100% Online y certificados.
            Se parte de una comunidad de estudiantes virtuales.
          </p>
          <h2>Cursos disponibles:</h2>
          </div>
        <div className='contenido'>
          <h4>
             <Bienvenida prop={bienvenida}/>
          </h4>
             <button>
             <Boton prop={comenzar}/>
             </button>
        <div className='Login'>
         <button>
             <Login prop={login}/>
         </button>
        </div>
        <h5>
        Puedes ingresar con tu cuenta existente, o crear una aquí en el formulario:
        </h5>
        </div>
        <a>
    
        </a>
      </header>
    </div>
  );
}

export default App;
