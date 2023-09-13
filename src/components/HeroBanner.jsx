import { Box, Typography, Button, Stack } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        fontSize={"26px"}
        color={"#ff2625"}
        fontWeight={600}
        mt="30px"
        mb="23px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography lineHeight="35px" mb={4}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
        color="error"
        variant="contained"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={700}
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        Exercises
      </Typography>
      <img className="hero-banner-img" src={HeroBannerImage} alt="banner" />
    </Box>
  );
};

export default HeroBanner;
