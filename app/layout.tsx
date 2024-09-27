import type { Metadata } from "next";
import {
  Inter,
  Inria_Sans,
  Roboto_Slab,
  Lato,
  Roboto_Serif,
} from "next/font/google";
// import "normalize.css/normalize.css";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-inria",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-roboto-slab",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-lato",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-roboto-serif",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Know about me and my work",
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inria.variable} ${robotoSlab.variable} ${lato.variable} ${robotoSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
