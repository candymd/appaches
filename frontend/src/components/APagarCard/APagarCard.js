import React from 'react';
import './APagarCard.css';


const APagarCard = ({event, bill}) => {

    return (
        <div className="aPagar-card" >
            <div className="date-title">
                <span className="date">{event.date}</span>
                <p>{bill.event.name}</p>
            </div>
                <div className="friend">
                    <span>{bill.paidBy.name}</span>
                    <span>5€</span>
                </div>


        </div>
    );
};

export default APagarCard;