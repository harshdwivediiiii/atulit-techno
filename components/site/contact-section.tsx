"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { company, contactPeople } from "@/app/content";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contact Us
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Let’s build something{" "}
            <span className="text-primary">strong & reliable</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Share your requirements, drawings, or timelines. Our team will get
            back to you with precise solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="flex gap-4 p-6 border rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${company.emailPrimary}`} className="font-semibold hover:text-primary">
                  {company.emailPrimary}
                </a>
                <p className="text-sm text-muted-foreground">
                  {company.emailSecondary}
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4 p-6 border rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Phone className="text-secondary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                {contactPeople.map((person) => (
                  <div key={person.phone}>
                    <p className="font-medium">{person.name}</p>
                    <a href={`tel:${person.phone}`} className="text-sm hover:text-secondary">
                      {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex gap-4 p-6 border rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Facility</p>
                <p className="text-sm mt-1">{company.address}</p>

                <a
                  href={mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="border rounded-2xl p-8 shadow-sm bg-card">
            <p className="text-sm font-semibold text-primary uppercase">
              Send Inquiry
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Start your project discussion
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Fill the form once. Our team will contact you shortly.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING CALL BUTTON */}
      <a
        href={`tel:${contactPeople[0]?.phone ?? ""}`}
        className="fixed bottom-6 right-6 h-14 w-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-105 transition"
      >
        <Phone size={20} />
      </a>
    </section>
  );
}