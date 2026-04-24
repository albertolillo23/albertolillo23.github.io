"use client";

// src/components/contact/ContactForm.tsx
// Contact form with client-side validation

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "10px",
  border: "1.5px solid var(--border)",
  background: "var(--bg-card)",
  color: "var(--fg)",
  fontSize: "0.92rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.15s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "var(--fg)",
  marginBottom: "0.4rem",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#ef4444",
  marginTop: "4px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      if (!formspreeUrl) {
        alert("Formspree URL non configurato! Contatta l'amministratore del sito.");
        setLoading(false);
        return;
      }

      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Oops! Si è verificato un errore durante l'invio del messaggio.");
      }
    } catch (error) {
      alert("Oops! Si è verificato un errore di rete.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "var(--bg-card)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "#22c55e", margin: "0 auto 1rem" }}
        />
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "var(--fg)",
            marginBottom: "0.5rem",
          }}
        >
          Message received!
        </h3>
        <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}>
          Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Name + Email row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Name <span aria-hidden style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            style={{
              ...inputStyle,
              borderColor: errors.name ? "#ef4444" : "var(--border)",
            }}
          />
          {errors.name && (
            <p id="contact-name-error" style={errorStyle} role="alert">
              <AlertCircle size={13} /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            Email <span aria-hidden style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            style={{
              ...inputStyle,
              borderColor: errors.email ? "#ef4444" : "var(--border)",
            }}
          />
          {errors.email && (
            <p id="contact-email-error" style={errorStyle} role="alert">
              <AlertCircle size={13} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" style={labelStyle}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="Research collaboration, question..."
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" style={labelStyle}>
          Message <span aria-hidden style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your research interest, collaboration proposal..."
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "140px",
            borderColor: errors.message ? "#ef4444" : "var(--border)",
          }}
        />
        {errors.message && (
          <p id="contact-message-error" style={errorStyle} role="alert">
            <AlertCircle size={13} /> {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        id="contact-submit"
        disabled={loading}
      >
        {loading ? (
          "Sending…"
        ) : (
          <>
            <Send size={15} />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
