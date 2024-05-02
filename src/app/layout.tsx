import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeClient",
  description: "An application that brings together several anime streaming platforms ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#171717" />
      <meta name="og:description" content="An application that brings together several anime streaming platforms vostfr/vf sub/dub" />
      <meta name="Keywords" content="anime,player,anilist,list,crunchyroll,application,program,windows,mac,linux,cross-platform" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zvbt.github.io/AnimeClient/" />
      <meta property="og:title" content="AnimeClient - Anime Player" />
      <meta property="og:description" content="An application that brings together several anime streaming platforms vostfr/vf sub/dub" />
      <meta property="og:image" content="https://i.imgur.com/NGJwflq.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://zvbt.github.io/AnimeClient/" />
      <meta property="twitter:title" content="AnimeClient - Anime Player" />
      <meta property="twitter:description" content="An application that brings together several anime streaming platforms vostfr/vf sub/dub" />
      <meta property="twitter:image" content="https://i.imgur.com/NGJwflq.png" />
      <link rel="icon" href="./assets/logo.png" />
      <body className={`${inter.className} ctp-mocha`}>{children}</body>
    </html>
  );
}
