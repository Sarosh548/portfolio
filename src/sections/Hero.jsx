import { useEffect, useRef, useState } from "react";
import { profile, heroStats } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [live, setLive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="container hero__grid">
        <div className="hero__main">
          <span className="hero__eyebrow">{profile.location}</span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn--ghost" download>
                Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn--ghost">
                Request my CV
              </a>
            )}
            <a href="#contact" className="btn btn--ghost">
              Contact me
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Selected metrics from Sarosh's projects">
          <div className="hero__panel-header">
            <span className="hero__dot" />
            system readout
          </div>
          <div className="hero__stats">
            {heroStats.map((stat, i) => (
              <div
                className={`hero__stat ${live ? "hero__stat--live" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
                key={stat.label}
              >
                <span className="hero__stat-value mono">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
