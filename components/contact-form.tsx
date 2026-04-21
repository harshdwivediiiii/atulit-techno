"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  address: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  address: "",
  details: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setForm(initialState);
      setStatus({
        type: "success",
        message: "Inquiry sent successfully.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send the inquiry right now.";

      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="section-kicker text-[11px] font-semibold uppercase text-muted">
            Name
          </span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
            className="mt-2 h-[3.25rem] w-full rounded-2xl border border-border bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-foreground/38 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="block">
          <span className="section-kicker text-[11px] font-semibold uppercase text-muted">
            Phone
          </span>
          <input
            required
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            name="phone"
            autoComplete="tel"
            placeholder="+91 98XXXXXXXX"
            className="mt-2 h-[3.25rem] w-full rounded-2xl border border-border bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-foreground/38 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <label className="block">
        <span className="section-kicker text-[11px] font-semibold uppercase text-muted">
          Address
        </span>
        <input
          required
          value={form.address}
          onChange={(event) =>
            setForm((current) => ({ ...current, address: event.target.value }))
          }
          name="address"
          autoComplete="street-address"
          placeholder="Company or project site address"
          className="mt-2 h-[3.25rem] w-full rounded-2xl border border-border bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-foreground/38 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>

      <label className="block">
        <span className="section-kicker text-[11px] font-semibold uppercase text-muted">
          Project Details
        </span>
        <textarea
          required
          value={form.details}
          onChange={(event) =>
            setForm((current) => ({ ...current, details: event.target.value }))
          }
          name="details"
          rows={6}
          placeholder="Describe tonnage, drawings, timelines, fabrication scope, or dispatch constraints"
          className="mt-2 w-full rounded-[1.4rem] border border-border bg-transparent px-4 py-4 text-sm leading-7 text-foreground outline-none placeholder:text-foreground/38 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          disabled={isSubmitting}
          type="submit"
          className="gradient-neon-bg inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon-blue hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
          <ArrowUpRight size={16} />
        </button>
      </div>

      {status.message ? (
        <p
          role="status"
          className={`rounded-2xl border px-4 py-3 text-sm ${status.type === "success"
              ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : "border-rose-400/25 bg-rose-500/10 text-rose-600 dark:text-rose-300"
            }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
