import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

function MotionEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    let scrollFrame = 0;

    const updateScrollProgress = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        root.style.setProperty("--scroll-progress", `${progress}%`);
        scrollFrame = 0;
      });
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealSelector = [
      ".hero__main > *",
      ".hero__visual",
      ".hero__scroll-cue",
      ".section-label",
      ".section-heading",
      ".about__body > p",
      ".about__fact",
      ".skills__group",
      ".project-card",
      ".experience__item",
      ".education__card",
      ".services__card",
      ".contact__link",
      ".contact__form",
      ".case-study__back",
      ".case-study__header",
      ".case-study__section",
      ".case-study__flow-step",
      ".case-study__challenge",
    ].join(",");

    let observer;
    if (!reduceMotion) {
      const targets = document.querySelectorAll(revealSelector);
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });

        targets.forEach((node, index) => {
          node.classList.add("motion-reveal");
          node.style.setProperty("--reveal-delay", `${(index % 5) * 95}ms`);
          observer.observe(node);
        });
      } else {
        targets.forEach((node) => node.classList.add("is-visible"));
      }
    }

    const supportsTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const tiltTargets = supportsTilt
      ? document.querySelectorAll(".project-card,.skills__group,.services__card,.hero__panel,.education__card,.contact__form")
      : [];

    const onPointerMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const tiltX = ((x / rect.width) - 0.5) * 9;
      const tiltY = (0.5 - (y / rect.height)) * 9;
      event.currentTarget.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      event.currentTarget.style.setProperty("--glow-x", `${x}px`);
      event.currentTarget.style.setProperty("--glow-y", `${y}px`);
    };

    const resetTilt = (event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    };

    tiltTargets.forEach((node) => {
      node.addEventListener("pointermove", onPointerMove, { passive: true });
      node.addEventListener("pointerleave", resetTilt, { passive: true });
    });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      observer?.disconnect();
      tiltTargets.forEach((node) => {
        node.removeEventListener("pointermove", onPointerMove);
        node.removeEventListener("pointerleave", resetTilt);
      });
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
