import App from './App.jsx';
import React from 'react';
import { styled } from '@mui/system';
import PropTypes from "prop-types";

const Blurb = () => {
  return (
    <>
    <div class="carbonWrapper">
      <p><em>Carbon dioxide in the atmosphere is measured in parts per million (ppm). Yearly average carbon figures dating back to 1958 come from Mauna Loa (Hawaii) and the South Pole. Carbon figures before 1958 come from measurements of ice core samples in Antarctica.</em></p>
    </div>

    <div>
      <h1 style={{textAlign: "center"}}>Learn more</h1>
      <div className="video">
        <iframe
          className="video-iframe"
          title="A Year In the Life of Earth's CO2"
          src='https://www.youtube.com/embed/x1SgmFa0r04'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
    </div>
    </div>

    <div>
           <p>Results from dataset are pulled from https://data.giss.nasa.gov/modelforce/ghgases/Fig1A.ext.txt. Dataset was also used for 2000-2011, with NOAA/ESRL trends added to 2003 data. De-seasonalized values were used for August of the given year to calculate for birth years 2012-2020<br />
          <br />Learn more at nature.org/ncs</p>
          <p>Social ... put apps here</p>
    </div>
    </>
  )
}

export default Blurb;