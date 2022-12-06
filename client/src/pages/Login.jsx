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
        flexDirection: "column",
      }}
    >
      <img
        src="/Spotify_Logo.png"
        alt="Spotify"
        style={{ marginBottom: 300, width: "70%", maxWidth: 500 }}
      />
      <Button href={accessUrl} variant="contained" size="large">
        Login in to Spotify
      </Button>
    </Box>
  );
}
