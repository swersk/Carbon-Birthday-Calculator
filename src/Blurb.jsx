const Blurb = () => {
  return (
    <>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <br />

        <div className="carbonWrapper">
          <p
            style={{
              marginTop: "15px",
              fontSize: "1rem",
            }}
          >
            <em>
              *ppm = parts per million.
              <br />
              <br />
              Measurements are gathered from South Pole and the Mauna Loa
              Observatory in Hawaii.{" "}
            </em>
          </p>
        </div>

        <div style={{ marginTop: "68px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            Learn more
          </h1>
          <div className="video">
            <iframe
              className="video-iframe"
              title="A Year In the Life of Earth's CO2"
              src="https://www.youtube.com/embed/x1SgmFa0r04"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div style={{ maxWidth: "100%", marginTop: "10px" }}>
          <span className="footer">
            <small>
              <br />
              Dataset:
              https://data.giss.nasa.gov/modelforce/ghgases/Fig1A.ext.txt.
              <br /> <br />
            </small>
          </span>
        </div>
      </div>
    </>
  );
};

export default Blurb;
