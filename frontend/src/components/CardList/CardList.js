import React from 'react';
import '../ACobrarCard/ACobrarCard'
import ACobrarCard from "../ACobrarCard/ACobrarCard";
import APagarCard from "../APagarCard/APagarCard";

const CardList = ({eventsACobrar, eventsAPagar, vistaACobrar, deleteBill}) => {


    return (

          <div className="cardList centered">
              {vistaACobrar ? eventsACobrar.map(bill => <ACobrarCard deleteBill={deleteBill} friends={bill.friends} bill={bill} event={bill.event} key={bill.id}/>)
              : eventsAPagar.map(bill => <APagarCard friends={bill.friends} event={bill.event} key={bill.id} bill={bill}/>)}
        </div>
    );
};

export default CardList;
