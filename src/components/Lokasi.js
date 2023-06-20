import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Lokasi() {
  return (
    <Box margin="15px">
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#44b944",
          fontSize: "22px",
          borderTop: "solid 1px #ccc",
          borderBottom: "solid 1px #ccc",
        }}
      >
        Lokasi
      </Typography>
      <Image src="/peta.png" width={1280} height={720} layout="responsive" />
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#44b944",
          fontSize: "18px",
        }}
      >
        Jl. Menteng Niaga, Cakung, Jakarta Timur
      </Typography>
    </Box>
  );
}

export default Lokasi;
