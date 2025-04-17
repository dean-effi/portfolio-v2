import "./index.css";
import myImage from "./assets/me.jpeg";
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 sm:text-base md:text-lg lg:text-xl 2xl:text-[22px]">
      <section aria-label="about">
        <h1 className="text-9xl">Dean Effi</h1>
        <p className="text-cstm-purple p-4 font-bold">
          I am an inquisitive and a passionate web developer who is
          always eager to learn.
        </p>
        <img src={myImage} alt="a picture of me" width={400} />
        <p>
          I enjoy building fast, clean, and functional web apps. I
          work mainly with React, TypeScript, Express, and MongoDB,
          and I’m always looking to improve how things work.
        </p>
      </section>
    </div>
  );
}

export default App;
