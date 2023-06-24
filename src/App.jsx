//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import Papa from 'papaparse';
//npm install papaparse

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
  for (let i = 0; i < carData.length; i++) {
    if (month === '' || year === '') {
    alert('Please complete the drop-down items');
    return;
    } else {
      let newMonth = months.indexOf(Number(carData[i].Month) + 1)
      setYear(Number(year))

      if (Number(carData[i].Year) === year &&
         Number(carData[i].Month) === month) {
         setAvg(Number(carData[i].Average))
         break;
          }
      break;
     }
  }
}

  return (
    <>
        <h3>How much carbon was in the atmosphere when you were born?</h3>
        <h4>Select your birth information to find out! </h4>
        <div className="month">
            <select value={month} onChange={handleMonthClick}>
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
             </select>
        </div>
        <div className="year">
            <select value={year} onChange={handleYearClick}>
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
             </select>
        </div>
        <button onClick={handleAvgClick}>Find out!</button>

        {avg && (
          <div>
            <h1>The average was {avg}</h1>
          </div>
        )}
    </>
  )
}

export default App;