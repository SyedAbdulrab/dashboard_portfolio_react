import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import React from 'react'

const Line = () => {
  return (
    <Box m='20px'>
        <Header title={'Line Chart'} subtitle={'A Simple Line Chart'}/>
        <Box height='68vh' >
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Line