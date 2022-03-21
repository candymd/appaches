import React, {useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";

const Form = (props) => {


    const navigate = useNavigate();
    const [isGreenActiveForm, setIsGreenActiveForm] = useState(true);
    const [input, setInput] = useState( {

        paidBy: {
            name: "",
            email: ""
    },
        friends: [
        {
            name: "",
            email: ""
        }
    ],
        event: {
        name: "",
            date: "",
            amount: 0,
            numberFriends: 0,
            paidByMe: false
    }
    })

    function setVistaACobrar(b) {
        return;
    }

    const irACobrar = () => {
        setIsGreenActiveForm(true);
        setVistaACobrar(true)
    }

    const irAPagar = () => {
        setIsGreenActiveForm(false);
        setVistaACobrar(false)
    }

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        props.onSubmit(input)
        navigate("/")

    }

    return (
        <>
            <form className="container" onSubmit={enviarDatos}>
                <button type="submit" className="button-icon" >{input ? 'Guardar cambios' : <i className="fa-solid fa-circle-check"></i>}
                </button>
                <h1>AÑADIR </h1>
                <div className="form">
                    <div>
                        <label htmlFor="date">FECHA</label>
                        <input value={input.event.date} onChange={handleInputChange} type="date" id="date"
                               name="date" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="name">NOMBRE DEL GASTO</label>
                        <input value={input.event.name} onChange={handleInputChange} type="text" className="input"  name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="price">IMPORTE</label>
                        <input value={input.event.amount} onChange={handleInputChange} type="text"
                               name="amount" className="input" id="price"/>
                    </div>

                    <div>
                        <label htmlFor="">PAGADO POR</label>
                        <div className= "botonForm">
                        <button onClick=
                                    {irACobrar} className={isGreenActiveForm ? 'verde active' : 'verde'}>POR MI
                        </button>
                        <button onClick=
                                    {irAPagar} className={!isGreenActiveForm ? 'rojo active' : 'rojo'}>POR OTRO
                        </button>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="friends">NOMBRE</label>
                        <input value={input.friends.name} onChange={handleInputChange} type="text"
                               name="name" className="input" id="friends"/>
                    </div>
                    <div>
                        <label htmlFor="">LISTA</label>
                        <textarea className="text"></textarea>
                    </div>
                    <div>
                        <p className="input">AMIGOS: ${input.numberFriends}</p>
                        <p className="input">TOTAL APACHAS= 5 €/cada uno</p>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Form

