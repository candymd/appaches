import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {

return (

    <div className="footer">

        <Link to="/form"><i className="fa-solid fa-circle-plus" ></i></Link>
        <h6>Añadir Evento</h6>

    </div>
)

}

export default Footer