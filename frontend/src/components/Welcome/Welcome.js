import React  from "react";
import './Welcome.css'
import logo from './assets/logo.png'

const Welcome = () => {

    return (

            <div className="WelcomeHello">

                <img className= "logo-Welcome" src={logo} />
                <h1 className="slogan"> CUANDO CADA CÉNTIMO CUENTA </h1>

            </div>


        )
};

export default Welcome;