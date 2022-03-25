import React, {useState} from 'react';
import './Header.css'
import {maria} from '../../assets/avatars/avatars'


const Header = ({setVistaACobrar, totalACobrar, totalAPagar}) => {

    const [isGreenActive, setIsGreenActive] = useState(true);

    const irACobrar = () => {
        setIsGreenActive(true);
        setVistaACobrar(true)
    }

    const irAPagar = () => {
        setIsGreenActive(false);
        setVistaACobrar(false)
    }



    return (

        <div className="Container">
            <div className="TextoBienvenida">
                <div className="texto">
                    <h1 className="hola">Hola, María</h1>
                    <p>Bienvenida a Appaches</p>
                </div>
               <img className="avatar" src={maria} alt="" />
            </div>
            <div className="Button">

                <button  onClick={irACobrar} className={isGreenActive ? 'green active': 'green' }>
                    <span>A COBRAR</span>
                    <span className="numbers">{totalACobrar + '€'}</span>
                    <span className="total">TOTAL</span>
                </button>
                <button onClick={irAPagar} className= {!isGreenActive ? 'red active': 'red' } >
                    <span>A PAGAR</span>
                    <span className="numbers">{totalAPagar + '€'}</span>
                    <span className="total">TOTAL</span></button>
            </div>

        </div>
    )

}

export default Header;

