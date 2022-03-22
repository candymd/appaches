import React, {useEffect, useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";
import makeAnimated from 'react-select/animated'
import {Radio} from "@mui/material";

const Form = ({onSubmit, friends}) => {

    const [booleanPaidByMe, setBoolanPaidByMe] = useState(true)

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
                <button type="submit" className="button-icon">volver</button>
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
                        <label htmlFor="friends">NOMBRE</label>
                        <Select className="option" name="friends" isMulti options={friendsSelectOptions} />

                    </div>
                    <div>
                        <p className="input">AMIGOS: ${input.numberFriends}</p>
                        <p className="input">TOTAL APACHAS= 5 €/cada uno</p>
                    </div>
                    <div>
                        <label htmlFor="paidByMe">A Cobrar </label>
                        <Radio
                            onChange={handleEventChange}
                            value={input.event.paidByMe = booleanPaidByMe}
                            name="paidByMe"
                            checked={booleanPaidByMe}
                            onClick={() => setBoolanPaidByMe(true)}
                        />
                        <label htmlFor="paidByMe">A Pagar </label>
                        <Radio
                            onChange={handleEventChange}
                            value={input.event.paidByMe = booleanPaidByMe}
                            name="paidByMe"
                            checked={!booleanPaidByMe}
                            onClick={() => setBoolanPaidByMe(false)}
                        />
                    </div>
                </div>

            </form>

        </>
    )
}

export default Form

