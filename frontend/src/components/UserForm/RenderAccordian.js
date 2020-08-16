import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText'


const RenderAccordion = ({ summary, details }) => {
    return (
    <Accordion className= "confirm-hearder">
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
      >
      <Typography className='heading'>{summary}</Typography></AccordionSummary>
      <AccordionDetail>
        <div>
          { details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];
  
            return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
  
          }) }
        </div>
      </AccordionDetail>
    </Accordion>
  )}


   
  export default RenderAccordion;