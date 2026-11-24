
"use client";

import { useState, type FormEvent } from "react";
import type { Language } from "@/data/translations";

interface ContactFormProps {
  language: Language;
}

export default function ContactForm({ language }: ContactFormProps) {
  const es = language === "es";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      setStatus("success");
      setFeedback(
        es
          ? "Tu mensaje fue recibido correctamente por el servicio de contacto."
          : "Your message was successfully received by the contact service."
      );

      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback(
        es
          ? "No se pudo procesar tu mensaje. Inténtalo nuevamente."
          : "Your message could not be processed. Please try again."
      );
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[#40566C] bg-[#101C2C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#71859A] focus:border-[#35D6C0]";

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label">06 / {es ? "CONTACTO" : "CONTACT"}</p>

          <h2 className="section-title mt-5">
            {es ? "¿Creamos algo " : "Let's create something "}
            <span className="accent-text">
              {es ? "juntos?" : "together?"}
            </span>
          </h2>

          <p className="mt-6 max-w-md leading-8 text-[#AAB8C8]">
            {es
              ? "Estoy abierta a conectar, aprender de nuevas experiencias y conocer oportunidades relacionadas con la tecnología."
              : "I'm open to connecting, learning from new experiences, and exploring opportunities related to technology."}
          </p>

          <a
            href="mailto:raudaandrea055@gmail.com"
            className="mt-8 inline-flex items-center gap-3 text-[#35D6C0] hover:gap-5"
          >
            raudaandrea055@gmail.com ↗
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7 sm:p-9"
        >
          <h3 className="text-xl font-bold text-white">
            {es ? "Envíame un mensaje" : "Send me a message"}
          </h3>

          <div className="mt-7">
            <label htmlFor="name" className="text-sm text-[#C1CCD7]">
              {es ? "Nombre" : "Name"}
            </label>
            <input
              id="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder={es ? "Tu nombre" : "Your name"}
              className={fieldClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm text-[#C1CCD7]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={120}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="correo@ejemplo.com"
              className={fieldClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm text-[#C1CCD7]">
              {es ? "Mensaje" : "Message"}
            </label>
            <textarea
              id="message"
              required
              minLength={10}
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder={es ? "Escribe tu mensaje..." : "Write your message..."}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-7 w-full rounded-full bg-[#35D6C0] px-6 py-4 text-sm font-bold text-[#102331] transition hover:bg-[#62E8D4] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? es ? "Procesando..." : "Processing..."
              : es ? "Enviar mensaje ↗" : "Send message ↗"}
          </button>

          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-5 text-sm leading-6 ${
                status === "success" ? "text-[#35D6C0]" : "text-red-400"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
