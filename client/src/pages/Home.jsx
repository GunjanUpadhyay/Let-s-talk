import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100%"}>
      <Typography p={'2rem'} variant='h5' textAlign={"center"}>
        Let's Talk with new people
      </Typography>

    </Box>

  )
}

export default AppLayout()(Home);