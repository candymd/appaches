import React, {useState} from 'react';
import './ACobrarCardStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";
import * as icon from '../../assets/category-icons/category-icons'


const ACobrarCard = ({bill, deleteBill, friends, event}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (bill, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleMenu = () => {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    const onDeleteBill = () => {
        setMenuIsOpen(false)
        deleteBill(bill.id);
    }

    const amountPerParticipant = (event.amount / (friends.length + 1)).toFixed(2)

    return (
        <Accordion className="card"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

            <AccordionSummary sx={{display: "flex"}}
                              expandIcon={<i onClick={toggleMenu} className="fa-solid fa-ellipsis icon"/>}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header">
                {menuIsOpen && <div className="menu">
                    <ul>
                        <li onClick={toggleMenu}>Editar</li>
                        <li onClick={onDeleteBill}>Borrar</li>
                    </ul>
                </div>}
                <div>
                    <div>
                    <img src={icon[event.category]} className="category-icon" alt={'icono de ' + event.category} />

                <div className="title">
                    <p>{event.name}</p>
                    <span className="date">{event.date}</span>
                </div>
                </div>
                <div className="date-amount">
                    <span className="amount">{event.amount + '€'}</span>
                </div>
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