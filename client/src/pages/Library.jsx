import React from "react";
import { Box, Typography, List } from "@mui/material";
import { useSelector } from "react-redux";
import PlayListItem from "../components/PlayListItem";

export default function Library() {
  const { albumList, status } = useSelector((state) => state.playlist);
  console.log(albumList);
  return (
    <Box
      px={3}
      sx={{
        display: "flex",
        bgcolor: "background.default",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        py={3}
        variant="h2"
        fontWeight="bold"
        sx={{ color: "text.primary", fontSize: 30 }}
      >
        ditt bibliotek
      </Typography>
      <List>
        {status.isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <PlayListItem loading={true} />
            ))
          : albumList.map((album) => (
              <PlayListItem
                key={album.id}
                name={album.name}
                image={album.images[0].url}
                id={album.id}
              />
            ))}
      </List>
    </Box>
  );
}
