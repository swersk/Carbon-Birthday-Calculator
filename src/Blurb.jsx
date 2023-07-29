import App from './App.jsx';
import React from 'react';
import { styled } from '@mui/system';
import PropTypes from "prop-types";

const Blurb = () => {
  return (
    <>
   <br /> <div className="carbonWrapper">
      <p style={{ marginTop: '18px' }}><em>Carbon dioxide in the atmosphere is measured in parts per million (ppm).< br /> Yearly average carbon figures come from Hawaii, the South Pole and Antarctica. </em></p>
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
           <p><small><br />Results from dataset are pulled from https://data.giss.nasa.gov/modelforce/ghgases/Fig1A.ext.txt. Dataset was also used for 2000-2011, with NOAA/ESRL trends added to 2003 data. De-seasonalized values were used for August of the given year to calculate for birth years 2012-2020</small><br />
          <br /></p>
    </div>
    </>
  )
}

export default Blurb;