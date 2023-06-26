//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
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
  const [yearsPassed, setYearsPassed] = useState(0);



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
    let monthNumber = months.indexOf(month) + 1

    for (let i = 0; i < carData.length; i++) {
      if (month === '' || year === '') {
        alert('Please complete the drop-down items');
        return;
      } else {
        if (Number(carData[i].Year) === yearNumber &&
          Number(carData[i].Month) === monthNumber) {
          console.log(yearNumber, monthNumber);
          setAvg(Number(carData[i].Average));
          //setIncrease((420.57 - avg))
        }
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

              <Grid item xs={4} sx={{ borderRight: '1px solid black'}}>
                  <Typography variant="h5" align="center">
                    In {month} {year} there were <br />
                    <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                      {avg} ppm
                    </Typography>
                    </Box>
                     carbon in the atmosphere.
                  </Typography>
              </Grid>

              <Grid item xs={4} sx={{ borderRight: '1px solid black'}}>
                <Typography variant="h5" align="center">
                  Today, there are <br />
                  <Box sx={{ padding: '15px' }}>
                  <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem'}}>
                    420.57 ppm
                  </Typography>
                  </Box>
                  carbon in the atmosphere.
                </Typography>
              </Grid>


              <Grid item xs={0.2}>
              <img src="./img1.png" alt="Image" style={{ width: '70px', marginLeft: '10px', marginTop: '44px'}}/>
              </Grid>

              <Grid item xs={3.8}>
                  <Typography variant="h5" align="center">
                    That's an increase of <br />
                   <Box sx={{ padding: '15px' }}>
                    <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem'}}>
                  {increase} ppm
                    </Typography>
                    </Box>
                    during your lifetime thus far.
                  </Typography>

                </Grid>
              </Grid>
            </>
        )}
          </Box>
    </Container>
  );
};

export default App;

