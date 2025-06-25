import { useGSAP } from "@gsap/react";
import content from "../../content.json";
import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

export default function Stacks() {
  useGSAP(() => {
    for (let i = 0; i < content.stacks.length; i++) {
      // Create Draggable instance
      Draggable.create(`#stack-${i}`, {
        bounds: ".stacks",
        inertia: true,
        onDragStart: function () {
          gsap.to(this.target, 0.1, {
            backgroundColor: "rgba(72,223,105,0.5)",
          });
        },
        onDragEnd: function () {
          gsap.to(this.target, 0.1, { backgroundColor: "#000" });
        },
      });

      // Animate when #stacks is in the viewport
      gsap.from(`#stack-${i}`, {
        y: -1000,
        opacity: 0,
        scrollTrigger: {
          trigger: ".achievements",
          start: "top 100%", // when top of #stacks hits bottom of viewport
          toggleActions: "play none none none",
        },
        rotation: gsap.utils.random(-1000, 1000), // use runtime random, not string
        duration: 1.5,
        ease: "circ",
      });
    }
  }, {});

  return (
    <div
      id="stacks"
      className="w-full flex items-center justify-center stacks "
    >
      <div className="2xl:max-w-7xl max-w-4xl w-11/12 md:w-full border-x pt-20 border-white/0 flex flex-col gap-10 h-full items-end justify-end">
        <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center border overflow-hidden py-20  bg-white/2">
          {content.stacks.map((stack, index) => (
            <p
              key={stack}
              id={`stack-${index}`}
              className="px-5 py-2 font-display text-xs uppercase font-light sticky top-3 border bg-background border-white drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]"
            >
              {stack}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
