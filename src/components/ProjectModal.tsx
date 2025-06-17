import markdown from "@gokulvaradan/markdown-parser";
import Image from "next/image";
type Project = {
  projectName: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  date: string;
  preview: string;
  links: string[];
  logo?: string;
};

export default function ProjectModal(props: {
  project: Project | null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleClose: Function;
}) {
  const { project, handleClose } = props;

  return (
    <div
      style={{
        viewTransitionName: "project",
        visibility: project ? "visible" : "hidden",
        opacity: project ? 1 : 0,
        pointerEvents: project ? "auto" : "none",
      }}
      id="projectModal"
      className="fixed top-0 left-0 w-full h-full flex flex-col md:flex-row items-start md:justify-start justify-start p-6 md:p-10 bg-background/80 backdrop-blur-2xl gap-10 md:gap-15 z-50 overflow-scroll py-20 md:mt-0"
    >
      <div className="w-full h-full md:sticky top-0 ">
        <div className="md:h-full h-[500px] flex items-center justify-center w-full bg-white/5 border border-white/10">
          {project?.preview ? (
            <Image
              src={`/previews${project?.preview}`}
              className="w-11/12 border object-cover drop-shadow-[10px_10px_0px_rgba(255,255,255,0.3)]"
              alt="previews"
              width={1000}
              height={1000}
            />
          ) : null}
        </div>
      </div>
      <div
        key={project?.projectName}
        className="flex w-full flex-col justify-between py-0 md:py-20 gap-4"
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <p className="uppercase font-extralight tracking-title text-xs">
              Hobby
            </p>
            <p className="uppercase font-extralight tracking-widest text-xs">
              {project?.date}
            </p>
          </div>
          <div className="flex items-start gap-2">
            {project?.logo ? (
              <Image
                src={project?.logo}
                className={`w-10 transform ${
                  project?.projectName === "Circles" ? "scale-150" : ""
                } `}
                alt=""
                width={100}
                height={100}
                loading="lazy"
              />
            ) : (
              <div className="w-4 bg-primary h-8 2xl:h-10" />
            )}
            <h2 className="text-2xl 2xl:text-4xl">{project?.projectName}</h2>
          </div>
          <div className="flex flex-col items-start gap-4 mt-2 mb-4">
            <div className="flex flex-wrap gap-4 md:gap-10">
              {project?.links.map((link) => (
                <a
                  href={link}
                  key={link}
                  target="_blank"
                  className="flex gap-1 uppercase font-light text-xs link hover:text-primary items-center"
                >
                  {new URL(link).host}
                  <Image
                    src="/redirect.svg"
                    className="w-4 invert"
                    alt=""
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                typeof project?.description === "string"
                  ? markdown.parse(project?.description)
                  : "",
            }}
            className="font-extralight font-sans text-sm md:text-base 2xl:text-lg leading-8"
          ></p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-4 mt-4">
            <p className="text-base mt-2 font-medium">Tech Stack</p>
            <div className="flex flex-wrap gap-4 md:gap-10">
              {project?.techStack.map((stack) => (
                <p
                  key={stack}
                  className="px-5 py-2 border font-extralight text-xs tracking-widest bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)] uppercase"
                >
                  {stack}
                </p>
              ))}
            </div>
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
