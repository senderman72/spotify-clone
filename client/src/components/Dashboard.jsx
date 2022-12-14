import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidenav from "./Sidenav";
import { Box } from "@mui/material";
import Home from "../pages/Home";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../store/playListSlice";
import { getAccessTokenFromStorage } from "../utils/getAccessTokenFromStorage";
import Playlist from "../pages/Playlist";
import Player from "./Player";
import MobileNav from "./MobileNav";
import Library from "../pages/Library";

export default function Dashboard({ spotifyApi }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getAccessTokenFromStorage();

    const onMount = async () => {
      await spotifyApi.setAccessToken(accessToken);
      dispatch(getPlaylist(spotifyApi));
    };
    if (accessToken) {
      onMount();
    }
  }, [spotifyApi, dispatch]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/playlist/:id"
            element={<Playlist spotifyApi={spotifyApi} />}
          />
        </Routes>
      </Box>
      <Player spotifyApi={spotifyApi} />
      <MobileNav />
    </Box>
  );
}
