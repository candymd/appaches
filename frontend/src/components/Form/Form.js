import React, {useEffect, useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";
import makeAnimated from 'react-select/animated'

const Form = ({onSubmit, friends}) => {


    const friendsSelectOptions = friends.map(friend => {
        return {
            value: friend.name,
            label: friend.name
        }
    });


    const navigate = useNavigate();
    const [isGreenActiveForm, setIsGreenActiveForm] = useState(true);
    const [input, setInput] = useState({

        paidBy: {
            id: 2,
            name: "",
            email: ""
        },
        friends: [],
        event: {
            name: "",
            date: "",
            amount: '',
            numberFriends: '',
            paidByMe: false
        }
    })

        const handleEventChange = (changeEvent) => {
        setInput({
            ...input,
            event: {...input.event, [changeEvent.target.name]: changeEvent.target.value}
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        onSubmit(input)
        navigate("/")

    }


    const animatedComponents = makeAnimated();


    return (
        <>
            <form className="container" onSubmit={enviarDatos}>
                <button type="submit" className="button-icon"><i className="fa-solid fa-arrow-left"></i></button>
                <h1>AÑADIR </h1>
                <div className="form">
                    <div>
                        <label htmlFor="date">FECHA</label>
                        <input value={input.event.date} onChange={handleEventChange} type="date" id="date"
                               name="date" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="name">NOMBRE DEL GASTO</label>
                        <input value={input.event.name} onChange={handleEventChange} type="text" className="input"
                               name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="price">IMPORTE</label>
                        <input value={input.event.amount} onChange={handleEventChange} type="text"
                               name="amount" className="input" id="price"/>
                    </div>
                    <div>
                        <label htmlFor="friends">NOMBRE DE AMIGXS</label>
                        <Select className="option" name="friends" isMulti options={friendsSelectOptions} />

                    </div>
                    <div>
                        <p className="input">CANTIDAD DE AMIGOS: ${input.numberFriends}</p>
                        <p className="input">TOTAL APACHAS= 5 €/cada uno</p>
                    </div>
                    <div>
                        <label htmlFor="">GUARDAR EN </label>
                        <div className="botonForm">
                        <button className="input" type="radio" id="contactChoice1" name="paidByMe" value={input.event.paidByMe = 'false'}>A COBRAR
                        </button>
                        <button className="input" type="radio" id="contactChoice1" name="paidByMe" value={input.event.paidByMe = 'true'}>A PAGAR
                        </button>

                        </div>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Form

