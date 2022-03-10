import React from 'react';
import './CardStyle.css'

const Card = ({record}) => {
    return (
        <div className="card">
            <i className="fa-solid fa-ellipsis icon"/>
            <div className="title">
                <p>{record.name}</p>
            </div>
            <div className="date-amount">
                <span className="date">{record.date}</span>
                <span className="amount">{record.amount + '€'}</span>
            </div>
            <div className="friends-paid">
                <span>AMIGOS: 3</span>
                <span>SALDADO: 1/3</span>
            </div>
        </div>
    );
};

export default Card;


