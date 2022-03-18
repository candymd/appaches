import React, {useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";

const Form = (props) => {


    const navigate = useNavigate();
    const [isGreenActive, setIsGreenActive] = useState(true);
    const [input, setInput] = useState( {

        registry: [
            {
                date: '', name: '', amount: '', numberFriends: '', paidByMe: true}
        ],
         friends: [
            {
                name: '',
                email: ''
            }
        ]
    })

    function setVistaACobrar(b) {
        return;
    }

    const irACobrar = () => {
        setIsGreenActive(true);
        setVistaACobrar(true)
    }

    const irAPagar = () => {
        setIsGreenActive(false);
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
                        <input value={input.date} onChange={handleInputChange} type="date" id="date"
                               name="date" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="name">NOMBRE DEL GASTO</label>
                        <input value={input.name} onChange={handleInputChange} type="text" className="input"  name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="price">IMPORTE</label>
                        <input value={input.amount} onChange={handleInputChange} type="text"
                               name="amount" className="input" id="price"/>
                    </div>

                    <div>
                        <label htmlFor="">PAGADO POR</label>
                        <button onClick=
                                    {irACobrar} className={isGreenActive ? 'green active' : 'green'}>POR MI
                        </button>
                        <button onClick=
                                    {irAPagar} className={!isGreenActive ? 'red active' : 'red'}>POR OTRO
                        </button>
                    </div>
                    <div>
                        <label htmlFor="friends">NOMBRE</label>
                        <input value={input.friends} onChange={handleInputChange} type="text" required
                               name="friends" className="input" id="friends"/>
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

