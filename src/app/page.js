"use client";
import Image from "next/image";
// import styles from './page.module.css'
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import NavBottom from "@/components/NavBottom";
import Banner from "@/components/Banner";
import Unit from "@/components/Unit";
import Lokasi from "@/components/Lokasi";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          padding: "0",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Image src="/wave.svg" height={50} width={200} layout="responsive"  />
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <Image src="/logo2.png" width={250} height={150} />
        </Box>
        <Image src="/image1.png" width={500} height={600} layout="responsive" />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#e2ff00",
            padding: "15px",
            backgroundColor: "#599959",
          }}
        >
          Stok Terakhir - 1,8M an - 2 Lantai
        </Typography>
        <Banner />
        <Unit />
        <Lokasi />
        <Image src="/wave-bottom.svg" height={50} width={200} layout="responsive"  />
        <NavBottom />
      </Container>
    </>
  );
}
