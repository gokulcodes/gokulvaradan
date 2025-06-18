import { getFormatedTime } from "@/utils";
import Image from "next/image";
import markdown from "@gokulvaradan/markdown-parser";

type Experience = {
  companyName: string;
  shortHighlights: string;
  highlights: string;
  positionTitle: string;
  startDate: string;
  techStack: string[];
  endDate?: string;
};

export default function ExperienceModal(props: {
  experience: Experience | null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleClose: Function;
}) {
  const { experience, handleClose } = props;
  //   console.log(`/previews/${project?.preview}`);
  return (
    <div
      style={{
        viewTransitionName: "experience",
        visibility: experience ? "visible" : "hidden",
        opacity: experience ? 1 : 0,
        pointerEvents: experience ? "auto" : "none",
      }}
      id="experienceModal"
      className="fixed top-0 left-0 w-full h-full flex flex-col md:flex-row items-start md:justify-center justify-start p-6 md:p-10 bg-background/80 backdrop-blur-2xl gap-10 md:gap-20 z-50 overflow-scroll md:mt-0"
    >
      {/* <div className="w-full h-full ">
        <div className="md:h-full h-[500px] flex items-center justify-center w-full bg-white/5 border border-white drop-shadow-[10px_10px_0px_rgba(255,255,255,0.3)]">
          <Image
            src={`/previews${project?.preview}`}
            className="w-11/12 border object-cover"
            alt="previews"
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
      <div
        key={experience?.positionTitle}
        className="flex flex-col md:p-10 2xl:p-15 font-display gap-2 experience w-full 2xl:max-w-7xl max-w-4xl"
      >
        <div className="flex flex-col md:flex-row w-full justify-between gap-2">
          <p className="uppercase font-extralight tracking-title text-base md:text-xs ">
            {experience?.companyName}
          </p>
          <p className="uppercase font-extralight tracking-widest text-[10px] md:text-xs">
            {getFormatedTime(
              new Date(experience?.startDate ?? "").getTime().toString()
            )}{" "}
            -{" "}
            {experience?.endDate
              ? getFormatedTime(
                  new Date(experience?.endDate).getTime().toString()
                )
              : "Present"}
          </p>
        </div>
        <h2 className="text-2xl 2xl:text-4xl mt-4 font-bold text-primary">
          {experience?.positionTitle}
        </h2>
        <div className="font-extralight w-full">
          <p className="text-xs md:text-sm 2xl:text-base mt-4 font-medium">
            Key Highlights
          </p>
          <div
            className="tracking-wide text-justify"
            dangerouslySetInnerHTML={{
              __html: experience ? markdown.parse(experience?.highlights) : "",
            }}
          />
          {/* <ul className=" font-sans list-disc leading-10 pl-4 md:pl-6 mt-2 break-words">
            {experience?.highlights.map((highlight, index) => (
              <li
                className="text-sm 2xl:text-xl leading-8  md:leading-9 2xl:leading-12 md:text-base"
                key={index}
              >
                {highlight}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex flex-col items-start gap-4 mt-4">
          <p className="text-xs md:text-sm 2xl:text-base mt-2 font-medium">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-4 md:gap-10">
            {experience?.techStack.map((stack) => (
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
      <button
        onClick={() => handleClose()}
        className="absolute cursor-pointer hover:text-primary right-5 top-5 flex gap-2 text-sm"
      >
        Close
        <Image
          src="/close.png"
          className="w-4 invert"
          alt=""
          width={100}
          height={100}
          loading="lazy"
        />
      </button>
    </div>
  );
}
