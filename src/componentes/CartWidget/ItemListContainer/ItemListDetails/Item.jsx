export { Card } from "react-bootstrap";


const ItemCart = ({id, img, name, price, quantity}) => {
    const {removeProduct} = useCartContext ();

return (    
    <div className='containerCart'>
        <img src={img} alt={name}/>
        <h1 className="name">{name}</h1>
        <p className="price">Precio U: ${price}</p>
        <p className="SubTotal">Subtotal: ${quantity * price}</p>
        <button onClick={()=>removeProduct(id)}> Eliminar</button>

    </div>
)
}

export default Cards;