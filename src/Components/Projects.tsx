import { projectsData } from "../data/projectsData";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section aria-label="projects " id="projects">
      <SectionHeading name="PROJECTS" />
      {projectsData.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
