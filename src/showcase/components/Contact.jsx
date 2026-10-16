import { useState } from "react";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";

const CONTACT_EMAIL = "appiadesire6@gmail.com";
// Endpoint Formspree (ou tout service acceptant un POST JSON), ex. https://formspree.io/f/abcdwxyz
// Défini dans .env.local : VITE_CONTACT_ENDPOINT=...
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const SUBJECTS = ["Proposer un projet ou un stage", "Demande d'information", "Partenariat", "Collaboration de recherche", "Autre"];
const EMPTY = { firstName: "", lastName: "", email: "", subject: "", message: "", website: "" };
const REQUIRED = ["firstName", "lastName", "email", "subject", "message"];

function validate(v) {
  const errors = {};
  if (!v.firstName.trim()) errors.firstName = "Indiquez votre prénom.";
  if (!v.lastName.trim()) errors.lastName = "Indiquez votre nom.";
  if (!v.email.trim()) errors.email = "Indiquez votre adresse email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = "Cette adresse email ne semble pas valide.";
  if (!v.subject) errors.subject = "Choisissez un objet.";
  if (v.message.trim().length < 10) errors.message = "Votre message doit contenir au moins 10 caractères.";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="form-error">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
  };

  const blur = (e) => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  // Props communes aux champs : liaison label/erreur pour les lecteurs d'écran
  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: update,
    onBlur: blur,
    "aria-invalid": visibleError(name) ? true : undefined,
    "aria-describedby": visibleError(name) ? `contact-${name}-error` : undefined,
  });

  const mailtoHref = () => {
    const body = `${values.message}\n\n— ${values.firstName} ${values.lastName} (${values.email})`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(values.subject || "Contact ISEM")}&body=${encodeURIComponent(body)}`;
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(REQUIRED.map(k => [k, true])));
    const firstInvalid = REQUIRED.find(k => found[k]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    if (values.website) {
      setStatus("success");
      return;
    }
    if (!ENDPOINT) {
      window.location.href = mailtoHref();
      return;
    }

    setStatus("sending");
    try {
      const { website, ...payload } = values;
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, _subject: `[ISEM] ${values.subject}`, _replyto: values.email }),
      });
      if (!res.ok) throw new Error(res.status);
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="p-5 md:p-10" aria-labelledby="contact-title">
      <div className="section-label">Contact</div>
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="contact-info md:w-5/12">
          <h2 id="contact-title">Contactez-nous</h2>
          <div className="contact-methods">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-method">
              <FaMailBulk className="method-icon" aria-hidden="true" />
              <div><div className="method-label">Email</div><div className="method-val">{CONTACT_EMAIL}</div></div>
            </a>
            <a href="tel:+2250140029057" className="contact-method">
              <FaPhone className="method-icon" aria-hidden="true" />
              <div><div className="method-label">Téléphone</div><div className="method-val">+225 01 40 02 90 57</div></div>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Yamoussoukro%2C+C%C3%B4te+d%27Ivoire" target="_blank" rel="noopener noreferrer" className="contact-method">
              <FaLocationArrow className="method-icon" aria-hidden="true" />
              <div><div className="method-label">Localisation</div><div className="method-val">Yamoussoukro, Côte d'Ivoire</div></div>
            </a>
          </div>
        </div>

        {status === "success" ? (
          <div className="contact-form md:w-6/12 border border-border bg-bg3 p-8" role="status">
            <h3 className="font-display text-3xl text-white">Merci, message envoyé.</h3>
            <p className="text-off">Nous vous répondrons dans les meilleurs délais, généralement sous 48 heures.</p>
            <button type="button" onClick={() => setStatus("idle")} className="self-start text-xs font-bold uppercase tracking-[0.12em] text-cyan hover:text-white cursor-pointer">
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form className="contact-form md:w-6/12" onSubmit={submit} noValidate>
            <div className="form-row">
              <Field id="contact-firstName" label="Prénom" error={visibleError("firstName")}>
                <input type="text" autoComplete="given-name" className="form-input" placeholder="Votre prénom" {...fieldProps("firstName")} />
              </Field>
              <Field id="contact-lastName" label="Nom" error={visibleError("lastName")}>
                <input type="text" autoComplete="family-name" className="form-input" placeholder="Votre nom" {...fieldProps("lastName")} />
              </Field>
            </div>
            <Field id="contact-email" label="Email" error={visibleError("email")}>
              <input type="email" autoComplete="email" className="form-input" placeholder="vous@email.com" {...fieldProps("email")} />
            </Field>
            <Field id="contact-subject" label="Objet" error={visibleError("subject")}>
              <select className="form-select" {...fieldProps("subject")}>
                <option value="">Sélectionner…</option>
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field id="contact-message" label="Message" error={visibleError("message")}>
              <textarea className="form-textarea" placeholder="Décrivez votre parcours, votre motivation, votre projet…" {...fieldProps("message")} />
            </Field>

            <input type="text" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            {status === "error" && (
              <p className="form-error" role="alert">
                L'envoi a échoué. Réessayez, ou écrivez-nous directement à <a href={mailtoHref()} className="underline">{CONTACT_EMAIL}</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-amber text-bg font-extrabold text-xs tracking-widest uppercase px-4 py-5 transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:opacity-60 disabled:cursor-wait cursor-pointer"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
