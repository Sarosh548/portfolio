import { education } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education__grid">
        <div>
          <span className="section-label">05 — education</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="education__card">
          <div className="education__head">
            <div>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__school">
                {education.school} — {education.location}
              </p>
            </div>
            <span className="education__period mono">{education.period}</span>
          </div>

          <div className="education__coursework">
            <span className="education__coursework-label">Relevant coursework</span>
            <div className="education__tags">
              {education.coursework.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
