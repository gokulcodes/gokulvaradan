import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(ScrambleTextPlugin);

export default function Header() {
  const headerRef = useRef(null);
  useGSAP(
    () => {
      const links: Array<HTMLButtonElement> = gsap.utils.toArray(".link");
      links.forEach((link: HTMLButtonElement) => {
        const tween = gsap.to(link, {
          duration: 1,
          scrambleText: {
            text: link.textContent ?? "",
            chars: Array(link.textContent?.length ?? 0)
              .fill(0)
              .join(""),
          },
          paused: true,
        });
        link.addEventListener("mouseenter", () => {
          console.log(link);
          tween.play();
        });
        link.addEventListener("mouseleave", () => {
          tween.reverse();
        });
      });
    }
    // { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="absolute flex items-center w-full z-40 justify-center top-0"
    >
      <div className="flex justify-evenly gap-20 items-center w-11/12 md:w-1/2 lg:w-full max-w-6xl py-8">
        <a
          className="font-display cursor-pointer hover:text-primary w-full font-light"
          href="#experiences"
        >
          <button className="w-full cursor-pointer link">Experience</button>
        </a>
        <Image
          src="/logo.svg"
          className="dark:invert w-8"
          alt=""
          width={1000}
          height={1000}
          loading="lazy"
        />
        <a
          className="w-full font-display cursor-pointer hover:text-primary font-light"
          href="#projects"
        >
          <button className="font-display cursor-pointer hover:text-primary w-full font-light link ">
            Projects
          </button>
        </a>
      </div>
    </header>
  );
}
