import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const Card = ({ id, question: q, answer: a, panel: p, handleChange, expanded }) => {
    return (
        <Accordion expanded={expanded === p} onChange={handleChange(p)}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                id={id}
                style={{ backgroundColor: '#E6EFEB', color: 'black' }}
            >
                <h1>{q}</h1>
            </AccordionSummary>
            <AccordionDetails
                style={{ backgroundColor: '#E6EFEB', color: 'black' }}
            >
                <p className="text-[1rem]">{a}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default Card