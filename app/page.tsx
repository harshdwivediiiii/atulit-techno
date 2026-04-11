import {
  benefits,
  company,
  companyStory,
  contactPeople,
  directors,
  equipmentGroups,
  heroStats,
  infrastructure,
  marketChallenges,
  navItems,
  processSteps,
  projectStatement,
  solutions,
  whyAtulit,
  workforceStrengths,
} from "./content";
import { ModeToggle } from "@/components/mode-toggle";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Atulit Technology homepage">
          <span className="brand-mark">AT</span>
          <span>
            <strong>{company.shortName}</strong>
            <span className="brand-subtitle">Steel fabrication partner</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <ModeToggle />
          <a className="nav-cta" href={`mailto:${company.emailPrimary}`}>
            Email us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <Reveal className="hero-copy">
            <p className="eyebrow">{company.location}</p>
            <h1>{company.tagline}</h1>
            <p className="lead">{company.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${company.emailPrimary}`}>
                Start an inquiry
              </a>
              <a className="button button-secondary" href="#capabilities">
                Explore capabilities
              </a>
            </div>
          </Reveal>
          <Reveal className="hero-panel" delay={0.1}>
            <div className="hero-panel-content">
              <p className="panel-label">Facility snapshot</p>
              <div className="stats-grid">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="stat-card">
                    <p className="stat-value">{stat.value}</p>
                    <h2>{stat.label}</h2>
                    <p>{stat.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Why Atulit</p>
            <h2>Built for fast-moving industrial execution.</h2>
            <p>
              The company profile positions Atulit as a practical fabrication
              partner with regional access, raw material proximity, and a strong
              focus on delivery discipline.
            </p>
          </div>
          <div className="card-grid three-up">
            {whyAtulit.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal id="process" className="section section-accent">
          <div className="section-heading">
            <p className="eyebrow">Fabrication process</p>
            <h2>A clear end-to-end workflow from drawing to dispatch.</h2>
          </div>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <article className="timeline-step">
                  <p className="timeline-number">{step.step}</p>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="section">
          <div className="section-heading">
            <p className="eyebrow">Material advantages</p>
            <h2>Why fabricated steel remains a practical project choice.</h2>
          </div>
          <div className="card-grid four-up">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="section split-section">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Company overview</p>
              <h2>Experience rooted in Bhilai&apos;s steel and project ecosystem.</h2>
            </div>
            <div className="story-copy">
              {companyStory.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="side-panel" delay={0.14}>
            <p className="panel-label">Sector focus</p>
            <ul className="tag-list">
              <li>Mining</li>
              <li>Agriculture</li>
              <li>Infrastructure</li>
              <li>Structural steel products</li>
              <li>Industrial fabrication</li>
            </ul>
          </Reveal>
        </Reveal>

        <Reveal className="section">
          <div className="section-heading">
            <p className="eyebrow">Solutions</p>
            <h2>Fabrication support designed around supply, quality, and cost.</h2>
          </div>
          <div className="card-grid four-up">
            {solutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal id="capabilities" className="section split-section">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Factory infrastructure</p>
              <h2>Manufacturing capacity backed by developed fabrication space.</h2>
            </div>
            <dl className="data-list">
              {infrastructure.map((item) => (
                <div key={item.label} className="data-row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <div className="section-heading compact">
              <p className="eyebrow">Market context</p>
              <h2>Execution discipline matters when fabrication conditions are tight.</h2>
            </div>
            <div className="card-grid stack">
              {marketChallenges.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="info-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section section-accent">
          <div className="section-heading">
            <p className="eyebrow">Machinery and equipment</p>
            <h2>Core tools for cutting, welding, drilling, finishing, and coating.</h2>
          </div>
          <div className="card-grid equipment-grid">
            {equipmentGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <article className="info-card equipment-card">
                  <h3>{group.title}</h3>
                  <ul className="bullet-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="section split-section">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Project readiness</p>
              <h2>Prepared for project-based execution across industrial scopes.</h2>
            </div>
            <p className="project-note">{projectStatement}</p>
          </div>
          <Reveal className="side-panel" delay={0.12}>
            <p className="panel-label">What clients can expect</p>
            <ul className="bullet-list">
              <li>Drawing-led fabrication execution</li>
              <li>Medium and heavy structural capability</li>
              <li>Dispatch-oriented planning</li>
              <li>Quality-focused finishing workflow</li>
            </ul>
          </Reveal>
        </Reveal>

        <Reveal id="team" className="section">
          <div className="section-heading">
            <p className="eyebrow">Leadership</p>
            <h2>Directors with technical, commercial, and project experience.</h2>
          </div>
          <div className="card-grid two-up">
            {directors.map((director, index) => (
              <Reveal key={director.name} delay={index * 0.06}>
                <article className="info-card leader-card">
                  <p className="leader-role">{director.role}</p>
                  <h3>{director.name}</h3>
                  <p>{director.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="section section-accent split-section">
          <div className="section-heading compact">
            <p className="eyebrow">Workforce strength</p>
            <h2>Multi-disciplined manpower for project-based delivery.</h2>
            <p>
              Atulit states its ability to provide project-based workforce solutions
              for diverse industrial sectors.
            </p>
          </div>
          <ul className="workforce-grid">
            {workforceStrengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Share your requirement once, and send it to email plus Google Sheets.</h2>
            <p>
              Share your fabrication requirement, drawing package, or delivery
              timeline through the form below. Each submission is designed to be
              delivered to your inbox and your lead sheet together.
            </p>
          </div>
          <Reveal delay={0.02}>
            <div className="contact-form-card">
              <ContactForm />
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal delay={0.06}>
              <article className="contact-card primary">
                <p className="panel-label">Email inquiries</p>
                <a href={`mailto:${company.emailPrimary}`}>{company.emailPrimary}</a>
                <a href={`mailto:${company.emailSecondary}`}>{company.emailSecondary}</a>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="contact-card">
                <p className="panel-label">Phone contacts</p>
                <ul className="contact-list">
                  {contactPeople.map((person) => (
                    <li key={person.phone}>
                      <span>{person.name}</span>
                      <a href={`tel:${person.phone}`}>{person.phone}</a>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.18}>
              <article className="contact-card">
                <p className="panel-label">Factory and office</p>
                <address>{company.address}</address>
              </article>
            </Reveal>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
