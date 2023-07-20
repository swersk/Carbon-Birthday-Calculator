import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
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
      <Grid container spacing={2}>
        {trail.map((props, index) => (
          <Grid item xs={3} key={index}>
            <animated.div
              style={{
                ...props,
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
                {cardData[index].title}
              </Typography>
              <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
                {cardData[index].value}
              </Typography>
              <Typography variant="h5" align="center">
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





// import React from 'react';
// import { Typography, Box, Grid } from '@mui/material';

// const ResultsCards = ({ month, year, avg, increase, difference, trend }) => {
//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={3}>
//           <Box
//             sx={{
//               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '4px',
//               padding: '15px',
//               height: '90%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <Typography variant="h5" align="center">
//               In {month} {year}, there were
//             </Typography>
//             <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
//               {avg} ppm
//             </Typography>
//             <Typography variant="h5" align="center">
//               carbon in the atmosphere.
//             </Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={3}>
//           <Box
//             sx={{
//               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '4px',
//               padding: '15px',
//               height: '90%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <Typography variant="h5" align="center">
//               Today, there are
//             </Typography>
//             <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
//               423.68 ppm
//             </Typography>
//             <Typography variant="h5" align="center">
//               carbon in the atmosphere.
//             </Typography>
//           </Box>
//         </Grid>


//         <Grid item xs={3}>
//           <Box
//             sx={{
//               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '4px',
//               padding: '15px',
//               height: '90%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <Typography variant="h5" align="center">
//               That's an increase of
//             </Typography>
//             <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
//               {increase} ppm
//             </Typography>
//             <Typography variant="h5" align="center">
//               during your lifetime thus far.
//             </Typography>
//           </Box>
//         </Grid>


//         <Grid item xs={3}>
//           <Box
//             sx={{
//               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '4px',
//               padding: '15px',
//               height: '90%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <Typography variant="h5" align="center">
//               These levels are speeding up. <br /><br /> As a comparison, carbon only increased
//             </Typography>
//             <Typography variant="h5" align="center">
//               <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }} align="center">
//                 {trend} ppm
//               </Typography>
//             </Typography>
//             <Typography variant="h5" align="center">
//               during the {difference} years <b>before</b> your birth.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   )
// };

// export default ResultsCards;