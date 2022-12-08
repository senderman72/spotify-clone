import React from "react";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        background: "linear-gradient(#121212,#58181F )",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
        flex: 1,
      }}
    >
      <img
        src="/URZ08193.jpg"
        style={{ maxHeight: "50%", maxWidth: "50%", borderRadius: "25px" }}
        alt="Erik Persson"
      />
      <Button
        size="large"
        variant="contained"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/erik-persson-081128222/")
        }
      >
        Linkedin
      </Button>
    </Box>
  );
}
