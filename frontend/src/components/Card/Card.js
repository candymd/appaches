import React, {useState} from 'react';
import './CardStyle.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';


const Card = ({record}) => {


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
                <span>AMIGOS: 3</span>
                <span>SALDADO: 1/3</span>
            </div>
            </AccordionSummary>
        </Accordion>
    );
};

export default Card;


