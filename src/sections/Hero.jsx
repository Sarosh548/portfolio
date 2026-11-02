import { useEffect, useRef, useState } from "react";
import { profile, heroStats } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [live, setLive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLive(true);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="top" className={`hero ${live ? "hero--visible" : ""}`} ref={ref}>
      <div className="container hero__grid">
        <div className="hero__main">
          <span className="hero__eyebrow"><span className="hero__availability" /> {profile.location} <span className="hero__eyebrow-divider">/</span> AI &amp; Machine Learning</span>
          <p className="hero__intro">Hello, I’m</p>
          <h1 className="hero__name">{profile.name}<span>.</span></h1>
          <p className="hero__title">Building thoughtful AI products that solve real problems.</p>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">Explore my work <span aria-hidden="true">↗</span></a>
            {profile.resumeUrl ? <a href={profile.resumeUrl} className="btn btn--ghost" download>Download CV <span aria-hidden="true">↓</span></a> : <a href="#contact" className="btn btn--ghost">Request my CV</a>}
          </div>
          <div className="hero__social" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="hero__visual" aria-label="Profile and selected project metrics">
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-orbit hero__portrait-orbit--one" />
            <div className="hero__portrait-orbit hero__portrait-orbit--two" />
            <div className="hero__portrait-placeholder hero__portrait-placeholder--photo">
              <img src="/profile.jpg.PNG" alt="Sarosh Qaiser" className="hero__portrait-image" />
              <span className="hero__portrait-caption">AI ENGINEER · LAHORE</span>
            </div>
          </div>
          <div className="hero__panel">
            <div className="hero__panel-header"><span className="hero__panel-kicker">A few things I’ve built</span><span className="hero__panel-line" /></div>
            <div className="hero__stats">
              {heroStats.map((stat, i) => <div className={`hero__stat ${live ? "hero__stat--live" : ""}`} style={{ transitionDelay: `${i * 100}ms` }} key={stat.label}><span className="hero__stat-value">{stat.value}</span><span className="hero__stat-label">{stat.label}</span></div>)}
            </div>
          </div>
        </aside>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span /> Scroll to explore</div>
    </section>
  );
}
