import { useState } from "react";
import { profile } from "../data/content";
import "./Contact.css";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sent"

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Enter a message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <span className="section-label">07 — contact</span>
          <h2 className="section-heading">Let's talk</h2>
          <p className="contact__copy prose-col">
            Open to AI/ML engineering roles, internships, and freelance projects. The fastest way to reach
            me is email — the form below opens a pre-filled message in your mail client.
          </p>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="contact__link">
              <span className="contact__link-label">Email</span>
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-label">LinkedIn</span>
              <span>linkedin.com/in/saroshqaiser</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-label">GitHub</span>
              <span>github.com/Sarosh548</span>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@company.com"
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="What's this about?"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell me about the role or project"
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn--primary">
            Send message
          </button>

          {status === "sent" && <p className="contact__status">Opening your mail client now.</p>}
        </form>
      </div>
    </section>
  );
}
