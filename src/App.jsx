//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography, MenuItem, Select, FormControl } from '@mui/material';

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
    console.log('month in dropdown:', e.target.value)
    setMonth(e.target.value)
  }

  const handleYearClick = (e) => {
    e.preventDefault();
    setYear(e.target.value)
  }

  const handleAvgClick = (event) => {
    let yearNumber = Number(year)
    let monthNumber = months.indexOf(month) + 1

    for (let i = 0; i < carData.length; i++) {
      if (month === '' || year === '') {
        alert('Please complete the drop-down items');
        return;
      } else {
        if (Number(carData[i].Year) === yearNumber &&
          Number(carData[i].Month) === monthNumber) {
          console.log(yearNumber, monthNumber)
          setAvg(Number(carData[i].Average))
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
    <>
      <Typography variant="h4">What's your Carbon Dioxide Birth Number?</Typography>
      <Typography variant="h5">Select your birth information to find out!</Typography>
      <div className="month">
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            value={month}
            onChange={handleMonthClick}
            displayEmpty
            inputProps={{ 'aria-label': 'Month' }}
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
          >
            <MenuItem value="" disabled>Year</MenuItem>
            {years.map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" onClick={handleAvgClick}>GET MY RESULTS</Button>

      {avg && (
        <div>
          <Typography variant="h4">Your Results</Typography>
          <Typography variant="h5">In {month} {year} there were {avg} ppm carbon in the atmosphere. </Typography>
          <Typography variant="h5">Today, there are 420.57 ppm carbon in the atmosphere. </Typography>
          <Typography variant="h5">That's an increase of {increase} ppm during your lifetime thus far. </Typography>
          {/*}  <h3>These levels are speeding up. As a comparison, carbon only increased {prevIncrease} during the {yearsPassed} years before you were born. </h3> */}

        </div>
      )}
    </>
  )
}

export default App;