import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

export default function Splash() {
  const splashRef = useRef(null);

  useGSAP(
    () => {
      // gsap.fromTo(
      //   splashRef.current,
      //   {
      //     delay: 2,
      //     ease: "power4.inOut",
      //     height: "100vh",
      //     //   duration: 1,
      //     //   opacity: 1,
      //   },
      //   {
      //     delay: 2,
      //     ease: "power4.inOut",
      //     height: "0vh",
      //     //   duration: 1,
      //     //   opacity: 0,
      //   }
      // );
      gsap.fromTo(
        ".splashImage",
        {
          x: 0,
          duration: 80,
          yoyo: true,
          repeat: -1,
        },
        {
          x: 1000,
          duration: 80,
          yoyo: true,
          repeat: -1,
        }
      );
      new SplitText(".splash-text-0", {
        type: "lines",
        mask: "lines",
        onSplit(self) {
          gsap.fromTo(
            self.lines,
            {
              y: 400,
              opacity: 1,
              autoAlpha: 0,
              //   scrambleText: {
              //     text: "I'm Gokul Varadan",
              //     chars: "XO",
              //     speed: 0.4,
              //   },
            },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              //   scrambleText: {
              //     text: "I'm Gokul Varadan",
              //     chars: "XO",
              //     speed: 0.4,
              //   },
              autoAlpha: 1,
              stagger: 0.05,
            }
          );
          // self.lines.forEach((line) => {
          //   gsap.to(line, {
          //     duration: 5,
          //     scrambleText: {
          //       text: "I'm Gokul Varadan", // could customize per line
          //       chars: "1X$O3",
          //       speed: 0.4,
          //     },
          //     ease: "expo.inOut",
          //     delay: 0.2,
          //   });
          // });
        },
      });
      new SplitText(".splash-text-1", {
        type: "words, chars",
        mask: "words",
        onSplit(self) {
          gsap.fromTo(
            self.chars,
            {
              delay: 0.2,
              y: 400,
              opacity: 1,
              autoAlpha: 0,
            },
            {
              delay: 0.2,
              duration: 1,
              opacity: 1,
              y: 0,
              autoAlpha: 1,
              stagger: 0.05,
            }
          );
        },
      });
    },
    { scope: splashRef }
  );

  return (
    <div
      ref={splashRef}
      className="absolute top-0 left-0 w-full dark:bg-background bg-white overflow-hidden h-[100vh] splash z-50"
    >
      <div className="flex items-center absolute top-[25%] md:top-0 -z-10 left-0 w-full gap-32 justify-center transform scale-200 splashImage md:scale-150">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            key={index}
            src="/splash_bg.svg"
            className="dark:invert scale-110"
            alt=""
            width={1000}
            height={1000}
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex flex-col w-full items-center justify-center h-full">
        <p className="splash-text-0 font-display uppercase text-6xl font-bold">
          Gokul
        </p>
        <p className="splash-text-1 font-display font-semibold uppercase text-primary text-4xl">
          Codes.dev
        </p>
      </div>
    </div>
  );
}
