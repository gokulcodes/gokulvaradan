import content from "../../content.json";

export default function Achievements() {
  return (
    <div className="w-full flex achievements items-start font-display justify-center">
      <div className="2xl:max-w-6xl max-w-4xl w-11/12 md:w-full border-x pt-40 border-white/20 flex flex-col gap-10 h-full items-start justify-start">
        <p className="px-5 py-2 border bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
          Achievements
        </p>
        <div className="flex flex-col w-full gap-10 font-display">
          {content.achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex w-full justify-between"
            >
              <p className="text-base md:text-xl 2xl:text-2xl w-11/12 md:w-1/2">
                {achievement.title}
              </p>
              <p className="font-extralight text-right text-sm">
                {achievement.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
