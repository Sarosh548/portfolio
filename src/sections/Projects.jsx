import { Link } from "react-router-dom";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">03 — projects</span>
        <h2 className="section-heading">Featured work</h2>
        <p className="projects__intro prose-col">
          Four systems spanning personal AI, agentic workflows, retrieval-augmented generation, and computer vision — each taken from architecture through to a working system.
        </p>

        <div className="projects__list">
          {projects.map((project, i) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card__index mono">{String(i + 1).padStart(2, "0")}</div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__context">{project.context}</span>
                  <span className="project-card__duration">{project.duration}</span>
                </div>

                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__oneliner">{project.oneLiner}</p>

                {project.metrics && (
                  <div className="project-card__metrics">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="project-card__metric">
                        <span className="mono">{m.value}</span>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-card__tech">
                  {project.tech.slice(0, 6).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="tag tag--muted">+{project.tech.length - 6} more</span>
                  )}
                </div>

                <div className="project-card__actions">
                  <Link to={`/projects/${project.slug}`} className="btn btn--primary btn--sm">
                    View case study
                  </Link>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
