import React from 'react';
import './Form.css'

function Form() {
return (
    <>
        <div className="container">
            <button className="button-icon"><i className="fa-solid fa-circle-check"></i></button>
            <h1>AÑADIR</h1>
            <div className="form">
                <div>
                    <label htmlFor="">FECHA</label>
                    <input type="date" id="date" name="experience_date" className="input"/>
                </div>
                <div>
                    <label htmlFor="">NOMBRE DEL GASTO</label>
                    <input id="ticket-name" required name="user_name" className="input"/>
                </div>
                <div>
                    <label htmlFor="price">IMPORTE</label>
                    <input type="number" id="import" name="import" className="input"/>
                </div>
                <div>
                    <label htmlFor="">PAGADO POR</label>
                    <button className="button-select">Por ti</button>
                    <button className="button-select">Por otro</button>
                </div>
                <div>
                    <label htmlFor="">NOMBRE</label>
                    <input id="friend-name" required name="user_name" className="input"/>
                </div>
                <div>
                    <label htmlFor="">LISTA</label>
                    <textarea  className="text"></textarea>
                </div>
                <div>
                    <label htmlFor="">AMIGOS</label>
                    <input type="text" name="username" className="input"/>
                </div>
                <div>
                    <p>TOTAL APACHAS= 5e/cada participante</p>
                </div>
            </div>
        </div>
    </>
)
}
export default Form


