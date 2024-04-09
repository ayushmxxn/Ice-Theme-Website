import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from '../utils/types';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ice Theme - Make Coding Cooler Than the Other Side of the Pillow.",
  description: "Ice Theme for Visual Studio Code.",
  keywords: "ice theme, Ice Theme, icetheme, vs code theme, coding themes, code editor themes, modern theme, productivity theme, dark theme, blue theme",
  twitter: {
    card: "summary_large_image",
    site: "@AyushmaansinghX",
    title: "Ice Theme - Make Coding Cooler Than the Other Side of the Pillow.",
    description: "Ice Theme for Visual Studio Code.",
   
    images: ["https://i.imgur.com/qxYF0Cv.jpeg"] // Thumbnail
  },
  og: {
    title: "Ice Theme - Make Coding Cooler Than the Other Side of the Pillow.",
    description: "Ice Theme for Visual Studio Code.",
    url: "https://icetheme.in", // Website Url
    image: "https://i.imgur.com/qxYF0Cv.jpeg", // Thumbnail
    type: "website",
    site_name: "Ice Theme"
  },
  canonical: "https://icetheme.in" // Website Url
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
