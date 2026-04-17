"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../dark-mode-toggle";
import ArrowRight from "../icon";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-start p-4 md:p-[10px] justify-between">
      <div className="flex items-start flex-col md:flex-row gap-14 md:gap-0">
        <div className="text-sm font-normal md:min-w-[210px] text-black dark:text-white">
          <Link href="/" className="  text-sm inline">
            kingsleyukeje
          </Link>
        </div>

        <nav className="flex flex-col text-sm md:min-w-[210px] text-black dark:text-white">
          <div>
            <Link
              href="/about"
              className={`inline ${
                pathname === "/about"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }`}
            >
              about
            </Link>
          </div>
          <div>
            <Link
              href="/career"
              className={
                pathname === "/career"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }
            >
              career
            </Link>
          </div>
          <div>
            <Link
              href="/portfolio"
              className={
                pathname === "/portfolio"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }
            >
              portfolio
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/kingsleyukeje"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex gap-1 items-center ${
                pathname === "/photography"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>github</span>
              <ArrowRight />
            </Link>
          </div>
          <div>
            <Link
              href="https://docs.google.com/document/d/1Vtz7VA4C-_PTh54RoW1seshJnEIg_vNPet12PpcBLPI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex gap-1 items-center ${
                pathname === "/photography"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>résumé</span>
              <ArrowRight />
            </Link>
          </div>
          <div>
            <a
              href="https://kingsleyukeje.substack.com/"
              rel="noopener noreferrer"
              className={`inline-flex gap-1 items-center ${
                pathname === "/studio"
                  ? "text-[#0969DA]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>writings</span>
              <ArrowRight />
            </a>
          </div>
        </nav>
      </div>
      <div className="text-sm font-normal text-black dark:text-white md:w-[25%] flex justify-end gap-8">
        <div className="text-sm font-normal md:min-w-[60px] text-black dark:text-white block">
          <Link
            href="/contact"
            className={`text-sm inline ${
              pathname === "/contact" ? "text-[#0969DA]" : ""
            }`}
          >
            contact
          </Link>
        </div>
        <div className="md:block hidden">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
