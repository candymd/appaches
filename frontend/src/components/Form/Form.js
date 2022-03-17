import React, {useState} from 'react';
import './Form.css'
import {Link, useNavigate} from "react-router-dom";

function Form(props) {
    const navigate = useNavigate();


    const [registryData, setRegistryData] = useState(props.registryData || {
        date: '',
        name: '',
        amount: '',
        friends: '',
        numberFriends: '',
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setRegistryData({
            ...registryData,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.onSubmit(registryData)
        props.onClose()
        navigate("/") /* que me envie datos a cobrar o a pagar ( que no siempre me lleve a la home*/

    }

    return (
    <>
        <div className="container">
            <button type="submit" className="button-icon" data-toggle="" data-target=""><Link to="/" >{props.registryData ? 'Guardar cambios' : <i className="fa-solid fa-circle-check"></i>}</Link></button>
            <h1>AÑADIR </h1>
            <div className="form" onSubmit={enviarDatos} action="">
                <div>
                    <label htmlFor="">FECHA</label>
                    <input value={registryData.date} onChange={handleInputChange}type="date"  name="registry_date" className="input"/>
                </div>
                <div>
                    <label htmlFor="">NOMBRE DEL GASTO</label>
                    <input value={registryData.name} onChange={handleInputChange} type="text" className="input"/>
                </div>
                <div>
                    <label htmlFor="price">IMPORTE</label>
                    <input value={registryData.amount} onChange={handleInputChange} type="text" name="import" className="input"/>
                </div>

                <div>
                    <label htmlFor="">PAGADO POR</label>
                    <button  className="button-select">Por ti</button>
                    <button  className="button-select">Por otro</button>
                </div>
                <div>
                    <label htmlFor="">NOMBRE</label>
                    <input value={registryData.friends} onChange={handleInputChange}type="text" required name="user_name" className="input"/>
                </div>
                <div>
                    <label htmlFor="">LISTA</label>
                    <textarea  className="text"></textarea>
                </div>
                <div>
                    <p className="input">AMIGOS: ${registryData.numberFriends}</p>
                    <p className="input">TOTAL APACHAS= 5 €/cada participante</p>
                </div>
            </div>
        </div>
    </>
)
}
export default Form


