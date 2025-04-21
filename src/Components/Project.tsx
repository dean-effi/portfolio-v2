import { projectDataType } from "../data/projectsData";

export default function Project({
  project,
}: {
  project: projectDataType;
}) {
  return (
    <div className="mt-10 mb-10 space-y-2">
      <h3>{project.name}</h3>
      <p>{project.para}</p>
      <div>{project.techStack.map(t => t + " ")}</div>
      <img src={project.img} width={300} alt="" />
      <div className="flex gap-3">
        <button>
          <a target="_" href={project.liveLink}>
            LIVE
          </a>
        </button>
        <button>
          <a target="_" href={project.gitLink}>
            CODE
          </a>
        </button>
      </div>
    </div>
  );
}
