import { getFormatedTime } from "@/utils";
import content from "../../content.json";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ExperienceModal from "./ExperienceModal";
import markdown from "@gokulvaradan/markdown-parser";

export default function Experience() {
  const experienceRef = useRef(null);
  const [currentExperience, setCurrentExperience] = useState(-1);
  async function handleExperienceModal(index: number) {
    const transition = document.startViewTransition(() => {
      document.body.style.overflow = "hidden";
      setCurrentExperience(index);
    });
    await transition.finished;
  }

  async function handleExperienceClose() {
    const transition = document.startViewTransition(() => {
      document.body.style.overflow = "auto";
      setCurrentExperience(-1);
    });
    await transition.finished;
  }

  // useEffect(() => [

  // ], []);

  function handleCustomMouseEnter() {
    const customCursor = document.getElementById("custom-cursor");
    if (customCursor) customCursor.style.opacity = "1";
    document.getElementById("experiences")?.classList.add("cursor-none");
  }

  function handleCustomMouseLeave() {
    const customCursor = document.getElementById("custom-cursor");
    if (customCursor) customCursor.style.opacity = "0";
    document.getElementById("experiences")?.classList.remove("cursor-none");
  }

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
  // const highlights = markdown.parse(content.experience[0].shortHighlights);
  return (
    <div
      ref={experienceRef}
      id="experiences"
      className="w-full flex items-start justify-center"
    >
      <div className="2xl:max-w-7xl max-w-4xl w-11/12 md:w-full border-x border-white/20 pt-40 flex flex-col gap-10 h-full items-start justify-start pb-20">
        <p className="px-5 py-2 sticky top-3 border font-display bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
          My Experience
        </p>
        <div id="experience-cards" className="flex flex-col gap-20">
          {content.experience.map((exp, index) => (
            <div
              onMouseEnter={handleCustomMouseEnter}
              onMouseLeave={handleCustomMouseLeave}
              key={exp.positionTitle}
              onClick={() => handleExperienceModal(index)}
              className="flex flex-col sticky top-20 hover:border-primary hover:drop-shadow-[10px_10px_0px_rgba(72,223,105,0.5)] hover:bg-background bg-background/40 backdrop-blur-2xl h-full p-6 md:p-10 2xl:p-15 border border-white font-display gap-2 experience w-full"
            >
              <div className="flex flex-col md:flex-row w-full justify-between gap-2">
                <p className="uppercase font-extralight tracking-title text-sm md:text-xs ">
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
              <h2 className="text-xl 2xl:text-3xl mt-2 font-bold text-primary">
                {exp.positionTitle}
              </h2>
              <div className="font-extralight w-full">
                <p className="text-xs md:text-sm 2xl:text-base mt-2 font-medium">
                  Key Highlights
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: markdown.parse(exp.shortHighlights),
                  }}
                />
                {/* <ul className="font-sans list-disc leading-10 pl-4 md:pl-6 mt-2 break-words">
                  {exp.shortHighlights.map((highlight, index) => (
                    <li
                      className="text-sm 2xl:text-lg leading-7 md:leading-9 2xl:leading-10 md:text-base"
                      key={index}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="flex flex-col items-start gap-4 mt-2">
                <p className="text-xs md:text-sm 2xl:text-base font-medium">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-4 md:gap-10">
                  {exp.techStack.map((stack) => (
                    <p
                      key={stack}
                      className="px-5 py-2 border font-extralight text-xs bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)] uppercase"
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
      <ExperienceModal
        handleClose={handleExperienceClose}
        experience={content.experience[currentExperience]}
      />
    </div>
  );
}
