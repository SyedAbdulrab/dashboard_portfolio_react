import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

import React from "react";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title={"FAQ"}
        subtitle={"Frequently Asked Questions Page"}
      ></Header>
      <Accordian  sx={{
        backgroundColor:colors.blueAccent[800]
      }}>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How many Years of experience do you have with MERN stack Development?
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Approximately Two Years.
          </Typography>
        </AccordianDetails>
      </Accordian>

      <Accordian defaultExpanded sx={{
        backgroundColor:colors.blueAccent[800]
      }}>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Have you tried Mobile App Devlopment?
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Yes, I've made around 13 super cool Flutter mobile applications too.
          </Typography>
        </AccordianDetails>
      </Accordian>

      <Accordian sx={{
        backgroundColor:colors.blueAccent[800]
      }}
      >
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do You have any prior Work experience?
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Yes, I have worked as a CTO in a blooming Startup called ITFactori and as a Senior Backend Developer in a Nigerian Company called Spec Engineering.
          </Typography>
        </AccordianDetails>
      </Accordian>

      <Accordian sx={{
        backgroundColor:colors.blueAccent[800]
      }}>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A random fact about you?
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            I love going to the gym and I can keep looking at the moon for hours.
          </Typography>
        </AccordianDetails>
      </Accordian>
      <Accordian defaultExpanded sx={{
        backgroundColor:colors.blueAccent[800]
      }}>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to contact you?
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            You can contact me on my email: <a style={{color:colors.greenAccent[500],textDecoration:"none"}} href="mailto:syedabdulrab1133@gmail.com">syedabdulrab1133@gmail.com</a> or hit me up on my socials which I've linked on the home page. Top Right Corner - Profile Icon - bottom left Corner
          </Typography>
        </AccordianDetails>
      </Accordian>

    </Box>
  );
};

export default FAQ;
