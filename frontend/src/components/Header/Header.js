import React, {useState} from 'react';
import './Header.css'



const Header = () => {

    const [isGreenActive, setIsGreenActive] = useState(true);


    return (

        <div className="Container">
            <div className="TextoBienvenida">
                <i className="fa-solid fa-user-astronaut"/>
                <h1>Hola, María</h1>
            <p>Bienvenida a Appaches</p>
                <div className="Button">

                    <button onClick={() => setIsGreenActive(true)} className={isGreenActive ? 'green active': 'green' }>A Cobrar</button>
                    <button onClick={() => setIsGreenActive(false)} className= {!isGreenActive ? 'red active': 'red' } >A Pagar</button>
                </div>
            </div>

        </div>
    )

}

export default Header;

