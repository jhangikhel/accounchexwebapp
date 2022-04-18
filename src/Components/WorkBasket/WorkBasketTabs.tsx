import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkbasketHeader from "./WorkbasketHeader";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({

  vrTabsHolder:{
    background:"#fff",
  },

  tabs: {
    "& .MuiButtonBase-root.MuiTab-root": {
      color: "#000",
      textAlign: "left !important",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderLeft: "2px #ffffff solid",
      borderRight: "0px !important",
    },

    "& .Mui-selected": {
      fontWeight: "bold",
      borderLeft: "2px #529535 solid !important",
      borderRight: "0px !important",
    },

    "& .MuiTabs-indicator": {
      backgroundColor: "#008BBF",
    },

    "& .MuiTabs-indicator": {
      right: "auto",
      left: "0px",
      width:5,
      backgroundColor: "#529535",
    },
  },

  tabsPanels:{
    padding:"10px 10px",
    background:"#f1f1f1",
    width:"100%",

  },
  tabsPanelsBox:{
    border:"1px #ccc solid",
    borderRadius:"5px",
    padding:"20px",
    background:"#fff",
  },
  workHeaderBox:{
    fontWeight:500,
    marginBottom:"10px",
    fontSize:"20px",
    marginBottom:"25px",
    color:"#000",
    "& label":{
      display:"block",
      color:"#707070",
      marginBottom:"0px",
      fontSize:"18px",
      fontWeight:300,
    },

    "& span":{
      color:"#7fc5df"
    },
  },

  workHeaderBoxTitle:{
    fontWeight:500,
    marginBottom:"10px",
    fontSize:"20px",
    marginBottom:"25px",
    color:"#003863",
    "& span":{
      height:"2px",
      width:"50px",
      background:"#7fc5df",
      display:"block",
      marginTop:"10px",
      borderRadius:"3px",

    }
  }


});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
       className={classes.vrTabsHolder}
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          paddingLeft: "40px",
          height:"calc(100vh - 160px)",
        }}
      >
        <Tabs
          className={classes.tabs}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab label="Provider Detail" {...a11yProps(0)} />
          <Tab label="Credentails" {...a11yProps(1)} />
          <Tab label="Org Relationship" {...a11yProps(2)} />
          <Tab label="Servicing & Payment" {...a11yProps(3)} />
          <Tab label="Contracts/Fee Schedule" {...a11yProps(4)} />
          <Tab label="Claim and Reminbursements" {...a11yProps(5)} />
          <Tab label="Notes" {...a11yProps(6)} />
          <Tab label="Documents" {...a11yProps(7)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabsPanels}>

           {/* inner code start panel */}
           <Box className={classes.tabsPanelsBox}>
            <Grid container >
              <Grid item md={4}>
              <Box className={classes.workHeaderBoxTitle}>   
                <label>Provider Details</label>   
                <span></span>           
                  
              </Box>
              </Grid>
              <Grid item md={4}>
              <Box className={classes.workHeaderBox}>
                <label>Effective from</label>
                05/20/2009
              </Box>
              </Grid>
              <Grid item md={4} justifyContent="flex-end" style={{textAlign:"right",}}>
              <Box className={classes.workHeaderBox}>
                <label> </label>
                <Avatar   sx={{ width: 80, height: 80, float:"right"}} alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png" />
              </Box>
                       
              </Grid>
            </Grid>



            <Grid container>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>Professional ID</label>
                    P-654987
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>DOB</label>
                    12/05/1988
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>Birth City</label>
                    Westborough,MA.
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>Medicaid #</label>
                   123456
                  </Box>
              </Grid>
              
             
               
            </Grid>

            <Grid container>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>Medicare #</label>
                    1234567
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>NPI #</label>
                   123456789.
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>UPIN #</label>
                    1245689
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className={classes.workHeaderBox}>
                    <label>Social Security</label>
                    235-25-2356
                  </Box>
              </Grid>
             
               
            </Grid>

            <Grid container >
              <Grid item md={12}>
              <Box className={classes.workHeaderBoxTitle}>   
                <label>Contact Information</label>   
                <span></span>           
                  
              </Box>
              </Grid>
             
              
            </Grid>



            <Grid container>
              <Grid item md={6}>
                  <Box className={classes.workHeaderBox}>
                    <label>Home Address</label>
                    101 Church Street, Manhattan, NY-10001
                  </Box>
              </Grid>
              <Grid item md={6}>
                  <Box className={classes.workHeaderBox}>
                    <label>Phone #</label>
                    <span>210-915-0187</span>
                  </Box>
              </Grid>                
            </Grid>
            <Grid container>
              <Grid item md={6}>
                  <Box className={classes.workHeaderBox}>
                    <label>Alternate Address</label>
                    121 William Street, Manhattan, NY-10007
                  </Box>
              </Grid>
              <Grid item md={6}>
                  <Box className={classes.workHeaderBox}>
                    <label>DOB</label>
                    <span>919-232-9090</span>
                  </Box>
              </Grid>                
            </Grid>


          </Box>
        {/* inner code end panel */}

        </TabPanel>
        <TabPanel value={value} index={1}  className={classes.tabsPanels}>
        
        </TabPanel>
        <TabPanel value={value} index={2}  className={classes.tabsPanels}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}  className={classes.tabsPanels}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}  className={classes.tabsPanels}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}  className={classes.tabsPanels}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}  className={classes.tabsPanels}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}  className={classes.tabsPanels}>
          Item Eight
        </TabPanel>
      </Box>
    </>
  );
}
