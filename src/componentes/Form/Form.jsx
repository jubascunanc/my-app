import Swal from "sweetalert2";
import '../Form/Form.css'
import { useState, createContext } from "react";

export const FormData = createContext({
    name:"",
    surname:"",
    address:"",
    phone:"",
    email:""
})


const ClientForm = ({completoDatos}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");




const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            })
        }
        else if (email != checkEmail && email && checkEmail) {
            Swal.fire({
            title: "Los emails no coinciden",
            html: "Por favor, intente nuevamente",
            buttons: true,
            dangerMode: true,
        })
    }

    else {
        Swal.fire({
            title: "Datos Guardados",
            icon: "success",
            buttons: true,
        })
    completoDatos(
        name,
        surname,
        address,
        phone,
        email
    )
    }
    }



    return (
        <form className="formulario">

            <div className="form" >
                <input  value={name} onChange={(e) => setName(e.target.value)} type="text" pattern="[a-zA-Z ]{1,35}"   className="form-input"   placeholder="Nombre" required />
                <input  value={surname} onChange={(e) => setSurname(e.target.value)} type="text"   className="form-input"   placeholder="Apellido" required/>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input"   placeholder="Dirección"required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input"   placeholder="Email" required/>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  className="form-input"   placeholder="Email" required/>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input"   placeholder="Teléfono"required />


            <div >
            <button  className="botonSubmit" onClick = {submit}> Submit Data</button>
            </div>
            
            </div>
        
            </form>
)
}

            
export default ClientForm