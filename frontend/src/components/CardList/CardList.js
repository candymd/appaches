import React from 'react';
import '../Card/Card'
import Card from "../Card/Card";

const CardList = ({records, friends}) => {
    return (
        <div className="cardList">
            {records.map(record =>  <Card key={record.id} record={record} friends={friends} /> )}
        </div>
    );
};

export default CardList;
