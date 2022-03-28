import React  from "react";
import './Welcome.css'
import logo from './assets/logo.png'
import logolila from './assets/logolila.png'
import {bar, comida, compras, hogar} from "../../assets/category-icons/category-icons";
import {Link} from "react-router-dom";

const Welcome = () => {
    return (

        <div className="WelcomeHello">
            <img className="logo-Welcome" src={logolila}/>
            <div className="slogan">
                <h3> PORQUE CADA CÉNTIMO CUENTA </h3>
            </div>
            <div className="imagenes-categorias">
                <img  src={comida}/>
                <img  src={compras}/>
                <img  src={hogar}/>
                <img  src={bar}/>
            </div>
            <div>
                <Link to="/home">
                    <button className="button-next">Entra</button>
                </Link>
            </div>
            <div className="texto-intro">
                <h4>Lleva un registro de todos tus gastos compartidos con amigos, compañeros de salidas, viajes, de
                    piso y familia.</h4>
            </div>
        </div>
        
    )
};

export default Welcome;
