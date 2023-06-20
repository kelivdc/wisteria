import './globals.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wisteria - Perumahan Metland Jakarta Timur",
  description: "Rumah Mewah 2 Lantai di Jakarta Timur, fasilitas lengkap. Stok terakhir Developer Ternama by Keppelland dan Metland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
