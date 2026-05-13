/* ─── CONTACT ─── */
import { useState } from "react";

const C = {
  navy:    "#080F1E",
  navyMid: "#0D1A35",
  navyLt:  "#12264E",
  blue:    "#1A6BF5",
  blueBr:  "#3B82F6",
  cyan:    "#06B6D4",
  gold:    "#F59E0B",
  white:   "#F8FAFF",
  gray:    "#8A9BB8",
  grayLt:  "#CBD5E8",
  border:  "rgba(255,255,255,0.08)",
  glass:   "rgba(255,255,255,0.04)",
};

export default function Contact() {
  const [type, setType] = useState("Recruter un étudiant / diplômé");
  const [nom, setNom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  const methods = [
    { icon:"✉️", label:"Email professionnel", value:"isem.genies@universite.edu.ci" },
    { icon:"📞", label:"Téléphone", value:"+225 07 89 25 07 19" },
    { icon:"📍", label:"Localisation", value:"INPHB · Abidjan, Côte d'Ivoire" },
    { icon:"🔗", label:"LinkedIn", value:"est ce que inp a linkedin" },
  ];

  const SectionTag = ({ children }) => (
  <div style={{ fontSize: ".75rem", fontWeight: 600, color: C.blueBr, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".75rem" }}>
    {children}
  </div>
    );

    const SectionTitle = ({ children }) => (
  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
    {children}
  </h2>
);


  return (
    <section id="contact" className="section-pad tesssst"  style={{ padding: "100px 5%", background: C.navy }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Contact & Collaboration</SectionTag>
        <SectionTitle>Travaillons ensemble</SectionTitle>
        <p style={{ fontSize: "1rem", color: C.gray, maxWidth: 560, lineHeight: 1.7 }}>Que vous souhaitiez recruter, collaborer sur un projet ou rejoindre notre réseau partenaires — nous sommes à votre écoute.</p>
      </div>
      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div className="reveal">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {methods.map(m => (
              <div key={m.label} className="hov-border" style={{ display: "flex", alignItems: "center", gap: "1rem", background: C.glass, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(26,107,245,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{m.icon}</div>
                <div>
                  <div style={{ fontSize: ".75rem", color: C.gray, marginBottom: ".1rem" }}>{m.label}</div>
                  <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".15s", background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 12, padding: "2rem" }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.5rem" }}>Envoyer une demande</div>
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: ".82rem", fontWeight: 600, color: C.grayLt, marginBottom: ".5rem" }}>Type de demande</label>
            <select value={type} onChange={e => setType(e.target.value)}>
              {["Recruter un étudiant / diplômé","Proposer un projet collaboratif","Devenir partenaire entreprise","Sponsoring / Événement","Autre demande"].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: ".82rem", fontWeight: 600, color: C.grayLt, marginBottom: ".5rem" }}>Nom & Prénom</label>
              <input type="text" placeholder="Votre nom complet" value={nom} onChange={e => setNom(e.target.value)} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".82rem", fontWeight: 600, color: C.grayLt, marginBottom: ".5rem" }}>Entreprise</label>
              <input type="text" placeholder="Nom de votre entreprise" value={entreprise} onChange={e => setEntreprise(e.target.value)} />
            </div>
          </div>
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: ".82rem", fontWeight: 600, color: C.grayLt, marginBottom: ".5rem" }}>Email professionnel</label>
            <input type="email" placeholder="vous@entreprise.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: ".82rem", fontWeight: 600, color: C.grayLt, marginBottom: ".5rem" }}>Message</label>
            <textarea placeholder="Décrivez votre demande ou projet..." value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <button onClick={handleSubmit} className="btn-primary-el" style={{ width: "100%", justifyContent: "center", background: sent ? "rgba(34,197,94,.15)" : C.blue, border: sent ? "1px solid rgba(34,197,94,.3)" : "none", color: sent ? "#4ADE80" : C.white }}>
            {sent ? "✓ Demande envoyée avec succès !" : "Envoyer la demande →"}
          </button>
        </div>
      </div>
    </section>
  );
}