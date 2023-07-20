import React, { useState, useEffect } from 'react';
import { Button, Typography, MenuItem, Select, FormControl, Container, Box, Grid } from '@mui/material';

const ResultsCards = ({month, year, avg, increase, difference, trend} ) => {
  return (
    <>
  <Grid container spacing={2}>
  <Grid item xs={3}>
    <Box
      sx={{
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '15px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" align="center">
        In {month} {year}, there were
      </Typography>
      <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
        {avg} ppm
      </Typography>
      <Typography variant="h5" align="center">
        carbon in the atmosphere.
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={3}>
    <Box
      sx={{
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '15px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" align="center">
        Today, there are
      </Typography>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        423.68 ppm
      </Typography>
      <Typography variant="h5" align="center">
        carbon in the atmosphere.
      </Typography>
    </Box>
  </Grid>


  <Grid item xs={3}>
    <Box
      sx={{
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '15px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" align="center">
        That's an increase of
      </Typography>
      <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
        {increase} ppm
      </Typography>
      <Typography variant="h5" align="center">
        during your lifetime thus far.
      </Typography>
    </Box>
  </Grid>


  <Grid item xs={3}>
    <Box
      sx={{
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '15px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" align="center">
        These levels are speeding up. <br /><br /> As a comparison, carbon only increased
      </Typography>
      <Typography variant="h5" align="center">
        <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
          {trend} ppm
        </Typography>
      </Typography>
      <Typography variant="h5" align="center">
        during the {difference} years <b>before</b> your birth.
      </Typography>
    </Box>
  </Grid>
</Grid>
</>
  )
};

export default ResultsCards;