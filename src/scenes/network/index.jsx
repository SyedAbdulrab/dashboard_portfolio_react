import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import NetworkChart from '../../components/NetworkChart'

const Pie = () => {
  return (
    <Box m='20px'>
        <Header title={"NETWORK CHART"} subtitle={"A not so simple Network Chart"}/>
   <Box display={'flex'} flexDirection={'row'}>
   <Box height={'68vh'} width={'37vw'}>  
       <NetworkChart/>
    </Box>
    <Box height={'68vh'} width={'37vw'}>  
       <NetworkChart/>
    </Box>
   </Box>
    </Box>
  )
}

export default Pie