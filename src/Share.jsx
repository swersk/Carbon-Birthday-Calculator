import React from 'react';
import { Button, Typography, MenuItem, Select, FormControl, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Share = () => {

const handleClick = () => {
 // const shareText = `Check out my birth ppm! What's yours?`
  const emailSubject = `What's your birth ppm?`
  const emailBody= `Hey, I found this cool website. Check it out.`
  const emailLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
 // const smsLink = `sms:?body=${encodeURIComponent(shareText)}`

  window.open(emailLink);
 // window.open(smsLink);
}

  return (
    <div id="share">
      <Box
      sx={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
      }}
      >
      <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            width: "fit-content",
            fontSize: "1rem",
            ":hover": { bgcolor: "lightBlue" },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          SHARE MY RESULTS
        </Button>
        </Box>
    </div>
  )
}

export default Share;