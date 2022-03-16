import React, {useEffect, useState} from 'react';
import './APagarCard.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";


const APagarCard = ({record}) => {

    const registry = record.registry;
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/registries/${registry.id}/friends`)
            .then(r => r.json())
            .then(setFriends)
    },[])

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Accordion className="card2" sx={{backgroundColor: "#D6EADF"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

            <AccordionSummary sx={{display: "flex"}}
                              expandIcon={ expanded ?  <i className="fa-solid fa-angle-up"/> :
                                  <i className="fa-solid fa-ellipsis icon"/> }
                              aria-controls="panel1bh-content"
                              id="panel1bh-header">

                <div className="title">
                    <p>{registry.name}</p>
                </div>
                <div className="date-amount">
                    <span className="date">{registry.date}</span>
                    <span className="amount">{registry.amount + '€'}</span>
                </div>
                <div className="friends-paid">
                    <span>Participantes: {registry.numberFriends}</span>
                    <span>SALDADO: 1/3</span>
                </div>
            </AccordionSummary>

            <AccordionDetails>
                <ul className="friends">
                    { friends.map( friend => <li><span>{friend.name}</span><span>5€</span></li>) }
                </ul>
            </AccordionDetails>
        </Accordion>
    );
};

export default APagarCard;