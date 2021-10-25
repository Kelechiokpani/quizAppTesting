import * as React from 'react';
import Box from '@mui/material/Box';//

import Failed from '../../components/summary/failed/failed' 
import Success from '../../components/summary/sucess/success' 
import  './summary.css'




export default function Summary() {
  let failed = false
  return (
    
      <div className="cover">
      {failed ? <Failed/> : <Success/>}
      
      </div>
  );
}
