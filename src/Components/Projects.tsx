import { projectsData } from "../data/projectsData";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section aria-label="projects " id="projects">
      <SectionHeading name="PROJECTS" />
      <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12 md:mt-[172px] md:space-y-[172px]">
        {projectsData.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
