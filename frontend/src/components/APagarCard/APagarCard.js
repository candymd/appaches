import React from 'react';
import './APagarCard.css';
import avatar from '../../assets/avatar.jpg'



const APagarCard = ({event, bill}) => {

    return (
        <div className="aPagar-card" >
            <div className="date-title">
                <span className="date">{event.date}</span>
                <p>{bill.event.name}</p>
            </div>
                <div className="info">
                    <div>
                        <img src={avatar} className="avatar" alt={'icono de ' + event.category} />
                        <span>{bill.paidBy.name}</span>
                    </div>
                   <div>
                       <span>5€</span>
                       <button className="pagar">PAGAR</button>
                   </div>
                </div>


        </div>
    );
};

export default APagarCard;