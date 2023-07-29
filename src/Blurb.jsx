const Blurb = () => {

  return (
    <>
      <div>
        <br />
        <div className="carbonWrapper">
          <p style={{
            marginTop: '12px',
            fontSize: '0.9rem'
          }}><em>Carbon dioxide in the atmosphere is measured in parts per million (ppm).< br /> Yearly average carbon figures come from Hawaii, the South Pole and Antarctica. </em></p>
        </div>
        <div>
          <h1 style={{ textAlign: "center", marginBottom: '10px' }}>Learn more</h1>
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
          <span className="footer" style={{ maxWidth: '100%' }}><small><br />Results from dataset are pulled from https://data.giss.nasa.gov/modelforce/ghgases/Fig1A.ext.txt. Dataset was also used for 2000-2011, with NOAA/ESRL trends added to 2003 data. De-seasonalized values were used for August of the given year to calculate for birth years 2012-2020.</small><br />
            <br /></span>
        </div>
      </div>
    </>
  )
}

export default Blurb;