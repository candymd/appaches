import React from 'react';
import '../Card/Card'
import Card from "../Card/Card";
import '../Card2/APagarCard'
const CardList2 = ({records, friends}) => {
    return (
        <div className="cardList2">
            {records.map(record =>  <Card key={record.id} record={record} friends={friends} /> )}
        </div>
    );
};

export default CardList2;
