import { Analytics } from "@vercel/analytics/react";
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
    url: "https://www.icetheme.in/", // Website Url
    image: "https://i.imgur.com/qxYF0Cv.jpeg", // Thumbnail
    type: "website",
    site_name: "Ice Theme"
  },
  canonical: "https://www.icetheme.in/" // Website Url
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        
        {/* HTML Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:domain" content="icetheme.in" />
        <meta property="twitter:url" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>

      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}