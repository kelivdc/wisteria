import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Unit() {
  return (
    <>
      <Box
        sx={{
          border: "solid 1px #ccc",
          padding: "15px",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        <Typography>Unit yang tersedia saat ini</Typography>
        <Typography fontWeight="bold">Type A (7x12)</Typography>
        <Typography>
          LT 84 m<sup>2</sup> / LB 79 m<sup>2</sup>
        </Typography>
      </Box>
      <Grid container spacing={2} padding="10px">
        <Grid item xs={12} md={6}>
          <Image
            src="/unit1.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/unit2.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/unit3.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/unit4.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/unit5.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/unit6.png"
            width={1755}
            height={920}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Unit;
