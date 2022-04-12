import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router'




const useStyles = makeStyles({


    inputHolder: {
        border: "1px #529535 solid",
        borderRadius: "50px",
        padding: '2px 4px ',
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        margin:"auto",
    },
    searchIcon: {
        color: "#529535",
    },
    moreIcon: {
        color: "#fff",
        background: "#529535",
        fontSize: "30px",
        borderRadius: "50px",
        padding: "8px 25px",
        "&:hover": {
            background: "#458429",
        }
    },




});



export default function Searchbar({ setShowHcp = null }: { setShowHcp: any }) {

    const classes = useStyles();
    const router = useRouter()
    const setHeader = () => {
        router.push('/Home') 
    }
    React.useEffect(() => {
        sessionStorage.clear();
    }, [])
    return (

        <>
            <Paper elevation={0} className={classes.inputHolder}
                component="form"

            >
                <IconButton type="submit" className={classes.searchIcon} sx={{ p: '7px' }} aria-label="search">
                    <SearchIcon style={{ fontSize: "25px" }} />
                </IconButton>

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder=""
                    inputProps={{ 'aria-label': '' }}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <IconButton className={classes.moreIcon} onClick={() => setShowHcp === null ? router.push('/') : setHeader()} color="primary" sx={{ p: '7px' }} aria-label="directions">
                    <MoreHorizIcon style={{ fontSize: "25px" }} />
                </IconButton>
            </Paper>





        </>

    );
}
