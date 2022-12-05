import React from "react";
import { Box, Button } from "@mui/material";
import { accessUrl } from "../config/config";

export default function Login() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button href={accessUrl} variant="contained" size="large">
        Login in to Spotify
      </Button>
    </Box>
  );
}
