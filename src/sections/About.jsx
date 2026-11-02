import { profile, education } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div>
          <span className="section-label">01 — about</span>
          <h2 className="section-heading">
            Building NOVA — a personal AI companion designed to understand, remember, and help
          </h2>
        </div>

        <div className="about__body prose-col">
          <p>
            I'm an AI Engineer based in {profile.location}, with a BS in Artificial Intelligence from{" "}
            {education.school}. My main focus is <strong>NOVA</strong>, a JARVIS-inspired personal AI
            companion I'm building to make AI genuinely useful in everyday life — not just another
            chatbot that answers one message at a time.
          </p>
          <p>
            NOVA brings natural text conversations and real-time voice interaction together with
            persistent semantic memory, so it can retain useful context across conversations. Its
            LangGraph-based workflows connect conversation understanding to tools such as web research,
            tasks, email, and calendar, while permission checks and approval steps keep consequential
            actions under the user's control.
          </p>
          <p>
            I work across the full stack behind NOVA: Python, FastAPI, React, PostgreSQL with pgvector,
            retrieval-augmented generation, LiveKit, and agent orchestration. I focus on making these
            parts work as one reliable product — with clear action status, verification, and continuity
            between voice and text.
          </p>
          <p>
            Alongside NOVA, I've worked on document-grounded RAG systems, computer vision, forecasting,
            and multi-agent applications. I'm interested in AI/ML engineering opportunities where I can
            build practical, dependable AI products from architecture through implementation.
          </p>

          <div className="about__facts about__facts--nova">
            <div className="about__fact">
              <span className="about__fact-value mono">Voice + Chat</span>
              <span className="about__fact-label">Natural multimodal interaction</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-value mono">Long-term</span>
              <span className="about__fact-label">Persistent semantic memory</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-value mono">Approval-first</span>
              <span className="about__fact-label">Permission-aware tool actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
