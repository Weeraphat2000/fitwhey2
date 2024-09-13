import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ButtonHome() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/">
        <Button
          variant="outlined"
          sx={{ margin: "20px", backgroundColor: "white" }}
        >
          Home
        </Button>
      </Link>
    </Box>
  );
}

export default ButtonHome;
