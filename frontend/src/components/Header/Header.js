import React, {useState} from 'react';
import './Header.css'




const Header = ({setVistaACobrar}) => {

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
                <i className="fa-solid fa-user-astronaut"/>
                <h1 className="hola">Hola, María</h1>
            <p>Bienvenida a Appaches</p>
                <div className="Button">

                 <button  onClick={irACobrar} className={isGreenActive ? 'green active': 'green' }>A COBRAR</button>
                   <button onClick={irAPagar} className= {!isGreenActive ? 'red active': 'red' } >A PAGAR</button>
                </div>
            </div>

        </div>
    )

}

export default Header;

