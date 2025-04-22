import { projectDataType } from "../data/projectsData";
import LiveIcon from "../assets/icons/link.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

export default function Project({
  project,
}: {
  project: projectDataType;
}) {
  return (
    <div className="mx-auto mb-10 w-[266px] sm:w-[360px]">
      <div>
        <h3 className="mb-7 text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
          {project.name}
        </h3>
        <p className="proj-para text-[14px]">{project.para}</p>
        <p
          aria-label="project tech stack"
          className="my-5 flex gap-1.5 text-[12px] sm:gap-2"
        >
          {project.techStack.map(t => (
            <span className="bg-violet-950-50 text-cstm-purple rounded-full px-2 py-0.5 sm:text-[14px] md:text-base lg:px-2.5 lg:py-1 xl:text-lg">
              {t}
            </span>
          ))}
        </p>
      </div>
      <img src={project.img} className="w-full rounded-xl" alt="" />
      <div className="mt-5 flex items-center gap-3 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <button>
          <button>
            <a
              target="_"
              href={project.liveLink}
              className="text-cstm-purple border-cstm-purple flex items-center gap-1.5 rounded-full border-2 px-2 py-1.5 lg:px-2.5 lg:py-2"
            >
              <span>CODE</span>
              <GithubIcon className="fill-cstm-purple w-4.5 lg:w-5 xl:w-6 2xl:w-7" />
            </a>
          </button>
        </button>
        <button>
          <a
            target="_"
            href={project.liveLink}
            className="flex items-center gap-1.5 rounded-full bg-gray-50 p-2 text-gray-950 lg:p-2.5 2xl:p-[10px]"
          >
            <span>LIVE</span>
            <LiveIcon className="w-3 pb-[2px] lg:w-[16px] lg:pb-[3.5px] xl:w-4.5 2xl:w-5.5" />
          </a>
        </button>
      </div>
    </div>
  );
}
