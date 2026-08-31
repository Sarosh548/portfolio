import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/content";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container case-study__notfound">
        <p>Project not found.</p>
        <Link to="/">Back to portfolio</Link>
      </div>
    );
  }

  return (
    <article className="case-study">
      <div className="container">
        <Link to="/#projects" className="case-study__back">
          ← Back to projects
        </Link>

        <div className="case-study__header">
          <span className="section-label">{project.context}</span>
          <h1 className="case-study__title">{project.name}</h1>
          <p className="case-study__subtitle">{project.subtitle}</p>
          <p className="case-study__duration mono">{project.duration}</p>

          <div className="case-study__actions">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                GitHub{project.links.githubNote ? " (team repo)" : ""}
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                Live demo
              </a>
            )}
            {project.links.apiDocs && (
              <a href={project.links.apiDocs} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                API docs
              </a>
            )}
          </div>
          {project.links.githubNote && (
            <p className="case-study__note">{project.links.githubNote}</p>
          )}
        </div>

        <div className="case-study__body">
          <section className="case-study__section">
            <h2>Problem</h2>
            <p className="prose-col">{project.problem}</p>
          </section>

          <section className="case-study__section">
            <h2>Solution</h2>
            <p className="prose-col">{project.solution}</p>
          </section>

          <section className="case-study__section">
            <h2>Architecture</h2>
            <p className="prose-col">{project.architecture.description}</p>
            <div className="case-study__flow">
              {project.architecture.flow.map((step, i) => (
                <div className="case-study__flow-step" key={step}>
                  <span className="case-study__flow-index mono">{i + 1}</span>
                  <span>{step}</span>
                  {i < project.architecture.flow.length - 1 && (
                    <span className="case-study__flow-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="case-study__section">
            <h2>Technologies</h2>
            <div className="case-study__tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section className="case-study__section">
            <h2>My contribution</h2>
            <p className="prose-col">{project.myContribution}</p>
          </section>

          <section className="case-study__section">
            <h2>Key features</h2>
            <ul className="case-study__list">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          {project.challenges && project.challenges.length > 0 && (
            <section className="case-study__section">
              <h2>Challenges</h2>
              <div className="case-study__challenges">
                {project.challenges.map((c, i) => (
                  <div className="case-study__challenge" key={i}>
                    <p className="case-study__challenge-title">{c.challenge}</p>
                    <p className="case-study__challenge-solution">{c.solution}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <section className="case-study__section">
              <h2>Future improvements</h2>
              <ul className="case-study__list">
                {project.futureImprovements.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
