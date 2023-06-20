import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

function Banner() {
  return (
    <Grid container spacing={2} padding="10px">
      <Grid item xs={12} md={6}>
        <Image
          src="/banner.jpeg"
          width={1600}
          height={1600}
          layout="responsive"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography >
          Wisteria adalah sebuah perumahan yang indah yang terletak di daerah
          yang tenang dan subur. Dibangun dengan konsep modern dan desain yang
          menawan, perumahan ini menawarkan lingkungan yang nyaman dan fasilitas
          yang lengkap. Perumahan Wisteria terletak di sebuah daerah yang
          strategis, dekat dengan pusat kota namun tetap terjauh dari keramaian.
          Perumahan ini dikelilingi oleh pemandangan alam yang indah, seperti
          pegunungan, hutan, dan taman-taman yang hijau. Aksesibilitasnya yang
          baik membuatnya mudah dijangkau dari berbagai titik di sekitarnya.
          Wisteria menawarkan desain modern dan estetika yang menawan. Setiap
          unit perumahan dirancang dengan cermat untuk memberikan ruang yang
          luas, pencahayaan alami yang cukup, dan penggunaan bahan-bahan
          berkualitas tinggi. Arsitektur bangunan yang elegan dan detail-detail
          yang dipilih dengan teliti menciptakan suasana yang nyaman dan indah.
        </Typography>
        <Typography sx={{
        backgroundColor: "#f0f0f0"
      }}>
          <List>
          <Typography sx={{
            color: "#2d8f2d",
            fontWeight: "bold"
          }}>
            Dapatkan beberapa Bonus untuk perumahan Siap Huni ini
            </Typography>
            <ListItem sx={{ color: "#2d8f2d"}}>
              <ListItemIcon sx={{ color: "#2d8f2d"}}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Subsidi biaya KPR + Bunga" />
            </ListItem>
             <ListItem sx={{ color: "#2d8f2d"}}>
              <ListItemIcon sx={{ color: "#2d8f2d"}}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Free AJB" />
            </ListItem>
             <ListItem sx={{ color: "#2d8f2d"}}>
              <ListItemIcon sx={{ color: "#2d8f2d"}}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Free IPL" />
            </ListItem>
             <ListItem  sx={{ color: "#2d8f2d"}}>
              <ListItemIcon sx={{ color: "#2d8f2d"}}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Free AC + Water Heater" />
            </ListItem>
          </List>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Banner;
