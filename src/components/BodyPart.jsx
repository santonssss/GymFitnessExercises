import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";
const BodyPart = ({ bodyPart, setBodyPart, item }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      type="button"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} style={{ width: "40px", height: "40px" }} alt="" />
      <Typography
        fontSize={"20px"}
        fontWeight={"bold"}
        color="#3A1212"
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
