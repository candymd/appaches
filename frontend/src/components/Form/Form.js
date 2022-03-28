import React, {useState} from 'react';
import './Form.css'
import {Link, useNavigate} from "react-router-dom";
import Select from "react-select";
import CustomSelector from "../CustomSelector/selector";



const Form = ({onSubmit, friends}) => {

    const [booleanPaidByMe, setBoolanPaidByMe] = useState(true)

    const friendsSelectOptions = friends.map(friend => {
        return {
            id: friend.id,
            name: friend.name
        }
    });


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
    const [input, setInput] = useState({

        paidBy: {
            id: 2,
            name: "",
            email: ""
        },
        friends: [{
            id: '',
            name: ''
        }],
        event: {
            name: "",
            date: "",
            amount: '',
            category: 'moda',
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

    const updateFriends = (friends) => {
        setInput({...input, friends})
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        onSubmit(input)
        navigate("/home")

    }

    const amountPerParticipant = (input.event.amount / (input.friends.length + 1)).toFixed(2)

    return (
        <>
            <form className="container" onSubmit={enviarDatos}>
                <Link to="/home">
                    <button className="button-icon"><i className="fa-solid fa-arrow-left"/></button>
                </Link>

                <div className="tittle">
                    <h1>AÑADIR</h1>
                </div>
                <div>
                    <label htmlFor="paidByMe"/>
                    <div className="botonForm">
                        <Link to="/form">
                            <button>POR MI</button>
                        </Link>
                        <Link to="/formulario2">
                            <button>POR OTRO</button>
                        </Link>
                    </div>
                </div>
                <div className="form">
                    <div>
                        <label htmlFor="date">FECHA</label>
                        <input value={input.event.date} onChange={handleEventChange} type="date" id="date" required
                               name="date" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="name">NOMBRE DEL GASTO</label>
                        <input value={input.event.name} onChange={handleEventChange} type="text" className="input" required
                               name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="price">IMPORTE</label>
                        <input value={input.event.amount} onChange={handleEventChange} type="text" required
                               name="amount" className="input" id="price"/>
                    </div>
                    <div>
                        <label htmlFor="category">CATEGORIA</label>
                        <CustomSelector className="select" name="category" required options= {categoryOptions}
                                        onSelection={handleEventChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="friends" >NOMBRE DE AMIGXS</label>
                    </div>


                        <div>
                            <Select className="select" name="friends" isMulti options={friendsSelectOptions} required
                                    getOptionValue={(option) => `${option['id']}`}  getOptionLabel={(option) => `${option['name']}`}  onChange={updateFriends}/>
                        </div>


                    <div>
                        <p className="input">CANTIDAD DE AMIGOS: {input.friends.length}</p>
                        <p className="input">TOTAL APACHAS = {amountPerParticipant} €/cada uno</p>
                    </div>
                    <div>
                        <label htmlFor="paidByMe"/>
                        <div className="botonForm">
                        <button className="boton-guardar" type="submit"
                                onChange={handleEventChange} value={input.event.paidByMe = booleanPaidByMe}
                                name="paidByMe"
                                checked={!booleanPaidByMe}
                                onClick={() => setBoolanPaidByMe(true)}
                        >GUARDAR</button>
                        
                        </div>
                    </div>
                    
                </div>

            </form>

        </>
    )
}

export default Form

