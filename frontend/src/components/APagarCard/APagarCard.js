import React, {useState} from 'react';
import './APagarCard.css';
import {AccordionDetails} from "@mui/material";


const APagarCard = ({event, friends, bill}) => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="card2" >

            <div className="date-title">
                <span className="date2">{event.date}</span>
                <p>{bill.paidBy.name}</p>

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