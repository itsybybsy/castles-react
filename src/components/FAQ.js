import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Juat a MUI Accordion FAQs

export default function AccordionUsage() {
  return (
    <Box sx={{
      px: 2,             
      my: 6,             
  }}>
    <Typography component="h2" variant="h4"          
    sx={{
        pl: 2,             
        mt: 3,            
        my: 2,             
        fontWeight: 600,    
    }}>
        FAQ Questions
    </Typography>

      <Accordion>
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" variant="h6">When is Bojnice Castle open to visitors?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Bojnice Castle is open year-round, but opening hours vary by season.
            <br />
            April–September: 9:00 AM – 5:00 PM
            <br />
            October–March: 10:00 AM – 3:00 PM
            <br />
            It’s recommended to check the official website before your visit, as hours may change on public holidays or during special events.
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" variant="h6">Can I take photos or videos inside the castle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Photography is allowed only in certain areas and usually requires a photo permit purchased with your ticket. 
        Flash and tripods are not permitted to protect the artworks and interiors. 
        Outdoor photography in the castle courtyard and gardens is generally free.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" variant="h6">Are guided tours available and in which languages?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes — guided tours are available daily in Slovak, English, and sometimes German or Hungarian, depending on 
        staff availability. The standard tour lasts around 60–75 minutes and covers the main halls, rooms, and castle history. 
        Audio guides may also be available.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" variant="h6">What other attractions can I visit nearby?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Besides the castle, you can explore:
            <br /><br />
            <strong>Bojnice Zoo</strong> – the oldest zoo in Slovakia, just next to the castle.
            <br />
            <strong>Spa Bojnice</strong> – famous thermal baths for relaxation.
            <br />
            <strong>Museum of Prehistoric Cave</strong> – a short walk away, featuring local archaeological finds.
            <br /><br />
            The whole area offers a charming mix of history, nature, and wellness.
        </AccordionDetails>

        
       
      </Accordion>
    </Box>
  );
}