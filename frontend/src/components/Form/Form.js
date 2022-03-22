import React, {useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";
import makeAnimated from 'react-select/animated'

const Form = (props) => {


    const navigate = useNavigate();
    const [isGreenActiveForm, setIsGreenActiveForm] = useState(true);
    const [input, setInput] = useState( {

        paidBy: {
            id: 2,
            name: "",
            email: ""
        },
        friends: [
            {
                id: 2,
                name: "",
                email: ""
            }
        ],
        event: {
            name: "",
            date: "",
            amount: '',
            numberFriends: '',
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
    const friendsOptions = [
        {value: "Candy", label: "Candy"},
        {value: "Sonia", label:"Sonia"},
        {value: "Faby", label:"Faby"},
        {value: "Valentina", label:"Valentina"},
        {value: "Sandra", label:"Sandra"},
        {value: "Jose Manuel", label:"Jose Manuel"},
        {value: "Eva Maria", label:"Eva Maria"} ]


    const animatedComponents = makeAnimated();



    return (
        <>
            <form className="container" onSubmit={enviarDatos}>
                <button type="submit" className="button-icon">volver</button>
                <h1>AÑADIR </h1>
                <div className="form">
                    <div>
                        <label htmlFor="date">FECHA</label>
                        <input value={input.event.date} onChange={handleInputChange} type="date" id="date"
                               name="date" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="name">NOMBRE DEL GASTO</label>
                        <input value={input.event.name} onChange={handleInputChange} type="text" className="input"
                               name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="price">IMPORTE</label>
                        <input value={input.event.amount} onChange={handleInputChange} type="text"
                               name="amount" className="input" id="price"/>
                    </div>
                    <div>
                        <label htmlFor="friends">NOMBRE</label>
                        <Select className="option" name="friends" isMulti options={friendsOptions} />

                    </div>
                    <div>
                        <p className="input">AMIGOS: ${input.numberFriends}</p>
                        <p className="input">TOTAL APACHAS= 5 €/cada uno</p>
                    </div>
                    <div>
                        <label htmlFor="">GUARDAR EN </label>
                        <button onClick=
                                    {irACobrar} className={isGreenActiveForm ? 'verde active' : 'verde'}>A COBRAR
                        </button>
                        <button onClick=
                                    {irAPagar} className={!isGreenActiveForm ? 'rojo active' : 'rojo'}>A PAGAR
                        </button>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Form

