// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import Image from "next/image";

export default function Footer() {
  // useGSAP(() => {
  //   gsap.from(".nameImage", {
  //     y: -100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".footer",
  //       // start: "top 80%", // Element’s top hits 80% of viewport => 20% visible
  //       // end: "bottom 20%", // Optional: stops tracking after 80% is scrolled past
  //       toggleActions: "play none none none", // Play once when enters
  //       markers: true, // optional for debugging
  //     },
  //   });
  // }, {});
  return (
    <footer className="w-full h-full flex items-center justify-center footer">
      <div className="max-w-6xl w-11/12 md:w-full border-x border-black/10 pt-20 md:pt-40 dark:border-white/20 flex flex-col gap-10 md:gap-20 h-full items-start justify-start">
        <div className="flex flex-col gap-10 md:flex-row w-full justify-between font-display">
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase tracking-widest opacity-50 text-sm ">
              Socials
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/gokulcodes"
                target="_black"
                className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link "
              >
                Github.com
                <Image
                  src="/redirect.svg"
                  className="w-4 dark:invert"
                  alt=""
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gokulvaradan/"
                target="_blank"
                className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link "
              >
                linkedin.com
                <Image
                  src="/redirect.svg"
                  className="w-4 dark:invert"
                  alt=""
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </a>
              <a
                href="https://twitter.com/gokul_varadan"
                target="_blank"
                className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link "
              >
                Twitter.com
                <Image
                  src="/redirect.svg"
                  className="w-4 dark:invert"
                  alt=""
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase tracking-widest opacity-50 text-sm ">
              Quick Links
            </p>
            <div className="flex gap-6">
              <a
                href="#experiences"
                className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link "
              >
                Experience
              </a>
              <a
                href="#projects"
                className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link "
              >
                Projects
              </a>
              {/* <a href="" className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link ">
                Twitter.com
                <Image
                  src="/redirect.svg"
                  className="w-4 dark:invert"
                  alt=""
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </p> */}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase tracking-widest opacity-50 text-sm ">
              Gokulcodes.dev
            </p>
            <div className="flex gap-6">
              <p className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs  ">
                all rights reserved @ 2025
              </p>
              {/* <a href="" className="flex gap-1 uppercase font-light font-sans tracking-wider text-xs cursor-pointer hover:text-primary link ">
                Twitter.com
                <Image
                  src="/redirect.svg"
                  className="w-4 dark:invert"
                  alt=""
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </p> */}
            </div>
          </div>
        </div>
        <Image
          src="/footer.svg"
          className="w-full h-full nameImage"
          alt=""
          width={1000}
          height={1000}
          loading="lazy"
        />
      </div>
    </footer>
  );
}
