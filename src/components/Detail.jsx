import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import targetImage from "../assets/icons/target.png";
import bodyPartImage from "../assets/icons/body-part.png";
import equipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      id: 1,
      name: bodyPart,
      icon: bodyPartImage,
    },
    {
      id: 2,
      name: target,
      icon: targetImage,
    },
    {
      id: 3,
      name: equipment,
      icon: equipmentImage,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
          }}
          variant="h3"
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy{" "}
        </Typography>
        {extraDetail.map((item) => {
          return (
            <Stack
              key={item.id}
              direction="row"
              alignItems={"center"}
              gap="25px"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform={"capitalize"}
                variant="h5"
                color="black"
              >
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
