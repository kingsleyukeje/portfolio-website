import { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";

const typewriterLines = [
  "kingsleyukeje_UXDESIGNER_ENGINEER ",
  "multidisciplinary high performance personality",
  "personal website & portfolio",
];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [percent, setPercent] = useState(0);
  const [fade, setFade] = useState(false);
  
  // Loader percent animation (unchanged)
  useEffect(() => {
    if (percent < 100) {
      let delay: number;
      let increment: number;
      if (percent < 13) {
        delay = 25;
        increment = 2;
      } else if (percent < 24) {
        delay = 150;
        increment = 3;
      } else if (percent < 50) {
        delay = 40;
        increment = 3;
      } else if (percent < 75) {
        delay = 200;
        increment = 5;
      } else if (percent < 90) {
        delay = 170;
        increment = 3;
      } else {
        delay = 460;

        increment = 3;
      }
      const timeout = setTimeout(
        () => setPercent(Math.min(100, percent + increment)),
        delay
      );
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setFade(true), 300);
    }
  }, [percent]);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(onDone, 500);
      return () => clearTimeout(timeout);
    }
  }, [fade, onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white dark:bg-black transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Typewriter text top left */}
      <div className="absolute top-4 left-4 text-left text-[#0A0A0A] dark:text-white font-roboto-mono text-[12px] leading-snug select-none break-words w-[90vw] max-w-[700px] uppercase">
        {typewriterLines.map((line, i) => (
          // <div key={i}>{line}</div>
          <TypingEffect key={i} word={line} speedd={50}/>
        ))}
      </div>
      {/* Percent bottom left */}
      <span className="absolute bottom-4 left-4 text-black dark:text-white select-none tracking-widest text-[97px] font-roboto-mono">
        {percent}%
      </span>
    </div>
  );
}
