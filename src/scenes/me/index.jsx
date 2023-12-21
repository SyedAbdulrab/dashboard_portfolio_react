import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ProjectsIcon from "@mui/icons-material/WorkTwoTone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import PieChart from "../../components/PieChart";

import {   GitHub,  Instagram, LinkedIn, Twitter, Work } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Me = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const colors = tokens(theme.palette.mode);
  return (
    <Box p="20px">
      <Header title="Syed Abdulrab" subtitle="My portfolio page" />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gap="20px"
        gridAutoRows={"140px"}
      >
        <Box
          gridColumn={"span 6"}
          bgcolor={colors.primary[400]}
          gridRow={"span 1"}
          p={"20px"}
          borderRadius={"4px"}
        >
          <Typography color={colors.grey[100]} variant="h3">
            Hi there 👋 I'm Syed Abdulrab, A{" "}
            <Typography
              display={"inline"}
              variant="h3"
              color={colors.greenAccent[500]}
            >
              pro
            </Typography>
            grammer.
          </Typography>
          <Typography mt={"10px"} variant="h5">
            I'm a Software Engineering student at NUST, SEECS and a freelance
            full stack web developer.
          </Typography>
        </Box>

        <Box
          gridColumn={"span 6"}
          bgcolor={colors.primary[400]}
          gridRow={"span 3"}
          p={"20px"}
          borderRadius={"4px"}
        >
          <Typography variant="h4" fontWeight={600} color={colors.grey[100]}>
            My{" "}
            <Typography
              display={"inline"}
              variant="h3"
              color={colors.greenAccent[500]}
            >
              Web Development
            </Typography>{" "}
            Skills
          </Typography>
          <PieChart />
        </Box>

        
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
          sx={{
            "&:hover":{
                backgroundColor:'#2f3f5e',
                cursor:'pointer',
                borderRadius:'0px'
            },
            
          }}
        >
          <StatBox
          isIconButton={true}
            title={"7 Courses"}
            subtitle="view Details"
            progress="0.30"
            increase={"+5%"}
            icon={
              <WorkHistoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
          sx={{
            "&:hover":{
                backgroundColor:'#2f3f5e',
                cursor:'pointer',
                borderRadius:'0px'
            }
          }}
        >
          <StatBox
            title={"13 Projects"}
            subtitle="View Details"
            progress="0.90"
            increase={"+89%"}
            icon={
              <ProjectsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        {/* CONTACT ME */}
        <Box
        p={'20px'}
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display="grid"
        gridTemplateColumns={'repeat(4,1fr)'}
          borderRadius={"4px"}
          sx={{
            "&:hover":{
                backgroundColor:'#2f3f5e',
                cursor:'pointer',
                borderRadius:'0px'
            }
          }}
        >
           <Box
            gridColumn={'span 4'}
           >
            <ContactMailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
           <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            Contact me 
          </Typography>
           </Box>

           
            <IconButton onClick={()=>( window.location.href = 'https://www.instagram.com/syed_x34/')}>
               <Instagram />
            </IconButton>
            <IconButton>
                <LinkedIn onClick={()=>( window.location.href = 'https://www.linkedin.com/in/syed-abdulrab-412476225')}/>
            </IconButton>
            <IconButton>
                <Work onClick={()=>( window.location.href = 'https://www.upwork.com/freelancers/~01c0c0b9122a05f44b')}/>
            </IconButton>
            <IconButton>
                <GitHub onClick={()=>( window.location.href = 'https://github.com/SyedAbdulrab')}/>
            </IconButton>
         
           
          
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"4px"}
          sx={{
            "&:hover":{
                backgroundColor:'#2f3f5e',
                cursor:'pointer',
                borderRadius:'0px'
            }
          }}
        >
          <StatBox
            title={"3 Verified Reviews"}
            subtitle="View Details"
            progress="0.100"
            increase={"+200%"}
            icon={
              <ReviewsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Me;
