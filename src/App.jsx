import { useState, useEffect, useRef } from "react";
import Contact from "./lib/contact"
import Equipe from "./lib/equipe"
import Competences from "./lib/skills"
import Presentation from "./lib/presentation";


/* ─── DESIGN TOKENS ─── */
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

/* ─── CSS INJECTION (fonts + keyframes) ─── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
    *{margin:0;padding:0;box-sizing:border-box;}
    html{scroll-behavior:smooth;}
    body{font-family:'DM Sans',sans-serif;background:${C.navy};color:${C.white};overflow-x:hidden;}
    @keyframes gridMove{0%{transform:translateY(0)}100%{transform:translateY(60px)}}
    @keyframes pulse{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.1);opacity:1}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
    @keyframes barGrow{from{width:0}to{width:var(--w)}}
    @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(7px)}}
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease;}
    .reveal.vis{opacity:1;transform:translateY(0);}
    .hov-card{transition:transform .25s,border-color .25s,box-shadow .25s;}
    .hov-card:hover{transform:translateY(-5px);border-color:rgba(26,107,245,.35)!important;box-shadow:0 18px 40px rgba(0,0,0,.3);}
    .hov-tech{transition:transform .22s,border-color .22s,background .22s,box-shadow .22s;}
    .hov-tech:hover{transform:translateY(-4px);border-color:rgba(26,107,245,.4)!important;background:rgba(26,107,245,.08)!important;box-shadow:0 8px 28px rgba(26,107,245,.15);}
    .hov-border{transition:border-color .2s,background .2s;}
    .hov-border:hover{border-color:rgba(26,107,245,.3)!important;}
    .hov-lift:hover{transform:translateY(-3px);border-color:rgba(26,107,245,.35)!important;}
    .btn-primary-el{background:${C.blue};color:${C.white};padding:.875rem 2rem;border-radius:8px;font-weight:600;font-size:.95rem;text-decoration:none;transition:background .2s,transform .2s,box-shadow .2s;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:.5rem;font-family:'DM Sans',sans-serif;}
    .btn-primary-el:hover{background:${C.blueBr};transform:translateY(-2px);box-shadow:0 8px 30px rgba(26,107,245,.4);}
    .btn-outline-el{background:transparent;color:${C.white};padding:.875rem 2rem;border-radius:8px;font-weight:600;font-size:.95rem;text-decoration:none;border:1px solid ${C.border};transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;}
    .btn-outline-el:hover{border-color:rgba(255,255,255,.3);background:${C.glass};transform:translateY(-2px);}
    .expertise-card-el::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${C.blue},${C.cyan});transform:scaleX(0);transform-origin:left;transition:transform .3s;}
    .expertise-card-el:hover::after{transform:scaleX(1);}
    .expertise-card-el:hover{border-color:rgba(26,107,245,.35)!important;transform:translateY(-4px);}
    .expertise-card-el{transition:transform .3s,border-color .3s;}
    .team-link-el{width:30px;height:30px;border-radius:6px;background:${C.glass};border:1px solid ${C.border};display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;text-decoration:none;color:${C.gray};transition:border-color .2s,color .2s;}
    .team-link-el:hover{border-color:rgba(26,107,245,.4);color:${C.blueBr};}
    .proj-link-el{font-size:.8rem;font-weight:600;color:${C.blueBr};text-decoration:none;display:flex;align-items:center;gap:.3rem;transition:color .2s;}
    .proj-link-el:hover{color:${C.cyan};}
    .social-el{width:36px;height:36px;border-radius:8px;background:${C.glass};border:1px solid ${C.border};display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;font-family:'Syne',sans-serif;text-decoration:none;color:${C.gray};transition:border-color .2s,color .2s;}
    .social-el:hover{border-color:rgba(26,107,245,.4);color:${C.blueBr};}
    .footer-link-el{font-size:.82rem;color:${C.gray};text-decoration:none;transition:color .2s;}
    .footer-link-el:hover{color:${C.white};}
    .strength-el{background:${C.glass};border:1px solid ${C.border};border-radius:8px;padding:.75rem 1rem;font-size:.85rem;font-weight:500;display:flex;align-items:center;gap:.5rem;transition:border-color .2s,background .2s;}
    .strength-el:hover{border-color:rgba(26,107,245,.4);background:rgba(26,107,245,.08);}
    .nav-link-el{color:${C.gray};text-decoration:none;font-size:.875rem;font-weight:500;transition:color .2s;}
    .nav-link-el:hover{color:${C.white};}
    input,textarea,select{width:100%;background:${C.navy};border:1px solid ${C.border};border-radius:8px;padding:.75rem 1rem;color:${C.white};font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none;transition:border-color .2s;-webkit-appearance:none;}
    input:focus,textarea:focus,select:focus{border-color:rgba(26,107,245,.5);}
    textarea{resize:vertical;min-height:100px;}
    select option{background:${C.navyMid};}
    ::-webkit-scrollbar{width:6px;}
    ::-webkit-scrollbar-track{background:${C.navy};}
    ::-webkit-scrollbar-thumb{background:${C.navyLt};border-radius:3px;}
    @media(max-width:900px){.two-col{grid-template-columns:1fr!important;}.footer-four{grid-template-columns:1fr 1fr!important;}.nav-desktop{display:none!important;}.hamburger-el{display:flex!important;}.stats-wrap{padding:2.5rem!important;}}
    @media(max-width:600px){.section-pad{padding:70px 5%!important;}.hero-stats-row{gap:1.5rem!important;}.proj-grid{grid-template-columns:1fr!important;}.footer-four{grid-template-columns:1fr!important;}.form-row{grid-template-columns:1fr!important;}.stats-wrap{padding:2rem 1.5rem!important;}}
  `}</style>
);

/* ─── UTILITIES ─── */
const TagSm = ({ children }) => (
  <span style={{ fontSize: ".72rem", fontWeight: 600, color: C.blueBr, background: "rgba(26,107,245,.12)", border: "1px solid rgba(26,107,245,.2)", padding: ".2rem .6rem", borderRadius: "100px" }}>
    {children}
  </span>
);

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

const Divider = () => (
  <div style={{ width: "100%", height: 1, background: `linear-gradient(90deg,transparent,${C.border} 30%,${C.border} 70%,transparent)` }} />
);

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── COUNTER HOOK ─── */
function useCounter(ref, end, suffix, duration = 1200) {
  useEffect(() => {
    if (!ref.current) return;
    const isFloat = String(end).includes(".");
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { start = end; clearInterval(timer); }
        if (ref.current) ref.current.textContent = (isFloat ? start.toFixed(1) : Math.floor(start)) + suffix;
      }, 16);
      obs.disconnect();
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
}

/* ═══════════════════════════════════════════════════
   SECTIONS
═══════════════════════════════════════════════════ */

/* ─── NAV ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["#presentation","Filière"],["#competences","Compétences"],["#partenariats","Partenariats"],["#equipe","Encadreurs"]];
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 5%", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(8,15,30,.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}`, boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,.4)" : "none", transition: "box-shadow .3s" }}>
        <a href="#" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.white, textDecoration: "none", letterSpacing: "-.02em" }}>
          <div className="flex flex-col">
            <p className="text-blue-400">ISEM</p>
            <p className="text-xs">Ingenieur en Science Exactes et de modelisation</p>

          </div>
        </a>
        <ul className="nav-desktop" style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}>
          {links.map(([href, label]) => (
            <li key={href}><a href={href} className="nav-link-el">{label}</a></li>
          ))}
          <li><a href="#contact" className="btn-primary-el" style={{ padding: ".5rem 1.25rem", fontSize: ".875rem" }}>Nous contacter →</a></li>
        </ul>
        <button className="hamburger-el" onClick={() => setOpen(o => !o)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: C.white, borderRadius: 2, transition: ".3s" }} />)}
        </button>
      </nav>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(8,15,30,.98)", padding: "100px 5% 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[...links, ["#contact","Contact"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 700, color: C.white, textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      )}
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
      {/* animated grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,245,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,245,.06) 1px,transparent 1px)`, backgroundSize: "60px 60px", animation: "gridMove 20s linear infinite" }} />
      {/* glows */}
      <div style={{ position: "absolute", width: 700, height: 700, background: `radial-gradient(circle,rgba(26,107,245,.2) 0%,transparent 70%)`, top: -200, right: -200, pointerEvents: "none", animation: "pulse 6s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: `radial-gradient(circle,rgba(6,182,212,.12) 0%,transparent 70%)`, bottom: 0, left: -100, pointerEvents: "none", animation: "pulse 8s ease-in-out infinite reverse" }} />
      {/* content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 780 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "rgba(26,107,245,.12)", border: "1px solid rgba(26,107,245,.3)", borderRadius: 100, padding: ".4rem 1rem", fontSize: ".8rem", fontWeight: 600, color: C.blueBr, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "1.5rem", animation: "fadeUp .6s ease forwards" }}>
          <span style={{ width: 6, height: 6, background: C.blueBr, borderRadius: "50%", animation: "blink 1.5s ease-in-out infinite", flexShrink: 0 }} />
          Filière d'Excellence · INPHB
        </div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.03em", marginBottom: "1rem", animation: "fadeUp .6s .1s ease both" }}>
          Ingenieur <span style={{ color: C.blueBr }}>En Science Exactes</span><br />
          & <span style={{ background: `linear-gradient(135deg,${C.cyan},${C.blueBr})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>de Modelisation</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: C.gray, maxWidth: 560, marginBottom: "2.5rem", lineHeight: 1.75, animation: "fadeUp .6s .2s ease both" }}>
          Former les architectes du numérique de demain — des ingénieurs capables de concevoir, déployer et piloter des systèmes logiciels intelligents à haute valeur ajoutée.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp .6s .3s ease both" }}>
          {/* <a href="#projets" className="btn-primary-el">Voir nos projets →</a> */}
          <a href="#partenariats" className="btn-outline-el">🤝 Devenir partenaire</a>
        </div>
        {/* <div className="hero-stats-row" style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap", animation: "fadeUp .6s .4s ease both" }}>
          {[["92%","Taux d'insertion"],["48+","Projets réalisés"],["120+","Diplômés"],["35+","Entreprises partenaires"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2rem", fontWeight: 800, color: C.white, lineHeight: 1 }}>
                <span style={{ color: C.blueBr }}>{num}</span>
              </div>
              <div style={{ fontSize: ".8rem", color: C.gray, marginTop: ".25rem" }}>{label}</div>
            </div>
          ))}
        </div> */}
      </div>
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", color: C.gray, fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase", animation: "bounce 2s ease-in-out infinite" }}>
        Scroll
        <div style={{ width: 1, height: 40, background: `linear-gradient(${C.gray},transparent)` }} />
      </div>
    </section>
  );
}





/* ─── PROJECT CARD ─── */
function ProjectCard({ emoji, status, statusClass, title, problem, solution, result, tags, links, delay }) {
  const statusColors = {
    live: { bg: "rgba(34,197,94,.15)", color: "#4ADE80", border: "rgba(34,197,94,.2)" },
    study: { bg: "rgba(245,158,11,.15)", color: "#FBBF24", border: "rgba(245,158,11,.2)" },
  };
  const sc = statusColors[statusClass];
  return (
    <div className="hov-card reveal" style={{ transitionDelay: delay, background: C.navy, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "1.5rem 1.5rem 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <span style={{ fontSize: "2rem" }}>{emoji}</span>
        <span style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: ".25rem .6rem", borderRadius: 100, background: sc.bg, color: sc.color, border: `1px solid ${sc.border}` }}>{status}</span>
      </div>
      <div style={{ padding: "1.25rem 1.5rem", flex: 1 }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: ".75rem" }}>{title}</div>
        <div style={{ fontSize: ".83rem", color: C.gray, marginBottom: ".75rem", lineHeight: 1.6 }}>🔴 <strong>Problème :</strong> {problem}</div>
        <div style={{ fontSize: ".83rem", color: C.white, lineHeight: 1.6, marginBottom: "1rem" }}>✅ <strong>Solution :</strong> {solution}</div>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.15)", borderRadius: 6, padding: ".6rem .75rem", fontSize: ".8rem", fontWeight: 500, color: "#4ADE80", marginBottom: "1rem" }}>📈 {result}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
          {tags.map(t => <TagSm key={t}>{t}</TagSm>)}
        </div>
      </div>
      <div style={{ padding: "1rem 1.5rem", borderTop: `1px solid ${C.border}`, display: "flex", gap: ".75rem" }}>
        {links.map(([label, href]) => <a key={label} href={href} className="proj-link-el">{label} →</a>)}
      </div>
    </div>
  );
}

function Projets() {
  const projects = [
    { emoji:"🏥", status:"Déployé", statusClass:"live", title:"MediAssist — Triage IA en Urgences", problem:"Les urgences hospitalières souffrent d'une surcharge de patients mal triés, retardant les soins critiques.", solution:"Application web utilisant un modèle NLP pour classifier automatiquement la gravité des cas selon les symptômes déclarés.", result:"Réduction de 38% du temps d'attente moyen", tags:["Python","FastAPI","React","BERT","PostgreSQL"], links:[["⬡ GitHub","#"],["🔗 Démo","#"]], delay:"0s" },
    { emoji:"🌾", status:"Déployé", statusClass:"live", title:"AgriSmart — Prédiction de Rendements", problem:"Les agriculteurs locaux manquent d'outils pour anticiper les rendements et optimiser leurs ressources.", solution:"Dashboard mobile exploitant données météo, satellites Sentinel-2 et historiques pour prédire les rendements.", result:"Précision de 87% validée sur 2 saisons", tags:["Python","TensorFlow","Flutter","GEE API"], links:[["⬡ GitHub","#"],["🔗 Démo","#"]], delay:".1s" },
    { emoji:"🏦", status:"Étude de cas", statusClass:"study", title:"FinGuard — Détection de Fraudes", problem:"Les institutions financières subissent des pertes croissantes liées aux transactions frauduleuses mobiles.", solution:"Système de détection temps réel basé sur Random Forest + règles métier, intégrable via API à tout système bancaire.", result:"95.2% de précision, moins de 200ms/transaction", tags:["scikit-learn","Kafka","Django","Redis"], links:[["⬡ GitHub","#"],["📄 Rapport","#"]], delay:".2s" },
    { emoji:"🚦", status:"Prototype validé", statusClass:"live", title:"TrafficFlow — Gestion Intelligente du Trafic", problem:"Les embouteillages chroniques représentent des millions d'heures perdues et une pollution évitable.", solution:"Gestion adaptative des feux via Computer Vision et optimisation par algorithmes génétiques.", result:"Simulation : -27% de temps de traversée moyen", tags:["OpenCV","YOLOv8","C++","Raspberry Pi"], links:[["⬡ GitHub","#"],["🎬 Vidéo","#"]], delay:"0s" },
    { emoji:"📦", status:"Déployé", statusClass:"live", title:"LogiChain — Traçabilité Blockchain", problem:"La traçabilité pharmaceutique est insuffisante, exposant les patients à des risques de contrefaçon.", solution:"Plateforme de traçabilité immuable sur Hyperledger avec scan QR pour vérification en temps réel.", result:"3 distributeurs pilotes, 0 incident depuis 6 mois", tags:["Hyperledger","Node.js","React Native","IPFS"], links:[["⬡ GitHub","#"],["🔗 Démo","#"]], delay:".1s" },
    { emoji:"🎓", status:"Déployé", statusClass:"live", title:"EduPath — E-learning Adaptatif", problem:"Les plateformes d'apprentissage ne s'adaptent pas aux lacunes individuelles de chaque apprenant.", solution:"LMS avec moteur de recommandation basé sur le profil d'apprentissage et répétition espacée intelligente.", result:"+45% de rétention vs. format classique", tags:["Next.js","Python","Recommender","MongoDB"], links:[["⬡ GitHub","#"],["🔗 Démo","#"]], delay:".2s" },
  ];
  return (
    <section id="projets" className="section-pad" style={{ padding: "100px 5%", background: C.navyMid }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Projets Étudiants 🔥</SectionTag>
        <SectionTitle>Des réalisations concrètes,<br />à impact réel</SectionTitle>
        <p style={{ fontSize: "1rem", color: C.gray, maxWidth: 560, lineHeight: 1.7 }}>Chaque projet répond à un besoin réel. Nos étudiants livrent des solutions déployées, mesurables et documentées — preuves de leur employabilité immédiate.</p>
      </div>
      <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: "1.5rem" }}>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}

/* ─── PARTENARIATS ─── */
function Partenariats() {
  const whys = [
    { n:"01", text:<><strong>Accès prioritaire aux meilleurs profils</strong> — Présentez vos offres à nos étudiants avant toute diffusion externe via notre portail partenaires.</> },
    { n:"02", text:<><strong>Formation aux outils de votre entreprise</strong> — Intégrez vos technologies à nos curricula pour que nos diplômés arrivent déjà formés à vos stacks.</> },
    { n:"03", text:<><strong>Projets sur vos cas d'usage réels</strong> — Soumettez des problèmes métier, nos équipes étudiantes livrent des prototypes fonctionnels.</> },
    { n:"04", text:<><strong>Visibilité & branding auprès des talents</strong> — Logo sur le site, stands lors de nos événements, sessions de recrutement dédiées.</> },
  ];    
  const opps = [
    { icon:"📋", title:"Stages", desc:"Accueillez des stagiaires Bac+3 à Bac+5 pendant 3 à 6 mois sur vos projets stratégiques." },
    { icon:"💼", title:"Recrutement", desc:"Accédez à notre réseau de jeunes diplômés hautement qualifiés et opérationnels dès J+1." },
    { icon:"🛠️", title:"Projets R&D", desc:"Confiez un défi technologique à nos groupes projet, encadrés par nos enseignants-chercheurs." },
    { icon:"🎪", title:"Sponsoring", desc:"Sponsorisez nos hackathons, conférences et remises de diplômes pour une visibilité maximale." },
  ];
  return (
    <section id="partenariats" className="section-pad" style={{ padding: "100px 5%", background: C.navy }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Partenariats & Opportunités 🤝</SectionTag>
        <SectionTitle>Collaborons pour construire<br />le numérique de demain</SectionTitle>
      </div>
      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
        <div className="reveal">
          <p style={{ color: C.gray, lineHeight: 1.8, fontSize: ".95rem", marginBottom: "2rem" }}>
            Rejoindre notre réseau partenaires, c'est accéder à un vivier de talents formés sur vos outils, motivés, et capables de contribuer dès le premier jour. C'est aussi co-construire des solutions à votre mesure.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {whys.map(w => (
              <li key={w.n} className="hov-border" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: C.glass, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.25rem" }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: ".8rem", color: C.blueBr, flexShrink: 0, marginTop: 2 }}>{w.n}</span>
                <span style={{ fontSize: ".9rem", lineHeight: 1.6 }}>{w.text}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary-el">Proposer un partenariat →</a>
        </div>
        <div className="reveal" style={{ transitionDelay: ".15s" }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: C.grayLt }}>Ce que nous offrons</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {opps.map(o => (
              <div key={o.title} className="hov-lift hov-card" style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: ".75rem" }}>{o.icon}</div>
                <div style={{ fontWeight: 700, fontSize: ".95rem", marginBottom: ".4rem" }}>{o.title}</div>
                <div style={{ fontSize: ".82rem", color: C.gray, lineHeight: 1.6 }}>{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TÉMOIGNAGES ─── */
function Temoignages() {
  const temos = [
    { type:"Alumni", typeClass:"alumni", stars:5, text:"Cette filière m'a donné les bases solides pour intégrer une startup parisienne en tant que Lead Developer dès ma sortie. Les projets réels m'ont appris à livrer sous pression — exactement ce que demande l'industrie.", initials:"KD", avatarColor:"rgba(26,107,245,.2)", avatarText:C.blueBr, name:"Kofi Diarra", role:"Lead Developer @ TechVenture Paris · Promo 2022", delay:"0s" },
    { type:"Partenaire", typeClass:"partner", stars:5, text:"Nous avons recruté deux diplômés de cette filière l'année dernière. Leur niveau technique et leur capacité à travailler en autonomie nous ont vraiment impressionnés. Nous revenons chaque année.", initials:"AC", avatarColor:"rgba(245,158,11,.15)", avatarText:C.gold, name:"Ama Coulibaly", role:"DRH · Groupe InnovateTech CI", delay:".1s" },
    { type:"Alumni", typeClass:"alumni", stars:5, text:"Le projet de fin d'études m'a permis de construire un portfolio solide. Trois mois après ma soutenance, j'avais reçu quatre offres d'emploi. La filière m'a vraiment préparée au monde professionnel réel.", initials:"FT", avatarColor:"rgba(6,182,212,.15)", avatarText:C.cyan, name:"Fatou Traoré", role:"Data Engineer @ Orange Digital Center · Promo 2023", delay:".2s" },
    { type:"Partenaire", typeClass:"partner", stars:5, text:"Nous avons confié un projet de détection d'anomalies à un groupe d'étudiants. La solution livrée était production-ready. Une collaboration exceptionnelle prolongée en offre de stage.", initials:"MB", avatarColor:"rgba(34,197,94,.1)", avatarText:"#4ADE80", name:"Moussa Bamba", role:"CTO · DataSphere Africa", delay:".1s" },
    { type:"Alumni", typeClass:"alumni", stars:5, text:"J'ai appris ici à penser en ingénieur, pas seulement à coder. L'approche par problème, la rigueur demandée dans les livrables — tout ça m'a donné une longueur d'avance sur mes pairs.", initials:"YK", avatarColor:"rgba(168,85,247,.15)", avatarText:"#C084FC", name:"Yao Kouamé", role:"Software Engineer @ Microsoft Nairobi · Promo 2021", delay:".2s" },
    { type:"Partenaire", typeClass:"partner", stars:5, text:"La filière GL&IA est dans notre liste de partenaires prioritaires pour le recrutement tech. Le niveau est constant, les étudiants sont motivés et leur adaptabilité est remarquable.", initials:"SD", avatarColor:"rgba(239,68,68,.1)", avatarText:"#F87171", name:"Sophie Dupont", role:"Talent Acquisition · DigitalCo", delay:".3s" },
  ];
  const typeStyle = {
    alumni: { bg:"rgba(26,107,245,.15)", color:C.blueBr },
    partner: { bg:"rgba(245,158,11,.15)", color:C.gold },
  };
  return (
    <section id="temoignages" className="section-pad" style={{ padding: "100px 5%", background: C.navyMid }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Témoignages</SectionTag>
        <SectionTitle>Ce qu'ils disent de nous</SectionTitle>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
        {temos.map(t => {
          const ts = typeStyle[t.typeClass];
          return (
            <div key={t.name} className="hov-card reveal" style={{ transitionDelay: t.delay, background: C.navy, border: `1px solid ${C.border}`, borderRadius: 12, padding: "2rem", position: "relative", overflow: "hidden" }}>
              {/* big quote */}
              <div style={{ position: "absolute", top: "0.5rem", left: "1.5rem", fontFamily: "'Syne',sans-serif", fontSize: "5rem", fontWeight: 800, color: "rgba(26,107,245,.1)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>"</div>
              <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: ".2rem .5rem", borderRadius: 4, background: ts.bg, color: ts.color }}>{t.type}</div>
              <div style={{ color: C.gold, fontSize: ".85rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
              <p style={{ fontSize: ".9rem", color: C.grayLt, lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".9rem", fontFamily: "'Syne',sans-serif", color: t.avatarText, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{t.name}</div>
                  <div style={{ fontSize: ".78rem", color: C.gray }}>{t.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const stats = [
    { val:92, suf:"%", label:"Taux d'insertion professionnelle", sub:"dans les 3 mois après diplôme", w:"92%" },
    { val:120, suf:"+", label:"Étudiants diplômés", sub:"depuis la création de la filière", w:"80%" },
    { val:48, suf:"", label:"Projets réalisés", sub:"dont 30 en conditions réelles", w:"75%" },
    { val:35, suf:"+", label:"Entreprises partenaires", sub:"locales, nationales & internationales", w:"70%" },
    { val:4.8, suf:"/5", label:"Satisfaction étudiante", sub:"enquête de fin de cursus 2024", w:"96%" },
  ];
  const refs = stats.map(() => useRef(null));
  stats.forEach((s, i) => useCounter(refs[i], s.val, s.suf));
  return (
    <section id="stats" className="section-pad" style={{ padding: "100px 5%", background: C.navy }}>
      <div className="section-header reveal" style={{ marginBottom: "3.5rem" }}>
        <SectionTag>Statistiques Clés 📊</SectionTag>
        <SectionTitle>Des chiffres qui parlent d'eux-mêmes</SectionTitle>
      </div>
      <div className="stats-wrap reveal" style={{ background: `linear-gradient(135deg,${C.navyLt},${C.navyMid})`, border: `1px solid ${C.border}`, borderRadius: 16, padding: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.blue},${C.cyan},${C.blue})` }} />
        {stats.map((s, i) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div ref={refs[i]} style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1, background: `linear-gradient(135deg,${C.white},${C.blueBr})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: ".5rem" }}>{s.val}{s.suf}</div>
            <div style={{ fontSize: ".9rem", color: C.gray, fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: ".75rem", color: C.gray, marginTop: ".25rem", opacity: .7 }}>{s.sub}</div>
            <div style={{ width: "60%", height: 2, margin: ".75rem auto 0", background: "rgba(26,107,245,.15)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", background: `linear-gradient(90deg,${C.blue},${C.cyan})`, borderRadius: 2, width: s.w, animation: "barGrow 1.5s .5s ease both" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





/* ─── FOOTER ─── */
function Footer() {
  const navLinks = [["#presentation","La filière"],["#competences","Compétences"],["#projets","Projets"],["#equipe","Encadreurs"]];
  const bizLinks = [["#partenariats","Devenir partenaire"],["#contact","Proposer un stage"],["#contact","Recruter un diplômé"],["#contact","Sponsoring"]];
  const utilLinks = [["https://inphb.edu.ci","Site de l'université"],["https://adminsite.inphb.app/public/documentspdf/INFO_RENTREE_INPHB%202025-2026%20V4%20LG.pdf","Calendrier académique"],["#","GitHub de la filière"],["#","Mentions légales"]];
  return (
    <footer style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, padding: "4rem 5% 2rem" }}>
      <div className="footer-four" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>GL<span style={{ color: C.blueBr }}>&</span>IA</div>
          <p style={{ fontSize: ".875rem", color: C.gray, lineHeight: 1.7, marginTop: ".75rem", maxWidth: 280 }}>Filière Big Data & Actuariat — Former les architectes du numérique de demain. Université INPHB, Yamoussoukro.</p>
          <div style={{ display: "flex", gap: ".75rem", marginTop: "1.25rem" }}>
            {["in","gh","tw","yt"].map(s => <a key={s} href="#" className="social-el">{s}</a>)}
          </div>
        </div>
        {[["Navigation",navLinks],["Entreprises",bizLinks],["Liens utiles",utilLinks]].map(([title, links]) => (
          <div key={title}>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".875rem", marginBottom: "1rem" }}>{title}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".6rem" }}>
              {links.map(([href, label]) => <li key={label}><a href={href} className="footer-link-el">{label}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: ".8rem", color: C.gray }}>© 2026 Filière Big Data & Actuariat — INPHB. Tous droits réservés.</p>
        <p style={{ fontSize: ".8rem", color: C.gray }}>Conçu avec ❤️ par les étudiants de la filière</p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════ */
export default function App() {
  useReveal();
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Divider />
      <Presentation />
      <Divider />
      <Competences />
      <Divider />
      {/* <Projets /> */}
      <Partenariats />
      {/* <Temoignages /> */}
      <Divider />
      <Equipe />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}
