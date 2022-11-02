import { Card } from "react-bootstrap";

const item=[
{
 nombre: 'Marketing digital',
 id: '1202',
 img:'./imagenes/marketing-digital.jpeg',
 precio: '4000',
 cantidad: '0',
},
{
 nombre: 'Finanzas Personales',
 id: '1310',
 img:'./imagenes/finanzas-personales.jpg',
 precio: '5000',
 cantidad: '1',
},
{
nombre: 'Clases ingles',
id: '0302',
img: './imagenes/clases-ingles.jpg',
precio: '3000',
cantidad: '100',
},
];



const ItemList = ({id, img, nombre, precio, cantidad}) => {
    const {remover} = useCartContext ();

return (    
    <div className='contenedorCarro'>
        <img src={img} alt={nombre}/>
        <h1 className="name">{nombre}</h1>
        <p className="price">Precio: ${precio}</p>
        <p className="Total">Total: ${cantidad * precio}</p>
        <button onClick={()=>remover(id)}> Eliminar</button>
    </div>
)
}

export default Card;