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


/* ─── PRESENTATION ─── */
export default function Presentation() {
  const missions = [
    { icon: "🎯", title: "Notre Vision", desc: "Être la référence nationale pour la formation d'ingénieurs logiciel et IA directement employables dès la sortie de cursus." },
    { icon: "📚", title: "Notre Mission", desc: "Allier rigueur académique et pratique intensive pour produire des talents capables de résoudre des problèmes réels à fort impact." },
    { icon: "🚀", title: "Objectifs Pédagogiques", desc: "Maîtrise des architectures logicielles, du Machine Learning, des systèmes distribués et des méthodologies Agile & DevOps." },
    // { icon: "🌍", title: "Insertion Professionnelle", desc: "Partenariats actifs avec les entreprises tech, accompagnement stage/emploi personnalisé, réseau alumni de 120+ diplômés.", last: true },
  ];
  const strengths = ["Formation par projet","Immersion entreprise","Encadrement expert","Projets open source"];

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
    <section id="presentation" className="section-pad" style={{ padding: "100px 5%", background: C.navyMid }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>À propos</SectionTag>
        <SectionTitle>Une filière pensée<br />pour l'excellence opérationnelle</SectionTitle>
      </div>
      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <div className="reveal">
          <p style={{ color: C.gray, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: ".95rem" }}>
            La filière <strong style={{ color: C.white }}>Big Data & Actuariat</strong> forme en 3 ans des ingénieurs polyvalents, immédiatement opérationnels, capables de répondre aux enjeux technologiques des entreprises modernes. Notre pédagogie allie théorie rigoureuse et projets à fort impact concret.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {strengths.map(s => (
              <div key={s} className="strength-el"><span style={{ color: C.blueBr }}>✦</span>{s}</div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".15s" }}>
          <div style={{ background: C.navyLt, border: `1px solid ${C.border}`, borderRadius: 12, padding: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.blue},${C.cyan})` }} />
            {missions.map(m => (
              <div key={m.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem 0", borderBottom: m.last ? "none" : `1px solid ${C.border}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(26,107,245,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{m.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".95rem", marginBottom: ".25rem" }}>{m.title}</div>
                  <div style={{ fontSize: ".85rem", color: C.gray, lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}