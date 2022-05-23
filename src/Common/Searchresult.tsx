import * as React from 'react';
import {Box, Grid} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router'

 
const useStyles = makeStyles({


    searchResultHolder: {
        border: "1px #529535 solid",
        borderRadius: "20px",
        padding: '2px 4px ',
        position:"absolute",
        left:"0px",
        top:"100%",
        maxHeight:"300px",
        width:"100%",
    },
    

    searchResulTtle:{
        color: "#003863",
        opacity: "0.5",
        fontWeight:500,
        borderBottom:"1px #ccc solid",
        borderTop:"1px #ccc solid",
        padding:"5px 4px",
        fontSize:"16px",
    },

    searchResult:{
        color: "#003863",
        padding:"5px 4px",
        fontSize:"18px",
         
        
    }




});



export default function Searchbar({ setShowHcp = null }: { setShowHcp: any }) {
    const classes = useStyles();  
    return (
        <>
            <Box elevation={0} className={classes.searchResultHolder}  >            
                {/*----- start loop here ------------ */}
               <Grid container>
                   <Grid item xs="12" className={classes.searchResulTtle} >
                        <Grid container>
                            <Grid items xs="4" ms="4">Phone No.</Grid>
                            <Grid items xs="8" ms="8"  style={{textAlign:"right"}}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                   </Grid>
                   <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8"  style={{textAlign:"right"}}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                   </Grid>
                   <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8"  style={{textAlign:"right"}}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                   </Grid>
                   <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{textAlign:"right"}}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                   </Grid>
                   <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8"  style={{textAlign:"right"}}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                   </Grid>
                         


                   
                   
                </Grid> 
                   {/*----- end loop here ------------ */}
            </Box>
        </>
    );
}
