import React from 'react';
import '../Card/Card'
import Card from "../Card/Card";

const CardList = ({records}) => {
    return (
        <div className="cardList">
            {records.map(record =>  <Card record={record} /> )}
        </div>
    );
};

export default CardList;
