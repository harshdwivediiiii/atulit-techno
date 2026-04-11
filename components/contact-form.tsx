"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

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
        message:
          "Inquiry sent successfully. It has been forwarded to your email and Google Sheet.",
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
          />
        </label>
        <label className="field">
          <span>Phone</span>
          <input
            required
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            name="phone"
            autoComplete="tel"
            placeholder="+91 98XXXXXXXX"
          />
        </label>
      </div>

      <label className="field">
        <span>Address</span>
        <input
          required
          value={form.address}
          onChange={(event) =>
            setForm((current) => ({ ...current, address: event.target.value }))
          }
          name="address"
          autoComplete="street-address"
          placeholder="Company or site address"
        />
      </label>

      <label className="field">
        <span>Project details</span>
        <textarea
          required
          value={form.details}
          onChange={(event) =>
            setForm((current) => ({ ...current, details: event.target.value }))
          }
          name="details"
          rows={6}
          placeholder="Describe fabrication requirements, quantity, drawings, or delivery timeline"
        />
      </label>

      <div className="form-actions">
        <Button className="submit-button" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </Button>
      </div>

      {status.message ? (
        <p
          className={
            status.type === "success" ? "form-status success" : "form-status error"
          }
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
