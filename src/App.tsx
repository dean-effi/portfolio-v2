import About from "./Components/About";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import "./index.css";

export default function App() {
  return (
    <div className="text-gray-50 sm:text-base md:text-lg lg:text-xl 2xl:text-[22px]">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}
