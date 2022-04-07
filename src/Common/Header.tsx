import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import { mainListItems } from './ListItems';
import TextField from '@mui/material/TextField';
import CenteredTabs from './Tabs';
import Image from 'next/image'
import Logo from './../Content/images/logo.png'
import { makeStyles } from '@mui/styles';
import bgMainImage from '../Content/images/mainBG.jpg';
import Searchbar from './Searchbar';

import { useRouter } from 'next/router';

const useStyles = makeStyles({
    headerAppbar: {
        padding: "0px 0px",
        "& .MuiToolbar-root": {
            paddingLeft: "0px",
            paddingRight: "0px",
        },

    },

    toolbarBtn: {
        borderRadius: 0,
        height: "100%",
        margin: "0px 2px",
        minWidth: "55px",
        minHeight: "61px",
        padding: "5px 10px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
            background: "#76A960",

        }
    },
    toolbarUsername: {
        fontSize: "16px",
        fontWeight: "600",

    },
    toolbaruserlabel: {
        fontSize: "13px",
        display: "block",
        width: "100%",

    },

    logoHolder: {
        background: "#fff",
        textAlign: "center",
        "& img": {
            maxWidth: "100%",
            maxHeight: "57px",

        }

    },
    footer: {
        position: "fixed",
        width: "100%",
        padding: "5px 0px",
        textAlign: "center",
        bottom: "0px",
    },
    mainContainerBg: {
        backgroundImage: `url(${bgMainImage.src})`,
        backgroundRepeat: " no-repeat",
        backgroundPosition: "right bottom",
    }


});




function Copyright(props: any) {
    console.log(bgMainImage);
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 220;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const mdTheme = createTheme();

const Header: React.FC = ({ children }) => {
    const [showHcp, setShowHcp] = React.useState(false);
    const classes = useStyles();
    const router = useRouter();
    const getHeader = () => {
        if (typeof window !== 'undefined') {
            return router.pathname !== '/' ? <Searchbar setShowHcp={setShowHcp} /> : "Welcome to Provider Atlas"
        }
    }
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar className={classes.headerAppbar} sx={{ background: '#529535E6' }} position="absolute" elevation={0} >
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Box className={classes.logoHolder} style={{ width: drawerWidth }}>

                            <Image src={Logo} />
                        </Box>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            ml={2}
                            sx={{ flexGrow: 2, fontSize: "22px" }}
                        >
                            {getHeader()}

                        </Typography>
                        <Box>


                        </Box>
                        <Box>
                            <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                                <span style={{ fontSize: "8px", paddingTop: 5, }}>Notification</span>


                            </IconButton>
                        </Box>
                        <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                            <InsertDriveFileIcon />
                            <span style={{ fontSize: "8px", paddingTop: 5, }}>Transections</span>
                        </IconButton>
                        <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                            <SettingsIcon />
                            <span style={{ fontSize: "8px", paddingTop: 5, }}>Setting</span>
                        </IconButton>
                        <IconButton className={classes.toolbarBtn} color="inherit" style={{ marginRight: "20px" }}>
                            <PersonIcon style={{ background: "#76A960", borderRadius: 100, padding: "5px", marginRight: "10px", fontSize: "35px" }} />
                            <div className={classes.toolbarUsername}> Aditiya<span className={classes.toolbaruserlabel}>Dataops</span>  </div>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" sx={{
                    width: 20,
                    flexShrink: 0,
                    marginTop: 8,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#003863' },

                }}>

                    <Divider />
                    <List sx={{ color: 'white' }} component="nav">
                        {mainListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? "#fff"
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        ml: 20
                    }}
                >
                    <Toolbar />
                    <Container>
                        <Grid className={classes.mainContainerBg} container
                            spacing={3}
                            direction="column"
                            mt={1}
                            alignContent="center"
                            justifyContent={'center'}
                            style={{ minHeight: '92vh', }}
                        >
                            {children}

                        </Grid>
                    </Container>
                    <Copyright className={classes.footer} />

                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Header;