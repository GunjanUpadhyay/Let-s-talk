import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1"} height={"100%"}>
      <Typography>
        Let's Talk
      </Typography>

    </Box>

  )
}

export default AppLayout()(Home);