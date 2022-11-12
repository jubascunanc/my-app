import { Link } from 'react-router-dom';
import {useCart} from '../../CartContext/CartContext'
import ItemCart from "../ItemCart/ItemCart";
import '../Cart/Cart.css'
import Swal from "sweetalert2";


const Cart = () => {
    const {cart,total,clearCart} = useCart ();
    

    if (cart.length === 0)
    return (
        <div>
        <p className='vacio'> No hay elementos en el carrito </p>
        <Link className='comienzo' to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            <div className='productsContainer'>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            </div>
            <div className='totalPagarContainer'>
                <div className='totalAPagar'>
                    <p className='total'>Total a Pagar: ${total}</p>
                </div>
            </div>    
            <button className="buttonTotal" onClick={() =>{ clearCart() 
            Swal.fire({
                title: "Carrito Vacio",
                icon: "success",
                buttons: true,
                dangerMode: true,
            
            })
            }}
            >Limpiar carrito</button>
            <button className='buttonLimpiar'><Link className='innerLink'  to='/checkout' >Checkout</Link></button>
        
        </div>

    )
}

export default Cart 