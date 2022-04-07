import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  searchBtn: {
    padding:"0px 0px 0px 25px",
    height:"32px",
    textTransform:"none",
    borderRadius: 20, 
    border:"1px #529535 solid",
    background:"#529535",
    color:"#fff",
    "&:hover":{
      background:"#458429", 
  },
    "& .MuiButton-endIcon ":{
      padding:" 5px 5px",
      background: "#D4E4CC",
      borderRadius: "50px",
      color: "#529535",
  },
  },

  resetBtn: {
    padding:"0px 0px 0px 25px",
    height:"32px",
    textTransform:"none",
    borderRadius: 20,
    border:"1px #EA4040 solid",
    color:"#000",
    background:"#fff",
    "&:hover":{
      background:"#FAA3A3", 
  },
    "& .MuiButton-endIcon ":{
      padding:" 5px 5px",
      background: "#fff",
      borderRadius: "50px",
      color: "#EA4040",
      border:"1px #EA4040 solid",
  },
  },

 


});


export default function CustomButton() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="contained" className={classes.resetBtn} endIcon={<CancelIcon />}>
        Reset
      </Button>
      <Button variant="contained" className={classes.searchBtn} endIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}