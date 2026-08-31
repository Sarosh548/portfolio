import { profile, education, heroStats } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div>
          <span className="section-label">01 — about</span>
          <h2 className="section-heading">
            Building AI systems that make decisions under real-world constraints
          </h2>
        </div>

        <div className="about__body prose-col">
          <p>
            I'm an AI Engineer based in {profile.location}, with a BS in Artificial Intelligence from{" "}
            {education.school}. My work centers on agentic workflows, retrieval-augmented generation, and
            multi-agent systems built on LangGraph — from a crisis-response orchestrator coordinating 8
            specialized agents to a citation-backed RAG pipeline indexing thousands of pages of technical
            reference material.
          </p>
          <p>
            Beyond agentic AI, I've trained computer vision models for real-time object detection, built
            time-series forecasting engines, and shipped full-stack platforms that tie machine learning
            models to production APIs, databases, and dashboards. I care about systems that are grounded,
            explainable, and gracefully handle the messy parts of the real world — contradictory data,
            API failures, and fairness constraints — not just demos that work on the happy path.
          </p>
          <p>
            I'm currently looking for AI/ML engineering roles, internships, and freelance projects where I
            can keep building systems like this.
          </p>

          <div className="about__facts">
            {heroStats.slice(0, 3).map((s) => (
              <div className="about__fact" key={s.label}>
                <span className="about__fact-value mono">{s.value}</span>
                <span className="about__fact-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
