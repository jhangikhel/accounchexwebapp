import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import CustomTable from './CustomTable';
import { WorkBasket } from '../Data/WorkBasket'
import FilterDropdown from './FilterDropdown';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CustomButton from './CustomButton';
import { makeStyles } from '@mui/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
const ItemRight = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
}));
const ItemCenter = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function CenteredTabs() {
    const [value, setValue] = React.useState('3');
    const [showHcp, setShowHcp] = React.useState(false);
    const classes = useStyles();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
       <Grid container className={classes.root}
        >
            {showHcp === false ?
                <Grid item xs={12} md={12} style={{height:"100%", }} alignContent="center" justifyContent={'center'}>
                    <Item>   <Paper elevation={0} 
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}
                    >
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder=""
                            inputProps={{ 'aria-label': '' }}
                        />

                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton onClick={() => setShowHcp(true)} color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <MoreHorizIcon />
                        </IconButton>
                    </Paper></Item>
                </Grid>
                :
                <TabContext value={value}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab iconPosition="start" icon={<GroupWorkIcon />} label="Organization (HCO)" value="1" />
                            <Tab iconPosition="start" icon={<MedicalServicesIcon />} value="2" label="Facility (HCF)" />
                            <Tab iconPosition="start" icon={<MedicalServicesIcon />} value="3" label="Professional (HCP)" />
                        </Tabs>
                    </Box>

                    <TabPanel value="1"><Grid container rowSpacing={1} pl={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>{`Records ${WorkBasket.organizationRows.length}`}</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <ItemRight>Filter By  </ItemRight>
                        </Grid>
                        <Grid item xs={3}>
                            <ItemRight> <FilterDropdown></FilterDropdown> </ItemRight>
                        </Grid>
                        <Grid item xs={12}>
                            <ItemCenter><CustomTable rows={WorkBasket.organizationRows} columns={WorkBasket.organizationColumns} /></ItemCenter>
                        </Grid>

                    </Grid></TabPanel>
                    <TabPanel value="2"><Grid container rowSpacing={1} pl={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>{`Records ${WorkBasket.facilityRows.length}`}</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <ItemRight>Filter By </ItemRight>
                        </Grid>
                        <Grid item xs={12}>
                            <ItemCenter><CustomTable rows={WorkBasket.facilityRows} columns={WorkBasket.facilityColumns} /></ItemCenter>
                        </Grid>

                    </Grid></TabPanel>

                    <TabPanel value="3">
                        <Grid container pl={8} spacing={2}>

                            <Grid item xs={12} md={12}>
                                <Item>  <TextField
                                    fullWidth
                                    label="Name"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="NPI"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="Tax ID"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item>  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"PCP"}
                                    label="Type Of Provider"
                                    size="small"
                                    fullWidth

                                >
                                    <MenuItem value={"PCP"}>PCP</MenuItem>

                                </Select></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item>  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"PCP"}
                                    label="Type Of Provider"
                                    size="small"
                                    fullWidth

                                >
                                    <MenuItem value={"PCP"}>PCP</MenuItem>

                                </Select></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item>  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"IM"}
                                    label="Speciality"
                                    size="small"
                                    fullWidth

                                >
                                    <MenuItem value={"IM"}>Internal Medicine</MenuItem>

                                </Select></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="Phn No"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="License"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="LOB"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="Vendor Number"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item>  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"IM"}
                                    label="Entity Type"
                                    size="small"
                                    fullWidth

                                >
                                    <MenuItem value={"IM"}>Select</MenuItem>

                                </Select></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="Medicare #"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Item> <TextField
                                    fullWidth
                                    label="Mediacid"
                                    id="outlined-size-small"

                                    size="small"
                                /></Item>
                            </Grid>
                            <Grid item xs={4} md={4}>

                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Item> <CustomButton></CustomButton> </Item>
                            </Grid>
                            <Grid item xs={4} md={4}>

                            </Grid>
                        </Grid>


                    </TabPanel>

                </TabContext>
            }

        </Grid>

    );
}
