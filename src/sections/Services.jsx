import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="section-label">06 — services</span>
        <h2 className="section-heading">What I can help with</h2>
        <p className="services__intro prose-col">
          Available for freelance projects and consulting across the areas below, grounded in the systems
          I've shipped.
        </p>

        <div className="services__grid">
          {services.map((s) => (
            <div className="services__card" key={s.title}>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
