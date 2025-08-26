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
            y: 400,
            opacity: 1,
            autoAlpha: 0,
          },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            stagger: 0.01,
          }
        );
      },
    });
    new SplitText(".paragraph-1", {
      type: "words, lines",
      mask: "lines",
      onSplit(self) {
        gsap.fromTo(
          self.lines,
          {
            delay: 0.9,
            y: 400,
            opacity: 0,
            autoAlpha: 0,
          },
          {
            delay: 0.9,
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            stagger: 0.05,
          }
        );
      },
    });
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        ".logo-lines",
        { drawSVG: "0% 0%" }, // Start with no stroke
        {
          drawSVG: "0% 100%", // Animate stroke from 0 to full
          duration: 5,
          ease: "power1.inOut",
        }
      )
      .to(".logo-lines", {
        drawSVG: "100% 100%", // Hide from start to end
        duration: 5,
        ease: "power1.inOut",
      });
  }, {});

  return (
    <div
      ref={heroRef}
      className="flex justify-center relative items-center w-full h-[100vh]"
    >
      <div className="flex flex-col border-x overflow-hidden relative border-white/0 w-11/12 max-w-4xl 2xl:max-w-7xl gap-5 md:gap-5 2xl:gap-10 items-center md:items-start justify-center lg:w-full h-full z-0">
        <Image
          src="/profile.svg"
          className="w-12 animate-openUp md:hidden"
          alt=""
          width={100}
          height={100}
          loading="lazy"
        />
        <h1 className="hero-text-1 flex justify-center md:justify-start w-full  items-center gap-2 font-display font-light text-xl md:text-2xl 2xl:text-3xl">
          Hello!{" "}
          <span className="font-medium ">
            I&apos;m <span className="text-primary">Gokul Varadan</span>
          </span>
        </h1>
        <div className="flex w-full text-center md:text-left font-extrabold text-3xl md:text-4xl 2xl:text-6xl flex-col items-start font-display description">
          <p
            aria-label="Passionate Software Engineer specialized in building User-Centric Applications at Scale"
            className="paragraph-1 w-full leading-12 md:leading-18 2xl:leading-22"
          >
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
            Software Engineer specialized{" "}
            <span
              style={{
                WebkitTextStroke: "4px white",
                paintOrder: "stroke fill",
                // color: "#0a0a0a",
              }}
              className="text-background"
            >
              in building
            </span>{" "}
            User-Centric{" "}
            <span
              style={{
                WebkitTextStroke: "4px white",
                paintOrder: "stroke fill",
                // color: "#0a0a0a",
              }}
              className="text-background"
            >
              Applications{" "}
            </span>
            at Scale
          </p>
          {/* <p className="paragraph-2 leading-12 md:leading-18"></p>
          <p className="paragraph-3 leading-12 md:leading-18"></p> */}
        </div>
        <div className="absolute  bottom-20 opacity-60 flex justify-center self-center mt-20">
          <a href="#about" className="animate-bounce text-3xl text-gray-700">
            <Image
              src="/scroll.png"
              className="invert w-10"
              alt=""
              width={100}
              height={100}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="absolute -z-10 opacity-20 w-[100vw] overflow-hidden h-full md:scale-200 scale-90 top-30 md:top-10 2xl:top-20 md:left-30">
        <svg
          width="1456"
          height="100%"
          viewBox="0 0 1356 783"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_222_10)">
            <path
              className="logo-lines"
              d="M308.236 495.288L476.29 398.271L700.095 552.169L700.524 552.465L879.734 449.007L1045.82 562.046L866.479 665.578C839.013 681.86 806.855 695.181 772.088 704.678C737.321 714.176 700.723 719.636 664.665 720.711C628.608 721.786 593.897 718.451 562.774 710.926C532.138 703.519 505.647 692.213 484.954 677.724L483.973 677.031L483.967 677.027L303.808 552.609C279.356 535.722 281.276 510.852 308.236 495.288ZM789.202 320.302C814.708 305.315 844.494 293.059 876.658 284.319C908.987 275.533 942.998 270.494 976.496 269.521C1009.99 268.549 1042.24 271.665 1071.15 278.665C1100.06 285.664 1125 296.393 1144.37 310.158L1144.38 310.164L1299.17 415.784L1098.43 531.671L921.517 410.529L921.516 410.529L789.202 320.302ZM691.11 0.526497C734.951 31.5067 754.173 72.9584 744.997 116.865C735.791 160.916 698.66 204.273 640.828 238.474L208.224 488.217C164.312 457.594 144.986 416.441 154.055 372.826L154.276 371.791L154.277 371.788C162.924 328.063 199.66 284.96 257.143 251.068L258.505 250.269L691.11 0.526497Z"
              stroke="white"
              stroke-opacity="0.2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_222_10"
              x="151.255"
              y="0"
              width="1148.75"
              height="735.262"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="14" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.537255 0 0 0 0 0.870588 0 0 0 0 0.443137 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_222_10"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_222_10"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
