import { useEffect, useRef, useState } from "react";
import BurgerIcon from "../assets/icons/burger.svg?react";
export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const everOpened = useRef(false);

  const smallNavStateClass =
    everOpened.current === false
      ? " hidden"
      : navOpen
        ? " nav-open"
        : " nav-close";

  useEffect(() => {
    if (navOpen)
      document.querySelector("body")?.classList.add("grayed-out");
    else
      document.querySelector("body")?.classList.remove("grayed-out");
  }, [navOpen]);
  return (
    <div className="sticky top-0 z-10 border-gray-500 bg-slate-950 pb-2 text-gray-50 shadow-gray-500">
      {/* for mobile */}
      <div className="left-0 z-10 pt-4 sm:hidden">
        <button
          onClick={() => {
            if (!everOpened.current) everOpened.current = true;
            setNavOpen(!navOpen);
          }}
          className="z-100 cursor-pointer rounded-md p-2 pl-6"
          aria-label="open menu"
        >
          <BurgerIcon />
        </button>

        <nav
          className={
            "absolute top-0 left-0 z-10 h-screen w-[48vw] border-r-[1px] border-gray-600 bg-gray-950 pt-4 pl-6 text-xl " +
            smallNavStateClass
          }
        >
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="cursor-pointer rounded-md p-2 pl-0"
            aria-label="open menu"
          >
            <BurgerIcon />
          </button>
          <ul>
            <li className="text-cstm-purple grid gap-10 pt-10 text-2xl font-bold">
              <a onClick={() => setNavOpen(false)} href="#about">
                about
              </a>
              <a onClick={() => setNavOpen(false)} href="#projects">
                projects
              </a>
              <a onClick={() => setNavOpen(false)} href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* larg menu */}
      <nav className="hidden sm:flex xl:text-lg 2xl:text-xl">
        Halo ur screen is big
      </nav>
    </div>
  );
}
