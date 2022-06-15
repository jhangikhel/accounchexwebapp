import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      
     
      Filter By : 
        <Select
        sx={{ width: 100, border:0,}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          variant='standard'
          defaultValue={"select value"}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Node"
          onChange={handleChange}
          inputProps={{
            
            disableUnderline: true, // <== added this
          }}
        >
          <MenuItem value={0}>
            <em>All Result</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
    </>
  );
}