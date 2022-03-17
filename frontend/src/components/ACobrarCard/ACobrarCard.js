import React, {useEffect, useState} from 'react';
import './ACobrarCardStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";


const ACobrarCard = ({registry, deleteRegistry}) => {

    const [friends, setFriends] = useState([]);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/registries/${registry.id}/friends`)
            .then(r => r.json())
            .then(setFriends)
    },[registry.id])

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleMenu = () => {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    const closeMenu = () => {
        setMenuIsOpen(false)
    }
    const onDeleteRegistry = () => {
        setMenuIsOpen(false)
        deleteRegistry(registry.id);
    }

    const amountPerParticipant = (registry.amount / (registry.friends.length + 1)).toFixed(2)

    return (
        <Accordion className="card" sx={{backgroundColor: "#D6EADF"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

            <AccordionSummary sx={{display: "flex"}}
                              expandIcon={<i onClick={toggleMenu} className="fa-solid fa-ellipsis icon"/>}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header">
                {menuIsOpen && <div className="menu">
                    <ul>
                        <li onClick={closeMenu}>Editar</li>
                        <li onClick={onDeleteRegistry}>Borrar</li>
                    </ul>
                </div>}

                <div className="title">
                    <p>{registry.name}</p>
                </div>
                <div className="date-amount">
                    <span className="date">{registry.date}</span>
                    <span className="amount">{registry.amount + '€'}</span>
                </div>
                <div className="friends-paid">
                    <span>Participantes: {friends.length}</span>
                    <span>SALDADO: 1/3</span>
                </div>
            </AccordionSummary>



            <AccordionDetails>
                <ul className="friends">
                    { friends.map( friend => <li key={friend.id}><span>{friend.name}</span><span>{amountPerParticipant + '€'}</span></li>) }
                </ul>
            </AccordionDetails>
        </Accordion>
    );
};

export default ACobrarCard;