import { Mail, MapPin, Phone } from "lucide-react";

import { company, contactPeople } from "@/app/content";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address,
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="glow-blue absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full blur-3xl" />
      <div className="glow-orange absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full blur-3xl" />

      <div className="site-container relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)]">
          <Reveal className="space-y-8">
            <div>
              <p className="section-kicker text-xs font-semibold uppercase text-secondary">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build <span className="text-gradient-neon">something strong.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/72">
                Share your fabrication requirement, scope, drawings, or timeline. The form below
                still submits through your existing backend contact workflow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="glass-panel rounded-[1.6rem] p-5 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <span className="glass-panel-strong inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <Mail size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="section-kicker text-[11px] font-semibold uppercase text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.emailPrimary}`}
                      className="mt-2 block text-lg font-semibold text-foreground hover:text-primary"
                    >
                      {company.emailPrimary}
                    </a>
                    <a
                      href={`mailto:${company.emailSecondary}`}
                      className="mt-1 block text-sm text-foreground/68 hover:text-primary"
                    >
                      {company.emailSecondary}
                    </a>
                  </div>
                </div>
              </article>

              <article className="glass-panel rounded-[1.6rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="glass-panel-strong inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <Phone size={18} className="text-secondary" />
                  </span>
                  <div>
                    <p className="section-kicker text-[11px] font-semibold uppercase text-muted">
                      Phone
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground/72">
                      {contactPeople.map((person) => (
                        <li key={person.phone}>
                          <div className="font-medium text-foreground">{person.name}</div>
                          <a href={`tel:${person.phone}`} className="hover:text-secondary">
                            {person.phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="glass-panel rounded-[1.6rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="glass-panel-strong inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <MapPin size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="section-kicker text-[11px] font-semibold uppercase text-muted">
                      Facility
                    </p>
                    <address className="mt-2 not-italic text-sm leading-7 text-foreground/72">
                      {company.address}
                    </address>
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel-strong rounded-[2rem] p-6 shadow-neon-blue sm:p-8">
              <p className="section-kicker text-xs font-semibold uppercase text-primary">
                Send Inquiry
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Start the fabrication conversation.
              </h3>
              <p className="mt-4 text-sm leading-7 text-foreground/68">
                Fill in the requirement details once. We&apos;ll route it through your existing
                contact API so nothing in the backend flow changes.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href={`tel:${contactPeople[0]?.phone ?? ""}`}
        className="gradient-neon-bg fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-neon-blue hover:scale-105 md:bottom-8 md:right-8"
        aria-label={`Call ${contactPeople[0]?.name ?? company.shortName}`}
      >
        <Phone size={20} />
      </a>
    </section>
  );
}
