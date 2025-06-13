import { getFormatedTime } from "@/utils";
import content from "../../content.json";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import gsap from "gsap";

export default function Experience() {
  const experienceRef = useRef(null);
  useGSAP(
    () => {
      // const experience = gsap.utils.toArray("#experiences .experience");
      // console.log(
      //   "+=" + document.querySelector("#experience-cards")?.scrollWidth
      // );
      // gsap.to(experience, {
      //   xPercent: -100 * (experience.length - 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "#experiences",
      //     scrub: 1,
      //     pin: true,
      //     // snap: 1 / (experience.length - 1), // Snap to each section
      //     end: () =>
      //       "+=" + document.querySelector("#experience-cards")?.scrollWidth,
      //   },
      // });
    }
    // { scope: experienceRef }
  );

  return (
    <div
      ref={experienceRef}
      id="experiences"
      className="w-full flex items-start justify-center"
    >
      <div className="max-w-6xl w-11/12 md:w-full border-x border-black/10 pt-40 dark:border-white/20 flex flex-col gap-10 h-full items-start justify-start pb-20">
        <p className="px-5 py-2 sticky top-3 border font-display bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
          My Experience
        </p>
        <div id="experience-cards" className="flex flex-col gap-20">
          {content.experience.map((exp) => (
            <div
              key={exp.positionTitle}
              className="flex flex-col sticky top-20 drop-shadow-[0px_-5px_20px_rgba(255,255,255,0.1)] bg-background/40 backdrop-blur-2xl h-full p-6 md:p-20 border border-white font-display gap-2 experience w-full"
            >
              <div className="flex flex-col md:flex-row w-full justify-between gap-2">
                <p className="uppercase font-extralight tracking-title text-base md:text-xs ">
                  {exp.companyName}
                </p>
                <p className="uppercase font-extralight tracking-widest text-[10px] md:text-xs">
                  {getFormatedTime(
                    new Date(exp.startDate).getTime().toString()
                  )}{" "}
                  -{" "}
                  {exp.endDate
                    ? getFormatedTime(
                        new Date(exp.endDate).getTime().toString()
                      )
                    : "Present"}
                </p>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                {exp.positionTitle}
              </h2>
              <div className="font-extralight w-full">
                <p className="text-sm md:text-base mt-4 font-medium">
                  Key Highlights
                </p>
                <ul className="font-sans list-disc leading-10 pl-4 md:pl-6 mt-2 break-words">
                  {exp.highlights.map((highlight, index) => (
                    <li
                      className="text-base leading-9 md:leading-10 md:text-xl"
                      key={index}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4 mt-4">
                <p className="text-base mt-2 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-4 md:gap-10">
                  {exp.techStack.map((stack) => (
                    <p
                      key={stack}
                      className="px-5 py-2 border font-extralight text-xs md:text-sm bg-background border-white drop-shadow-[5px_5px_0px_rgba(72,223,105,0.5)] uppercase"
                    >
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
