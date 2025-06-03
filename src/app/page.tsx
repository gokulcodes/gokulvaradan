import Image from "next/image";

const projects = [
  {
    name: "Markdown Canvas",
    image: "/markdown.png",
    link: "https://markdown.gokulcodes.dev/",
  },
  {
    name: "Ideal Editor",
    image: "/ideal.png",
    link: "https://ideal.gokulcodes.dev/",
  },
  {
    name: "Gamuts",
    image: "/gamuts.png",
    link: "https://gamuts.gokulcodes.dev/",
  },
  {
    name: "Circles",
    image: "/circles.svg",
    link: "https://circles.gokulcodes.dev/",
  },
];

export default function Home() {
  return (
    <div className=" h-[100vh] w-full flex items-center justify-center">
      <main className="flex flex-col gap-10 md:max-w-4xl max-w-2xl w-11/12 items-center justify-center animate-openUp">
        <div className="flex flex-col gap-6 items-center">
          {/* <div className="animated-gradient" /> */}
          <Image
            className="animated-gradient rounded-full border border-white"
            src="/gv.png"
            alt="GV logo"
            width={150}
            height={38}
            priority
          />
          <div className="flex flex-col gap-4 items-center">
            <h1
              style={{ fontWeight: "bolder" }}
              className="md:text-6xl font-display bg-gradient-to-b from-white to-white/40 text-transparent bg-clip-text text-3xl"
            >{`I'm Gokul Varadan`}</h1>
            <p className="text-center md:text-xl text-sm md:leading-8 leading-6 opacity-80">
              {`I'm a Full Stack Engineer with a strong passion for building powerful
          and elegant applications using JavaScript and its ecosystem.`}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2
            style={{ letterSpacing: "10px" }}
            className="uppercase font-display opacity-60"
          >
            Projects
          </h2>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.name}
                target="_blank"
                className="p-5 gap-4 hover:bg-white/5 hover:border-white/20 cursor-pointer flex flex-col items-center justify-center rounded-3xl border border-white/20"
              >
                <Image
                  className="hover:scale-110 transform"
                  src={project.image}
                  alt={project.name}
                  width={100}
                  height={38}
                  priority
                />
                <p className="font-display text-center">{project.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
    </div>
  );
}
