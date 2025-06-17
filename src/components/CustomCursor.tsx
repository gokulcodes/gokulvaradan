// CustomCursor.tsx
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //   const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
        opacity: 0,
        // opacity: visible ? 1 : 0,
      }}
      className="fixed text-xs pointer-events-none flex items-center justify-center text-center z-50 w-20 h-20 font-display uppercase rounded-full text-background bg-primary transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2"
      id="custom-cursor"
    >
      Click Here
    </div>
  );
}
