"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import background from '../../public/background.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="w-full h-[91vh] px-[175px] flex flex-col justify-center items-start gap-[16px]" style={{backgroundColor: "#cccccc",backgroundPosition:"center",backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${background.src})` }}>
        <div className="w-[567px] h-[126px] flex items-center">
          <p className="text-white text-[58px] font-normal font-['DM Serif Text'] leading-[58px] tracking-tight">TechNest</p>
        </div>
        <div className="w-[567px] text-white text-2xl font-normal font-['Inter'] leading-normal tracking-tight">Welcome to TechNest. The first smart dormitory in Bandung</div>
      </div>
      <div className='w-full min-h-[612px] px-[165px] pt-[60px] pb-[186.5px] flex flex-col justify-center items-center gap-[16px]'>
        <h1 className="text-center text-black text-[58px] font-semibold font-['Inter']">FAQ</h1>
        <Accordion className='w-full shadow-none py-1 bg-white rounded-lg border border-neutral-400' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className="text-neutral-950 text-base font-semibold font-['Inter']">
              What is TechNest Dormitory?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='w-full shadow-none py-1 bg-white rounded-lg border border-neutral-400' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className="text-neutral-950 text-base font-semibold font-['Inter']">
              How to Rent in TechNest Dormitory?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='w-full shadow-none py-1 bg-white rounded-lg border border-neutral-400' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className="text-neutral-950 text-base font-semibold font-['Inter']">
              How to Pay?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='w-full shadow-none py-1 bg-white rounded-lg border border-neutral-400' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className="text-neutral-950 text-base font-semibold font-['Inter']">
              How to Contact us?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
