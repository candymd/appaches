import React, {useState} from 'react';
import './CardStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";


const Card = ({record}) => {

    const registry = record.registry;
    const friend = record.friend;

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
                <ul>
                    <li>{friend.name}</li>
                </ul>
            </AccordionDetails>
        </Accordion>
    );
};

export default Card;


