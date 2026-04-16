"use client";
import { useEffect } from "react";

function toggleDarkMode() {
  if (typeof window !== "undefined") {
    const html = document.documentElement;
    // console.log("Before toggle:", html.className);
    html.classList.toggle("dark");
    // console.log("After toggle:", html.className);
  } else {
    console.log("toggleDarkMode called on server (should not happen)");
  }
}

export default function DarkModeToggle() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" || e.key === "D") {
        toggleDarkMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className=" border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
    >
      “d”toggle mode
    </button>
  );
}
