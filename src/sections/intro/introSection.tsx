import { Box, Typography } from '@mui/material'
import React from 'react'

export const IntroSection = () => {
  return (
   <Box py={4}>
    <Typography variant='h6'>Hello my name is</Typography>
    <Typography variant='h2' mb={1} fontWeight={500}>Zimba Dev  </Typography>
    <Typography variant='h5' mb={3}>I am a data scientist</Typography>
    <Typography maxWidth={500}>Thank you for visiting my site</Typography>
   </Box>
  );
};

