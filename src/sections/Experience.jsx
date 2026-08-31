import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">04 — experience</span>
        <h2 className="section-heading">Experience</h2>

        <div className="experience__list">
          {experience.map((job) => (
            <div className="experience__item" key={job.org}>
              <div className="experience__rail">
                <div className="experience__dot" />
                <div className="experience__line" />
              </div>
              <div className="experience__content">
                <div className="experience__head">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__org">
                      {job.org} — {job.location}
                    </p>
                  </div>
                  <span className="experience__period mono">{job.period}</span>
                </div>
                <ul className="experience__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
