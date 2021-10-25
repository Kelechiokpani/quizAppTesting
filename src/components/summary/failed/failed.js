import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import failed from './failed.css'



const Summary = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
  </Box>
);


export default function Failed() {
  return (
    
    <div className="content">

      <CardContent>

      <h1>Failed</h1>
      <ErrorOutlineIcon sx={{fontSize: 60, color:"red"}}/>
      <h6> Scored Below Average !!</h6>
      <p> Hey Emmanuel your Scored {10} out of {30} Questions</p>

      </CardContent>
     
    </div>
  );
}
