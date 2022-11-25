import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([false, false, false, false]);
 



  

  const parentCheckHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
    console.log(checked);
  };

  const checkHandleChild1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const checkHandleChild2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };


  const checkHandleChild3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const checkHandleChild4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };
  const checkHandleChilds = [checkHandleChild1, checkHandleChild2, checkHandleChild3, checkHandleChild4];


  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <Checkbox checked={checked[0]} onChange={checkHandleChilds[0]} />
      <Checkbox checked={checked[1]} onChange={checkHandleChilds[1]} />
      <Checkbox checked={checked[2]} onChange={checkHandleChilds[2]} />
      <Checkbox checked={checked[3]} onChange={checkHandleChilds[3]} />      
    </Box>
  );

  return (
    <div>      
          <Checkbox
            checked={(((checked[0] && checked[1]) && checked[2]) && checked[3])}
            onChange={parentCheckHandle}
          />              
      {children}
    </div>
  );
}