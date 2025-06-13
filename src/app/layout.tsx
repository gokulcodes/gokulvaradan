"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  useGSAP,
  Draggable,
  DrawSVGPlugin,
  ScrambleTextPlugin,
  ScrollTrigger,
  SplitText,
  ScrambleTextPlugin,
  TextPlugin
);
// import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Gokul Varadan",
//   description:
//     "I'm a Full Stack Engineer with a strong passion for building powerful and elegant applications using JavaScript and its ecosystem.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Unbounded:wght@200..900&display=swap"
        rel="stylesheet"
      />
      <title>Gokul Varadan | Engineering Portfolio</title>
      <meta property="og:title" content="Gokul Varadan" />
      <meta
        name="description"
        content="I'm a Full Stack Engineer with a strong passion for building powerful and elegant applications using JavaScript and its ecosystem."
      />
      <meta
        property="og:description"
        content="I'm a Full Stack Engineer with a strong passion for building powerful and elegant applications using JavaScript and its ecosystem."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gokulcodes.dev/" />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/51291254?s=400&u=dae101ff18eea2cf1428d3cb8385ab7260689a85&v=4"
      />
      <meta property="og:site_name" content="Gokul Varadan" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2025-06-13T06:42:11.155Z" />
      {/* <link rel="icon"  href="/gamuts.svg" /> */}
      <body
        className="overflow-x-hidden"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
