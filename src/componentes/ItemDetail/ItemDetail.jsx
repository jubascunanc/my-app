import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../CartContext/CartContext'
import {  useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, img, name, category, price, description, stock }) => {

    const [goToCart, setGoToCart] = useState (false)
    const {addProduct, getProductQuantity} = useCart ( );



    const onAdd = (quantity) => {
        const productToAdd = {
            id,
            img,
            name,
            category,
            price,
            description
        }
        setGoToCart(true);
        addProduct (productToAdd, quantity);
    }

    const quantityAdded = getProductQuantity (id)


    return (
        <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price">Precio ${price}</p>
            <p className= "description ">{description}</p>
            { stock!==0 ? <ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded} /> : <h2>Sin Stock</h2> }
        { !goToCart ? true :
        <div className="buttons-detail">
        <Link to='/cart' className="botonItd">Ir al carrito</Link>
        <Link to='/' className="botonItd">Seguir comprando</Link> 
        </div> }
        { goToCart ? true
        : <Link to='/' className="botonItd">Volver al listado</Link> }
        </div>
    )
}

export default ItemDetail