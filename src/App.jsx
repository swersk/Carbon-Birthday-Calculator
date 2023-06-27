//import logo from './logo.svg';
import './App.css';
import Share from './Share.jsx'
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Blurb from './Blurb.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography, MenuItem, Select, FormControl, Container, spacing, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

//npm install papaparse
//npm install @fontsource/roboto
//npm install @mui/material @mui/styled-engine-sc styled-components
//npm install @fontsource/roboto


const App = () => {

  useEffect(() => {
    fetch('./carbondata.csv')
      .then(response => response.blob())
      .then(blob => {
        Papa.parse(blob, {
          header: true,
          complete: function (results) {
            console.log('carData!!!!', results.data);
            setCarData(results.data);
          }
        });
      });
  }, []);


  const [carData, setCarData] = useState([]);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [avg, setAvg] = useState(null);
  const [increase, setIncrease] = useState(0);
  const [prevIncrease, setPrevIncrease] = useState(0);
  const [historicalIncrease, setHistoricalIncrease] = useState(0);
  const [yearsPassed, setYearsPassed] = useState(0);
  const [difference, setDifference] = useState(0);

  const current = new Date();

  let months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  let startYear = 1959;
  let endYear = 2023;

  let years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i)
  }

  const handleMonthClick = (e) => {
    e.preventDefault();
    console.log('month in dropdown:', e.target.value);
    setMonth(e.target.value);
  }

  const handleYearClick = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  }

  const handleAvgClick = (event) => {
    let yearNumber = Number(year);
    let monthNumber = months.indexOf(month) + 1;

    if (month === '' || year === '') {
      alert('Please complete the drop-down items');
      return;
    }

    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;
    const yearsPassed = currentYear - yearNumber;
    const monthsPassed = currentMonth - monthNumber;

    if (monthsPassed < 0) {
      setDifference(yearsPassed - 1);
    } else {
      setDifference(yearsPassed);
    }

    for (let i = 0; i < carData.length; i++) {
      if (Number(carData[i].Year) === yearNumber &&
        Number(carData[i].Month) === monthNumber) {
        setAvg(Number(carData[i].Average));
      }
    }

    setHistoricalIncrease(yearNumber - yearsPassed)

    for (let j = 0; j < carData.length; j++) {
      if (Number(carData[j].Year) === historicalIncrease &&
        Number(carData[j].Month) === monthNumber) {
        setHistoricalIncrease(avg - Number(carData[j].Average))
      }
    }
  }

  useEffect(() => {
    if (avg !== null) {
      const calculatedIncrease = 420.57 - avg;
      const numb = calculatedIncrease.toFixed(2);
      setIncrease(numb);
    }
  }, [prevIncrease]);

  useEffect(() => {
    if (increase !== null) {
      const calculatedIncrease = 420.57 - avg;
      const numb = calculatedIncrease.toFixed(2);
      setIncrease(numb);
    }
  }, [avg]);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <Typography variant="h4" sx={{ p: '8px' }}>What's your Carbon Dioxide Birth Number?</Typography>
        <Typography variant="h5" sx={{ mb: '32px' }}>Select your birth information to find out!</Typography>

        <div className="month">
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              value={month}
              onChange={handleMonthClick}
              displayEmpty
              inputProps={{ 'aria-label': 'Month' }}
              sx={{
                fontSize: "1rem",
                ":hover": { bgcolor: "lightgrey" },
              }}
            >
              <MenuItem value="" disabled>
                Month</MenuItem>
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="year">
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              value={year}
              onChange={handleYearClick}
              displayEmpty
              inputProps={{ 'aria-label': 'Year' }}
              sx={{
                fontSize: "1rem",
                mb: '16px',
                ":hover": { bgcolor: "lightgrey" },
              }}
            >
              <MenuItem value="" disabled>Year</MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Button
          variant="contained"
          onClick={handleAvgClick}
          sx={{
            width: "fit-content",
            fontSize: "1rem",
            ":hover": { bgcolor: "lightBlue" },
          }}
        >
          GET MY RESULTS
        </Button>


        {avg && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{
                  textAlign: 'center',
                  pt: '70px',
                  pb: '80px',
                  mt: '50px'
                }}>Your Results</Typography>
              </Grid>

              <Grid item xs={3} sx={{ borderRight: '1px solid gray' }}>
                <Typography variant="h5" align="center">
                  In {month} {year}, there were <br />
                  <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                      {avg} ppm
                    </Typography>
                  </Box>
                  carbon in the atmosphere.
                </Typography>
              </Grid>

              <Grid item xs={3} sx={{ borderRight: '1px solid black' }} className="grid-item">
                <Typography variant="h5" align="center">
                  Today, there are <br />
                  <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                      420.57 ppm
                    </Typography>
                  </Box>
                  carbon in the atmosphere.
                </Typography>
              </Grid>

              <Grid item xs={3} sx={{ borderRight: '1px solid black'}}>
                <Typography variant="h5" align="center">
                  That's an increase of <br />
                  <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                      {increase} ppm
                    </Typography>
                  </Box>
                  during your lifetime thus far.
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h5" align="center">
                  These levels are speeding up. As a comparison, carbon only increased <br />
                  <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                      {historicalIncrease} ppm
                    </Typography>
                  </Box>
                  during the {difference} years <b>before</b> your birth.
                </Typography>
              </Grid>
              </Grid>
              <Blurb />
          </>
        )}

      </Box>

    </Container>
  );
};

export default App;

