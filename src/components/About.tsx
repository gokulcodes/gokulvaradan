import Image from "next/image";
import content from "../../content.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function About() {
  useGSAP(() => {
    for (let i = 0; i < content.stats.length; i++) {
      new SplitText(`#stat-title-${i}`, {
        type: "words, chars",
        mask: "words",
        onSplit(self) {
          gsap.fromTo(
            self.chars,
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
              stagger: 0.03,
              scrollTrigger: {
                trigger: "#stats",
                start: "top 95%", // Trigger when #stats top reaches 80% of viewport
                toggleActions: "play none none none", // Play once
              },
            }
          );
        },
      });
      new SplitText(`#stat-description-${i}`, {
        type: "words, lines",
        mask: "lines",
        onSplit(self) {
          gsap.fromTo(
            self.lines,
            {
              // scrollTrigger: {
              //   trigger: "#stats",
              //   start: "top 80%",
              // },
              y: 400,
              opacity: 1,
              autoAlpha: 0,
            },
            {
              duration: 1,
              opacity: 1,
              y: 0,
              autoAlpha: 1,
              stagger: 0.03,
              scrollTrigger: {
                trigger: "#stats",
                start: "top 95%", // Trigger when #stats top reaches 80% of viewport
                toggleActions: "play none none none", // Play once
              },
            }
          );
        },
      });
    }
    new SplitText("#about-content", {
      type: "words, chars",
      mask: "words",
      onSplit(self) {
        gsap.fromTo(
          self.words,
          {
            duration: 1.5,
            y: 200,
          },
          {
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: "#about",
              start: "top bottom", // Trigger when #stats top reaches 80% of viewport
              toggleActions: "play none none none", // Play once
            },
            stagger: 0.01,
          }
        );
      },
    });
  }, {});
  return (
    <div id="about" className="flex w-full justify-center items-center">
      <div className="flex flex-col gap-20 border-x border-white/20 w-11/12 md:w-full max-w-4xl 2xl:max-w-6xl ">
        <div className="flex flex-col md:flex-row gap-10 p-6 justify-center items-center">
          <Image
            src="/about.svg"
            className="invert w-54 md:w-72 2xl:w-96 p-4"
            alt=""
            width={1000}
            height={1000}
            loading="lazy"
          />
          <p
            id="about-content"
            className="font-sans font-light leading-10 text-lg md:text-left text-center md:text-lg 2xl:text-xl break-words"
          >
            {content.about}
          </p>
        </div>
        <div
          id="stats"
          className="flex md:flex-row flex-wrap flex-col gap-5 2xl:gap-10 items-start justify-evenly"
        >
          {content.stats.map((stat, index) => (
            <div
              key={stat.title}
              className="flex flex-col w-2/5 gap-1 items-center justify-center"
            >
              <p
                id={`stat-title-${index}`}
                className="text-xl 2xl:text-3xl text-center text-primary font-display font-bold"
              >
                {stat.title}
              </p>
              <p
                id={`stat-description-${index}`}
                className="font-display w-full text-xs text-center leading-5 2xl:text-base font-extralight"
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
