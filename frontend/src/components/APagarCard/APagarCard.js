import React, {useEffect, useState} from 'react';
import './APagarCard.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionDetails} from "@mui/material";


const APagarCard = ({registry}) => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/registries/${registry.id}/friends`)
            .then(r => r.json())
            .then(setFriends)
    },[registry.id])
    
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="card2" >

            <div className="date-title">
                <span className="date2">{registry.date}</span>
                <p>{registry.name}</p>

            </div>


            <AccordionDetails>
                <ul className="friends">
                    { friends.map( friend => <li><span>{friend.name.toUpperCase()}</span><span>5€</span></li>) }
                </ul>
            </AccordionDetails>



                <div className="friends-paid">

                </div>


        </div>
    );
};

export default APagarCard;