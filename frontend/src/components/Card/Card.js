import React, {useEffect, useState} from 'react';
import './CardStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";


const Card = ({record}) => {

    // const registry = record.registry;
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/registries/${record.id}/friends`)
            .then(r => r.json())
            .then(setFriends)
    },[record.id])

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Accordion className="card" sx={{backgroundColor: "#D6EADF"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

            <AccordionSummary sx={{display: "flex"}}
                              expandIcon={ expanded ?  <i className="fa-solid fa-angle-up"/> :
                                  <i className="fa-solid fa-ellipsis icon"/> }
                              aria-controls="panel1bh-content"
                              id="panel1bh-header">

                <div className="title">
                    <p>{record.name}</p>
                </div>
                <div className="date-amount">
                    <span className="date">{record.date}</span>
                    <span className="amount">{record.amount + '€'}</span>
                </div>
                <div className="friends-paid">
                    <span>Participantes: {friends.length}</span>
                    <span>SALDADO: 1/3</span>
                </div>
            </AccordionSummary>

            <AccordionDetails>
                <ul className="friends">
                    { friends.map( friend => <li key={friend.id}><span>{friend.name}</span><span>5€</span></li>) }
                </ul>
            </AccordionDetails>
        </Accordion>
    );
};

export default Card;