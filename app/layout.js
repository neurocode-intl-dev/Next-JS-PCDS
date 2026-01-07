import { Poppins, Abyssinica_SIL } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["400"],

  variable: "--font-poppins",

  display: "swap",

  preload: true,

  fallback: ["system-ui", "arial"],

  adjustFontFallback: true,
});

const abyssinica = Abyssinica_SIL({
  subsets: ["latin"],

  weight: ["400"],

  variable: "--font-abyssinica",

  display: "swap",

  preload: true,

  fallback: ["system-ui", "serif"],

  adjustFontFallback: true,
});

export const metadata = {
  title: "Care With Heart",
  description:
    "Care With Heart – Compassionate NDIS and home nursing services delivering care with dignity and love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${abyssinica.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
