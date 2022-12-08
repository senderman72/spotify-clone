import React from "react";
import { BottomNavigationAction, Box, BottomNavigation } from "@mui/material";
import { Home, List } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#f00", display: { xs: "block", md: "none" } }}>
      <BottomNavigation sx={{ bgcolor: "background.paper" }} showLabels>
        <BottomNavigationAction
          sx={{ color: "text.secondary" }}
          label="home"
          icon={<Home />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          sx={{ color: "text.secondary" }}
          label="Ditt bibliotek"
          icon={<List />}
          onClick={() => navigate("/Library")}
        />
      </BottomNavigation>
    </Box>
  );
}
