import React from "react"
import {useState} from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Swal from "sweetalert2";

const ItemCount  = ({onAdd, stock, initial=1}) => {


    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
        else {
            Swal.fire({
                title: "No hay mas stock",
                icon: "success",
                buttons: true,
        
            })
    }
    };
    
    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };



    return (
        
        <div>
            
                <div className="contador">
                    <button id="addButton" className="elements" onClick={decrement}> - </button> 
                    <h2 className="elements" id="number">{quantity}</h2>
                    <button id="subsButton"  className="elements" onClick={increment}> + </button>
                </div>

                    <div className="botonFinal">
                    <button id ="cartButton" className="ui bottom attached button" onClick={() =>
                    
                    {onAdd (quantity)
                        Swal.fire({
                            title: "Producto Agregado",
                            icon: "success",
                            buttons: true,
                    
                        })
                        }}>
                        <FontAwesomeIcon icon ={faCartShopping} />
                        Agregar al Carrito
                    </button>  
                </div>
                

        </div>
        
        )
} 

export default ItemCount
