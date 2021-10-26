import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import success from './success.css'


// const Summary = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block',  transform: 'scale(0.8)' }}>
//   </Box>
// );


export default function Success({fullName,score}){
  return (
    <div className="success_content">
      <CardContent>
      <h2 className={"content-h2"}>Congratulations</h2>
      <CheckCircleIcon sx={{ fontSize: 60, color:"green"}} />
        <h6> Scored Above Average !!</h6>
        <p className={"content-p"}> Hey {fullName && fullName} you Scored {score && score} out of {30} Questions</p>
      </CardContent>
     
    </div>
  );

}

