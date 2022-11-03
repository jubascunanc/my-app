import App from "../../../App";

function ItemCount () {

const getItem= () =>{
    ItemList.map ({getItem})
    console.log("item guardado");
}


const ItemList = ({id, img, nombre, precio, cantidad}) => {
    const {remover} = useCartContext ();
;

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

}
