import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto_Slab, Alegreya, Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather", // Create a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Team's Messenger",
  description: "Seclock Team Messenger",
};
const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

// Import Google Fonts
const alegreya = Alegreya({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-alegreya",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${robotoSlab.variable} ${alegreya.variable} antialiased`} // Ensure body gets the dark class from ThemeProvider
      >
        {children}
      </body>
    </html>
  );
}
