import * as React from 'react';
import CardContent from '@mui/material/CardContent';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import failed from './failed.css'





export default function Failed({fullName,score}) {
  return (
    
    <div className="failed_content">

      <CardContent>

      <h1 className={"content-h1"}>Failed</h1>
      <ErrorOutlineIcon sx={{fontSize: 60, color:"red"}}/>
      <h6> Scored Below Average !!</h6>
      <p className={"content-p"}> Hey {fullName && fullName} you Scored {score && score} out of {30} Questions</p>

      </CardContent>
     
    </div>
  );
}
