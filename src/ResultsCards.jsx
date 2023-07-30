import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useTrail, animated } from 'react-spring';

const ResultsCards = ({ month, year, avg, increase, difference, trend }) => {

  // Create an array of styles for each card
  const trail = useTrail(4, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const cardData = [
    {
      title: `In ${month} ${year}, there were`,
      value: `${avg} ppm`,
      subtitle: 'carbon in the atmosphere.',
    },
    {
      title: 'Today, there are',
      value: '423.68 ppm',
      subtitle: 'carbon in the atmosphere.',
    },
    {
      title: `That's an increase of`,
      value: `${increase} ppm`,
      subtitle: 'during your lifetime thus far.',
    },
    {
      title: 'These levels are speeding up. \n\n As a comparison, carbon only increased',
      value: `${trend} ppm`,
      subtitle: `during the ${difference} years before your birth.`,
    },
  ];

  return (
    <>

      <Grid container spacing={2} sx={{ padding: '35px' }}>
        {trail.map((props, index) => (
          <Grid  className="card" item xs={12} sm={6} md={3} key={index}>
            <animated.div
              style={{
                ...props,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
                padding: '15px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: '1px solid #287AB8'
              }}
            >
              <Typography  variant="h5" align="center" sx={{ fontSize: '1.5rem', mb: '8px' }}>
                {cardData[index].title}
              </Typography>
              <Typography component="span" variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: '2rem',
                  textAlign: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  backgroundImage: 'linear-gradient(to right, red, red 50%, #000 50%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '-100%',
                  display: 'inline-block',
                  padding: '5px 0',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  transition: 'all 0.3s ease-in-out',
                  "&::before": {
                    content: "''",
                    background: 'red',
                    display: 'block',
                    position: 'absolute',
                    bottom: '-3px',
                    left: 0,
                    width: 0,
                    height: '3px',
                    transition: 'all 0.3s ease-in-out',
                  },
                  "&:hover": {
                    backgroundPosition: '0',
                    "&::before": {
                      width: '100%',
                    },
                  },
                }}
              >
                {cardData[index].value}
              </Typography>
              <Typography variant="h5" align="center" sx={{ fontSize: '1.5rem', mt: '8px' }}>
                {cardData[index].subtitle}
              </Typography>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ResultsCards;


