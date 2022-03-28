import React from 'react';
import './APagarCard.css';
import * as avatar from '../../assets/avatars/avatars'



const APagarCard = ({event, bill}) => {

    const getAvatarName = (avatarName) => {
      return  avatarName.replace(/\s/g, "")

      }

    let avatarName = (bill.paidBy.name)

    return (
        <div className="aPagar-card" >
            <div className="date-title">
                <span className="date">{event.date}</span>
                <p>{bill.event.name}</p>
            </div>
                <div className="info">
                    <div>
                        <img src={avatar[getAvatarName(avatarName)]} className="avatar" alt={'icono de ' + bill.paidBy.name} />
                        <span>{bill.paidBy.name}</span>
                    </div>
                   <div>
                       <span>5€</span>
                   </div>
                </div>


        </div>
    );
};

export default APagarCard;