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

/* ─── ÉQUIPE ─── */
export default function Equipe() {
  const team = [
    { initials:"TA", avatarBg:"rgba(26,107,245,.15)", avatarColor:C.blueBr, name:"Prof. Toure Augustin", title:"Directeur de Filière", spec:"Professeur de Mathematique" },
    { initials:"A", avatarBg:"rgba(6,182,212,.15)", avatarColor:C.cyan, name:"Dr. Assielou", title:"Professeur d'informatique", spec:"Docteure en IA/Machine Learning"}
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
    <section id="equipe" className="section-pad" style={{ padding: "100px 5%", background: C.navyMid }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Équipe Pédagogique</SectionTag>
        <SectionTitle>Des experts au service<br />de notre réussite</SectionTitle>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1.5rem" }}>
        {team.map((m, i) => (
          <div key={m.name} className="hov-card reveal" style={{ transitionDelay: `${i * .1}s`, background: C.navy, border: `1px solid ${C.border}`, borderRadius: 12, padding: "2rem", textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", margin: "0 auto 1rem", background: m.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: m.avatarColor, border: `2px solid ${C.border}` }}>{m.initials}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: ".25rem" }}>{m.name}</div>
            <div style={{ fontSize: ".8rem", color: C.blueBr, fontWeight: 600, marginBottom: ".25rem" }}>{m.title}</div>
            <div style={{ fontSize: ".8rem", color: C.gray, marginBottom: "1rem", lineHeight: 1.5 }}>{m.spec}</div>
            <div style={{ display: "flex", justifyContent: "center", gap: ".75rem" }}>
              <a href="#" className="team-link-el">in</a>
              <a href="#" className="team-link-el">gh</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}