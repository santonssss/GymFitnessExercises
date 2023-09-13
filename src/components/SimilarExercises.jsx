import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";
import Loaded from "./Loaded.jsx";
const SimilarExercises = ({ equipment, target }) => {
  return (
    <Box
      sx={{
        mt: {
          lg: "100px",
          xs: "0",
        },
      }}
    >
      <Typography variant="h3">
        Exercise that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2px",
          position: "relative",
        }}
      >
        {" "}
        {target.length ? <HorizontalScrollbar data={target} /> : <Loaded />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
