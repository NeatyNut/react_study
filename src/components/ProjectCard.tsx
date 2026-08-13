export type Project = {
  title: string; period: string; summary: string; contribution: string;
  tech: string[]; result?: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-main">
        <div className="project-meta">
          <span>{project.period}</span><span>{project.contribution}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.result && <div className="project-result"><b>IMPACT</b>{project.result}</div>}
        <ul className="tech-list" aria-label="사용 기술">
          {project.tech.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
