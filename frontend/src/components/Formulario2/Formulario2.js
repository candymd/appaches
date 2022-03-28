import './Formulario.css';
import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";


const Formulario2 = ({onSubmit, friends}) => {

    const [booleanPaidByMe, setBoolanPaidByMe] = useState(true)

    const friendsSelectOptions = friends.map(friend => {
        return {
            id: friend.id,
            name: friend.name
        }
    });

    const navigate = useNavigate();
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
        navigate("/home")

    }

    const updatePaidBy = (paidBy) => {
        setInput({...input, paidBy})
    }

return (

  
    <form className="container" onSubmit={enviarDatos}>
        <Link to="/home">
            <button className="button-icon"><i className="fa-solid fa-arrow-left"/></button>
        </Link>
        <div className="tittle">
            <h1>AÑADIR</h1>
            <div>
                <label htmlFor="paidByMe"></label>
                <div className="botonForm">
                    <Link to="/form">
                        <button>POR MI</button>
                    </Link>
                    <Link to="/formulario2">
                        <button>POR OTRO</button>
                    </Link>
                </div>
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
                <label htmlFor="friends" >NOMBRE DE AMIGX</label>
            </div>


                <div>
                    <Select className="select" name="paidBy" options={friendsSelectOptions} onChange={updatePaidBy}
                            getOptionValue={(option) => `${option['id']}`}  getOptionLabel={(option) => `${option['name']}`} />
                </div>

            
            <div>
                
                <div className="botonForm">
                
                <button className="boton-guardar" type="submit"
                        onChange={handleEventChange}
                        value={input.event.paidByMe = booleanPaidByMe}
                        name="paidByMe"
                        checked={!booleanPaidByMe}
                        onClick={() => setBoolanPaidByMe(false)}>GUARDAR
                </button>

                </div>
            </div>
        </div>

    </form>


)
}



export default Formulario2
