import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">02 — skills</span>
        <h2 className="section-heading">Technical stack</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
