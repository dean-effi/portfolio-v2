import About from "./Components/About";
import Nav from "./Components/Nav";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-[200vh] text-gray-50 sm:text-base md:text-lg lg:text-xl 2xl:text-[22px]">
      <Nav />
      <About />
    </div>
  );
}
