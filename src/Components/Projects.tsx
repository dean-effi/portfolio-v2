import { projectsData } from "../data/projectsData";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import GithubIcon from "../assets/icons/github.svg?react";

export default function Projects() {
  return (
    <section aria-label="projects " id="projects">
      <SectionHeading name="PROJECTS" />
      <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12 md:mt-[172px] md:space-y-[172px]">
        {projectsData.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      <p className="work-sans mx-auto my-[90px] flex items-center justify-center gap-2 md:my-[120px] md:gap-3 2xl:my-[170px] 2xl:gap-4 2xl:text-[26px]">
        <span className="text-cstm-purple">More on my</span>
        <a
          target="_"
          href="https://github.com/dean-effi"
          className="bg-cstm-purple flex items-center gap-1.5 rounded-full px-2 py-1.5 text-violet-950 hover:bg-violet-500 active:bg-violet-300 lg:px-2.5 lg:py-2"
        >
          <span>GitHub</span>
          <GithubIcon className="w-4.5 fill-violet-950 lg:w-5 xl:w-6 2xl:w-7" />
        </a>
      </p>
    </section>
  );
}
