import React from 'react';
import '../ACobrarCard/ACobrarCard'
import ACobrarCard from "../ACobrarCard/ACobrarCard";
import APagarCard from "../APagarCard/APagarCard";

const CardList = ({registrosACobrar, registrosAPagar, vistaACobrar, deleteRegistry}) => {



    return (

          <div className="cardList">
              {vistaACobrar ? registrosACobrar.map(registry => <ACobrarCard deleteRegistry={deleteRegistry}  key={registry.id} registry={registry}/>)
              : registrosAPagar.map(registry => <APagarCard key={registry.id} registry={registry}/>)}
        </div>
    );
};

export default CardList;
