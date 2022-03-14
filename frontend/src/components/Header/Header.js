import React from 'react';
import './Header.css'



const Header = () => {

    return (

        <div className="Container">
            <div className="TextoBienvenida">
            <h1>Hola, María</h1>
            <p>Bienvenida a Appaches</p>
                <div className="Button">
                    <button className="green">A Cobrar</button>
                    <button className="red">A Pagar</button>
                </div>
            </div>

        </div>
    )

}

export default Header;

