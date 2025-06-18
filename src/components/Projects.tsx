import Image from "next/image";
import content from "../../content.json";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import markdown from "@gokulvaradan/markdown-parser";
export default function Projects() {
  const [currentProject, setCurrentProject] = useState(-1);

  async function handleProjectModal(index: number) {
    const transition = document.startViewTransition(() => {
      document.body.style.overflow = "hidden";
      setCurrentProject(index);
    });
    await transition.finished;
  }

  async function handleProjectClose() {
    const transition = document.startViewTransition(() => {
      document.body.style.overflow = "auto";
      setCurrentProject(-1);
    });
    await transition.finished;
  }

  function handleCustomMouseEnter() {
    const customCursor = document.getElementById("custom-cursor");
    if (customCursor) customCursor.style.opacity = "1";
    document.getElementById("projects")?.classList.add("cursor-none");
  }

  function handleCustomMouseLeave() {
    const customCursor = document.getElementById("custom-cursor");
    if (customCursor) customCursor.style.opacity = "0";
    document.getElementById("projects")?.classList.remove("cursor-none");
  }

  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-center font-display"
    >
      <Image
        src="/projects.svg"
        className="w-full h-full"
        alt=""
        width={1000}
        height={1000}
        loading="lazy"
      />
      <div className="2xl:max-w-7xl max-w-4xl w-11/12 md:w-full border-x pt-10 border-white/20 flex flex-col gap-10 h-full items-start justify-start">
        <p className="px-5 py-2 sticky top-3 border bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
          Projects
        </p>
        <div className="flex flex-col w-full gap-20">
          {content.projects.map((project, index) => (
            <div
              key={project.projectName}
              onMouseEnter={handleCustomMouseEnter}
              onMouseLeave={handleCustomMouseLeave}
              onClick={() => handleProjectModal(index)}
              style={{ viewTransitionName: "project" }}
              className="border sticky top-20 border-white hover:bg-background bg-background/40 backdrop-blur-2xl p-6 md:p-10 2xl:p-20 flex flex-col gap-4 hover:border-primary hover:drop-shadow-[10px_10px_0px_rgba(72,223,105,0.5)]"
            >
              <div className="flex w-full justify-between">
                <p className="uppercase font-extralight tracking-title text-xs">
                  Hobby
                </p>
                <p className="uppercase font-extralight tracking-widest text-xs">
                  {project.date}
                </p>
              </div>
              <div className="flex items-start gap-2">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    className={`w-10 transform ${
                      project.projectName === "Circles" ? "scale-150" : ""
                    } `}
                    alt=""
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-4 bg-primary h-8 2xl:h-10" />
                )}
                <h2 className="text-2xl 2xl:text-4xl">{project.projectName}</h2>
              </div>
              <p
                id="shortDescription"
                // className="font-extralight text-justify font-sans text-sm md:text-base 2xl:text-lg leading-8"
                dangerouslySetInnerHTML={{
                  __html: markdown.parse(project.shortDescription),
                }}
              ></p>
              <div className="flex flex-col items-start gap-4 mt-4">
                <p className="text-base mt-2 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-4 md:gap-10">
                  {project.techStack.map((stack) => (
                    <p
                      key={stack}
                      className="px-5 py-2 border font-extralight text-xs tracking-widest bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)] uppercase"
                    >
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 mt-4">
                <p className="text-base mt-2 font-medium">Links</p>
                <div className="flex flex-wrap gap-4 md:gap-10">
                  {project.links.map((link) => (
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
            </div>
          ))}
        </div>
      </div>
      <ProjectModal
        handleClose={handleProjectClose}
        project={currentProject == -1 ? null : content.projects[currentProject]}
      />
      {/* {currentProject >= 0 ? ( */}
      {/* ) : null} */}
    </div>
  );
}
