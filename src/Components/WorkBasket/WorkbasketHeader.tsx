import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function WorkbasketHeader() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={1}>
          <Item>Prefix</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>First Name</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Middle Name</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Last Name</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Stuffs</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Tittle Code</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Sex</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>License</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>License</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>License</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Mr.</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Rodney</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Bocker</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>White</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Jr.</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>MD.</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Male</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>123456</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

