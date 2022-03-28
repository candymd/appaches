import React  from "react";
import './Welcome.css'
import logo from './assets/logo.png'
import {bar, comida, compras, hogar} from "../../assets/category-icons/category-icons";

const Welcome = () => {

    return (

        <div className="WelcomeHello">
            <img className="logo-Welcome" src={logo}/>
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
                <button className="button-next">Siguiente</button>
            </div>
            <div className="texto-intro">
                <h4>Lleva un registro de todos tus gastos compartidos con amigos, compañeros de salidas, viajes, de
                    piso y familia.</h4>
            </div>
        </div>


        )
};

export default Welcome;
