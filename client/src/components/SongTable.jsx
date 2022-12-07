import React from "react";
import { Box, Grid } from "@mui/material";
import { AccessTimeRounded } from "@mui/icons-material";

export default function SongTable() {
  return (
    <Box p={{ xs: 3, md: 4 }} sx={{}}>
      <Grid
        container
        px={2}
        py={1}
        sx={{ fontSize: 14, color: "text.secondary" }}
      >
        <Grid
          item
          sx={{
            width: 35,
            display: "flex",
            alignItems: "center",
          }}
        >
          #
        </Grid>
        <Grid
          item
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          title
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          Album
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <AccessTimeRounded sx={{ width: 20, height: 20 }} />
        </Grid>
      </Grid>
    </Box>
  );
}
