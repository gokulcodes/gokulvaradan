"use client";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Splash from "@/components/Splash";
import Stacks from "@/components/Stacks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(useGSAP, SplitText);

// const projects = [
//   {
//     name: "Markdown Canvas",
//     image: "/markdown.png",
//     link: "https://markdown.gokulcodes.dev/",
//   },
//   {
//     name: "Ideal Editor",
//     image: "/ideal.png",
//     link: "https://ideal.gokulcodes.dev/",
//   },
//   {
//     name: "Gamuts",
//     image: "/gamuts.png",
//     link: "https://gamuts.gokulcodes.dev/",
//   },
//   {
//     name: "Circles",
//     image: "/circles.svg",
//     link: "https://circles.gokulcodes.dev/",
//   },
// ];

export default function Home() {
  const container = useRef(null);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 1500);
  }, []);

  // useGSAP(
  //   () => {
  //     new SplitText(".title0", {
  //       type: "lines",
  //       mask: "lines",
  //       onSplit(self) {
  //         gsap.fromTo(
  //           self.lines,
  //           {
  //             y: 400,
  //             autoAlpha: 0,
  //             scrambleText: {
  //               text: "I'm Gokul Varadan",
  //               chars: "XO",
  //               speed: 0.4,
  //             },
  //           },
  //           {
  //             duration: 1,
  //             y: 0,
  //             scrambleText: {
  //               text: "I'm Gokul Varadan",
  //               chars: "XO",
  //               speed: 0.4,
  //             },
  //             autoAlpha: 1,
  //             stagger: 0.05,
  //           }
  //         );
  //         // self.lines.forEach((line) => {
  //         //   gsap.to(line, {
  //         //     duration: 5,
  //         //     scrambleText: {
  //         //       text: "I'm Gokul Varadan", // could customize per line
  //         //       chars: "1X$O3",
  //         //       speed: 0.4,
  //         //     },
  //         //     ease: "expo.inOut",
  //         //     delay: 0.2,
  //         //   });
  //         // });
  //       },
  //     });
  //     new SplitText(".title1", {
  //       type: "lines",
  //       mask: "lines",
  //       onSplit(self) {
  //         gsap.fromTo(
  //           self.lines,
  //           {
  //             delay: 0.1,
  //             y: 400,
  //             autoAlpha: 0,
  //             // scrambleText: {
  //             //   text: "I'm Gokul Varadan",
  //             //   chars: "XO",
  //             //   speed: 0.4,
  //             // },
  //           },
  //           {
  //             delay: 0.1,
  //             duration: 1,
  //             y: 0,
  //             // scrambleText: {
  //             //   text: "I'm Gokul Varadan",
  //             //   chars: "XO",
  //             //   speed: 0.4,
  //             // },
  //             autoAlpha: 1,
  //             stagger: 0.05,
  //           }
  //         );
  //         // self.lines.forEach((line) => {
  //         //   gsap.to(line, {
  //         //     duration: 5,
  //         //     scrambleText: {
  //         //       text: "I'm Gokul Varadan", // could customize per line
  //         //       chars: "1X$O3",
  //         //       speed: 0.4,
  //         //     },
  //         //     ease: "expo.inOut",
  //         //     delay: 0.2,
  //         //   });
  //         // });
  //       },
  //     });
  //     new SplitText(".description", {
  //       type: "lines",
  //       mask: "lines",
  //       onSplit(self) {
  //         gsap.fromTo(
  //           self.lines,
  //           {
  //             y: 500,
  //             autoAlpha: 0,
  //           },
  //           {
  //             duration: 1,
  //             y: 0,
  //             autoAlpha: 1,
  //             stagger: 0.01,
  //           }
  //         );
  //       },
  //     });
  //     const tl = gsap.timeline();
  //     gsap.set(".reveal", {
  //       transformOrigin: "left center", // default grow from left
  //       ease: "expo.inOut",
  //     });

  //     tl.from(".reveal", { width: "0%", duration: 1 }) // Grow from left to right
  //       .to(".reveal", { width: "100%", duration: 1 }) // Hold full width (optional)
  //       .set(".reveal", { transformOrigin: "right center" }) // Switch origin to right
  //       .to(".reveal", { width: "0%", duration: 1 });
  //   },
  //   { scope: container, dependencies: [container] }
  // );

  return (
    <div ref={container}>
      <Splash />
      {showPage ? (
        <>
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Stacks />
          <Footer />
          <a
            href="/Gokul_Varadan.pdf"
            download={true}
            className="fixed flex items-center gap-2 font-extralight  shadow-2xl text-sm bottom-5 md:bottom-10 font-display cursor-pointer hover:drop-shadow-[10px_10px_0px_rgba(72,223,105,0.5)] p-4 md:px-6 md:py-4 hover:text-primary border border-primary right-5 md:right-10 bg-background drop-shadow-[5px_5px_0px_rgba(72,223,105,0.5)]"
          >
            <p className="link hidden md:block text-xs 2xl:text-base ">
              Export Resume
            </p>
            <Image
              src="/download.svg"
              className="w-4 2xl:w-5 invert"
              alt=""
              width={100}
              height={100}
              loading="lazy"
            />
          </a>
        </>
      ) : null}
    </div>
  );
}
