import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  useGSAP(() => {
    new SplitText(".hero-text-1", {
      type: "words, chars",
      mask: "words",
      onSplit(self) {
        gsap.fromTo(
          self.words,
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
    new SplitText(".paragraph-1", {
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
    new SplitText(".paragraph-2", {
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
    new SplitText(".paragraph-3", {
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
  }, {});

  return (
    <div
      ref={heroRef}
      className="flex justify-center items-center w-full h-[100vh]"
    >
      <div className="flex flex-col border-x dark:border-white/10 dark:invert-0 invert border-black/10 w-11/12 max-w-6xl gap-5 md:gap-10 items-center md:items-start justify-center md:w-full h-full z-0">
        <Image
          src="/profile.svg"
          className="w-12 animate-openUp md:hidden"
          alt=""
          width={100}
          height={100}
          loading="lazy"
        />
        <h1 className="hero-text-1 flex justify-center md:justify-start w-full  items-center gap-2 font-display font-light text-xl md:text-3xl">
          Hello!{" "}
          <span className="font-medium ">
            I&apos;m <span className="text-primary">Gokul Varadan</span>
          </span>
        </h1>
        <div className="flex text-center md:text-left font-extrabold text-3xl md:text-5xl flex-col items-start font-display description">
          <p className="paragraph-1 leading-12 md:leading-18">
            <span
              style={{
                WebkitTextStroke: "4px white",
                paintOrder: "stroke fill",
                // color: "#0a0a0a",
              }}
              className="text-background"
            >
              Passionate
            </span>{" "}
            Software Engineer
          </p>
          <p className="paragraph-2 leading-12 md:leading-18">
            specialized{" "}
            <span
              style={{
                WebkitTextStroke: "4px white",
                paintOrder: "stroke fill",
                // color: "#0a0a0a",
              }}
              className="text-background"
            >
              in building
            </span>
          </p>
          <p className="paragraph-3 leading-12 md:leading-18">
            User-Centric Applications
          </p>
        </div>
      </div>
    </div>
  );
}
