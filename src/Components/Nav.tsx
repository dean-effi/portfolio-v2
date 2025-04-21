import { useEffect, useRef, useState } from "react";
import BurgerIcon from "../assets/icons/burger.svg?react";
import useNavActive from "../hooks/useNavActive";
export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const navActive = useNavActive();
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
    <div
      className={`main-nav sticky top-0 z-7 bg-gray-950 text-gray-50 shadow-gray-500`}
    >
      <div
        className={`${navActive ? "filled" : " "} absolute bottom-0 h-[1px] bg-gray-300`}
      ></div>
      {/* for mobile */}
      <div className="p-4 sm:hidden">
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
          <ul className="text-cstm-purple grid gap-10 p-4 pt-10 text-2xl font-bold">
            <li>
              <a onClick={() => setNavOpen(false)} href="#about">
                about
              </a>
            </li>
            <li>
              <a onClick={() => setNavOpen(false)} href="#projects">
                projects
              </a>
            </li>
            <li>
              <a onClick={() => setNavOpen(false)} href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* larg menu */}
      <nav className="hidden sm:flex">
        <ul className="m-auto flex w-[450px] justify-between p-4 lg:w-[480px]">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
