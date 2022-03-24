import React, {useEffect, useState} from 'react';
import './Form.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";
import makeAnimated from 'react-select/animated'
import * as icon from '../../assets/category-icons/category-icons';

const Form = ({onSubmit, friends}) => {

    const [booleanPaidByMe, setBoolanPaidByMe] = useState(true)

    const friendsSelectOptions = friends.map(friend => {
        return {
            value: friend.name,
            label: friend.name
        }
    });

    const animatedComponents = makeAnimated();


    const categoryOptions = [
        {value: "moda", label: "moda"} ,
        {value: "transporte", label:"transporte"},
        {value: "bar", label:"bar"},
        {value: "comida", label:"comida"},
        {value: "compras", label:"compras"},
        {value: "entretenimiento", label:"entretenimiento"},
        {value: "hogar", label:"hogar"} 
    ]


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
            category: '',
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



    return (
        <>
            <form className="container" onSubmit={enviarDatos}>
                <button className="button-icon"><i className="fa-solid fa-arrow-left"></i></button>
                <div className="tittle">
                    <h1>AÑADIR </h1>
                </div>
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
                        <label htmlFor="category">CATEGORIA</label>
                        <Select className="select" name="category"  options= {categoryOptions}
                        />
                    </div>
                    <div>
                        <label htmlFor="friends" >NOMBRE DE AMIGXS</label>
                    </div>
                        <div>
                            <Select className="select" name="friends" isMulti options={friendsSelectOptions}/>
                        </div>
                    <div>
                        <p className="input">CANTIDAD DE AMIGOS: 7{input.numberFriends}</p>
                        <p className="input">TOTAL APACHAS= 5 €/cada uno</p>
                    </div>
                    <div>
                        <label htmlFor="paidByMe">PAGADO POR </label>
                        <div className="botonForm">
                        <button className="input" type="submit"
                                onChange={handleEventChange}
                                value={input.event.paidByMe = booleanPaidByMe}
                                name="paidByMe"
                                checked={booleanPaidByMe}
                                onClick={() => setBoolanPaidByMe(true)}
                        >POR MI</button>
                        <button className="input" type="submit"
                                onChange={handleEventChange}
                                value={input.event.paidByMe = booleanPaidByMe}
                                name="paidByMe"
                                checked={!booleanPaidByMe}
                                onClick={() => setBoolanPaidByMe(false)}>POR OTRO
                        </button>

                        </div>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Form

