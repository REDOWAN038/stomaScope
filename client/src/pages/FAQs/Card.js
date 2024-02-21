import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const Card = ({id, question:q, answer:a, panel:p, handleChange, expanded}) => {
    return(
        <Accordion expanded={expanded === p} onChange={handleChange(p)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id={id}
        >
          <h1>{q}</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-[0.9rem] text-gray-700">{a}</p>
        </AccordionDetails>
      </Accordion>
    )
}

export default Card