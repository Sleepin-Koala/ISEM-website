import { useState } from "react";
import { FaChartBar, FaBrain, FaShieldAlt, FaCode, FaDatabase, FaCalculator, FaProjectDiagram, FaGlobeAfrica } from "react-icons/fa";

/* ─── DESIGN TOKENS ─── */
const C = {
  navy:    "#080F1E",
  navyMid: "#0D1A35",
  navyLt:  "#12264E",
  blue:    "#1A6BF5",
  blueBr:  "#3B82F6",
  cyan:    "#06B6D4",
  gold:    "#F59E0B",
  emerald: "#10B981",
  white:   "#F8FAFF",
  gray:    "#8A9BB8",
  grayLt:  "#CBD5E8",
  border:  "rgba(255,255,255,0.08)",
  glass:   "rgba(255,255,255,0.04)",
};

export default function Competences() {

  const [activeTrack, setActiveTrack] = useState("bda");

  /* ─── TECH PILLS ─── */
  const techsBDA = [
    [<FaDatabase />, "Big Data"],
    [<FaBrain />, "Deep Learning"],
    [<FaChartBar />, "Data Science"],
    [<FaCode />, "Python / R"],
    [<FaShieldAlt />, "RGPD & IA Éthique"],
    [<FaProjectDiagram />, "Cloud & HPC"],
  ];

  const techsActuariat = [
    [<FaCalculator />, "Actuariat"],
    [<FaChartBar />, "Modélisation Stochastique"],
    [<FaBrain />, "Machine Learning"],
    [<FaCode />, "Python / R"],
    [<FaGlobeAfrica />, "Finance & Assurance"],
    [<FaShieldAlt />, "Gestion des Risques"],
  ];

  /* ─── EXPERTISE CARDS ─── */
  const expertisesBDA = [
    {
      n: "01",
      title: "Science des Données & IA",
      desc: "Nos ingénieurs maîtrisent tout le cycle de la donnée : collecte, modélisation, apprentissage profond et déploiement en production. Prêts à piloter vos projets data-driven.",
      tags: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
      accent: C.blue,
    },
    {
      n: "02",
      title: "Big Data & Infrastructure Cloud",
      desc: "Architecture de pipelines massifs, traitement temps réel et exploitation d'infrastructures cloud et HPC pour des systèmes scalables à haute disponibilité.",
      tags: ["Data Warehouse", "BI", "Cloud", "HPC"],
      accent: C.cyan,
    },
    {
      n: "03",
      title: "Traitement du Langage & Signal",
      desc: "Compétences avancées en NLP, reconnaissance vocale, web-mining et traitement d'image — des savoir-faire directement exploitables dans vos produits IA.",
      tags: ["NLP", "Speech Recognition", "Web Mining", "Image Processing"],
      accent: C.emerald,
    },
    {
      n: "04",
      title: "Ingénierie Logicielle & Systèmes",
      desc: "Développement orienté objet avancé, architecture réseau et cybersécurité pour des solutions robustes, maintenables et sécurisées.",
      tags: ["C++ Avancé", "Cybersécurité", "Architecture Réseau", "Java"],
      accent: C.gold,
    },
    {
      n: "05",
      title: "IA Responsable & Conformité RGPD",
      desc: "Formation unique sur l'éthique algorithmique, la propriété intellectuelle des données et les réglementations IA — un atout décisif pour vos obligations légales.",
      tags: ["RGPD", "Éthique IA", "Propriété Intellectuelle", "Réglementation"],
      accent: C.blue,
    },
    {
      n: "06",
      title: "Mathématiques du Machine Learning",
      desc: "Fondements rigoureux : optimisation stochastique, plan d'expérience, analyse d'incertitude — une rigueur qui différencie nos ingénieurs sur le marché.",
      tags: ["Optimisation", "Statistiques", "Modélisation", "EDP"],
      accent: C.cyan,
    },
  ];

  const expertisesActuariat = [
    {
      n: "01",
      title: "Modélisation Actuarielle & Risques",
      desc: "Maîtrise des outils probabilistes avancés — martingales, chaînes de Markov, processus de Poisson — pour quantifier et piloter les risques dans l'assurance et la finance.",
      tags: ["Martingales", "Chaînes de Markov", "Processus de Poisson", "Actuariat"],
      accent: C.gold,
    },
    {
      n: "02",
      title: "Finance Quantitative",
      desc: "De la finance bancaire aux modèles stochastiques, nos ingénieurs-actuaires construisent et valident des modèles de pricing, de couverture et d'optimisation de portefeuille.",
      tags: ["Finance Stochastique", "Modèles Discrets", "Méthodes Numériques", "Pricing"],
      accent: C.blue,
    },
    {
      n: "03",
      title: "Assurance Non-Vie & Tarification",
      desc: "Développement de modèles de tarification, provisionnement et stress-testing pour les compagnies d'assurance IARD — conformes aux exigences Solvabilité II.",
      tags: ["Assurance IARD", "Provisionnement", "Tarification", "Solvabilité II"],
      accent: C.emerald,
    },
    {
      n: "04",
      title: "Gestion des Risques Financiers",
      desc: "Analyse du risque de crédit, mesure de risque (VaR, CVaR) et implémentation de modèles de gestion des risques opérationnels et de marché.",
      tags: ["Risque de Crédit", "VaR", "CVaR", "Bâle III"],
      accent: C.cyan,
    },
    {
      n: "05",
      title: "Économétrie & Décision",
      desc: "Modèles économétriques appliqués à la prévision, à l'analyse de politiques financières et à la prise de décision stratégique data-driven.",
      tags: ["Économétrie", "Prévision", "Systèmes d'Information", "Aide à la Décision"],
      accent: C.gold,
    },
    {
      n: "06",
      title: "Simulation & Calcul Scientifique",
      desc: "Simulation de Monte Carlo, calcul haute performance et implémentation Python/R de modèles stochastiques — pour des résultats fiables à grande échelle.",
      tags: ["Python", "R", "Monte Carlo", "HPC"],
      accent: C.blue,
    },
  ];

  const techs = activeTrack === "bda" ? techsBDA : techsActuariat;
  const expertises = activeTrack === "bda" ? expertisesBDA : expertisesActuariat;

  /* ─── REUSABLE COMPONENTS ─── */
  const SectionTag = ({ children }) => (
    <div style={{ fontSize: ".75rem", fontWeight: 700, color: C.blueBr, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: ".75rem" }}>
      {children}
    </div>
  );

  const SectionTitle = ({ children }) => (
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1rem", color: C.white }}>
      {children}
    </h2>
  );

  const TagSm = ({ children, accent }) => (
    <span style={{
      fontSize: ".7rem", fontWeight: 600,
      color: accent || C.blueBr,
      background: `${accent || C.blue}18`,
      border: `1px solid ${accent || C.blue}30`,
      padding: ".2rem .6rem", borderRadius: "100px",
    }}>
      {children}
    </span>
  );

  const TrackBtn = ({ id, label, sub }) => (
    <button
      onClick={() => setActiveTrack(id)}
      style={{
        background: activeTrack === id ? C.blue : C.glass,
        border: `1px solid ${activeTrack === id ? C.blue : C.border}`,
        borderRadius: 10, padding: "1rem 1.5rem", cursor: "pointer",
        textAlign: "left", transition: "all .2s",
        minWidth: 200,
      }}
    >
      <div style={{ fontSize: ".85rem", fontWeight: 700, color: C.white, marginBottom: ".2rem" }}>{label}</div>
      <div style={{ fontSize: ".75rem", color: activeTrack === id ? "rgba(255,255,255,.75)" : C.gray }}>{sub}</div>
    </button>
  );

  return (
    <section id="competences" style={{ padding: "100px 5%", background: C.navy }}>

      {/* ── HEADER ── */}
      <div style={{ marginBottom: "3rem" }}>
        <SectionTag>Compétences & Expertises — ISEM · INP-HB</SectionTag>
        <SectionTitle>
          Des ingénieurs formés aux défis<br />
          de la donnée et du risque
        </SectionTitle>
        <p style={{ fontSize: "1rem", color: C.gray, maxWidth: 600, lineHeight: 1.75 }}>
          Le parcours ISEM de l'INP-HB forme des ingénieurs à double profil — <strong style={{ color: C.grayLt }}>Big Data & IA</strong> et <strong style={{ color: C.grayLt }}>Actuariat & Finance Quantitative</strong> — capables de transformer la complexité des données en avantage stratégique pour votre organisation.
        </p>
      </div>

      {/* ── TRACK SELECTOR ── */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        <TrackBtn id="bda" label="Big Data & Intelligence Artificielle" sub="NLP · Computer Vision · Cloud · Cybersécurité" />
        <TrackBtn id="actuariat" label="Actuariat & Finance Quantitative" sub="Assurance · Risques · Modèles Stochastiques" />
      </div>

      {/* ── TECH PILLS ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: "1rem", marginBottom: "3.5rem",
      }}>
        {techs.map(([icon, name]) => (
          <div key={name} style={{
            background: C.glass, border: `1px solid ${C.border}`,
            borderRadius: 12, padding: "1.4rem 1rem",
            textAlign: "center", cursor: "default",
            transition: "border-color .2s",
          }} className="flex flex-col justify-center items-center">
            <div style={{ fontSize: "1.6rem", marginBottom: ".5rem", color: C.blueBr }}>{icon}</div>
            <div style={{ fontSize: ".78rem", fontWeight: 600, color: C.grayLt }}>{name}</div>
          </div>
        ))}
      </div>

      {/* ── EXPERTISE CARDS ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        gap: "1.5rem",
      }}>
        {expertises.map(ex => (
          <div key={ex.n} style={{
            background: C.navyMid,
            border: `1px solid ${C.border}`,
            borderTop: `2px solid ${ex.accent}`,
            borderRadius: 12, padding: "2rem",
            position: "relative", overflow: "hidden",
            transition: "transform .2s, box-shadow .2s",
          }}>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: "3rem", fontWeight: 800,
              color: `${ex.accent}18`, lineHeight: 1, marginBottom: "1rem",
              userSelect: "none",
            }}>
              {ex.n}
            </div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: ".6rem", color: C.white }}>
              {ex.title}
            </div>
            <div style={{ fontSize: ".875rem", color: C.gray, lineHeight: 1.75, marginBottom: "1.2rem" }}>
              {ex.desc}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
              {ex.tags.map(t => <TagSm key={t} accent={ex.accent}>{t}</TagSm>)}
            </div>
          </div>
        ))}
      </div>

      {/* ── PARTENARIAT CTA ── */}
      <div style={{
        marginTop: "4rem",
        background: `linear-gradient(135deg, ${C.navyLt}, ${C.navyMid})`,
        border: `1px solid ${C.border}`,
        borderLeft: `4px solid ${C.blue}`,
        borderRadius: 14, padding: "2.5rem",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center", gap: "1.5rem",
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1.15rem", color: C.white, marginBottom: ".4rem" }}>
            Devenez partenaire entreprise de l'ISEM · INP-HB
          </div>
          <p style={{ fontSize: ".9rem", color: C.gray, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Accueillez des stagiaires, co-encadrez des projets de modélisation, ou recrutez directement dans notre vivier de talents — plus de <strong style={{ color: C.grayLt }}>30 ECTS de projets appliqués</strong> par étudiant sur deux ans.
          </p>
        </div>
        <button style={{
          background: C.blue, color: C.white,
          border: "none", borderRadius: 8,
          padding: ".9rem 2rem", fontWeight: 700,
          fontSize: ".9rem", cursor: "pointer",
          whiteSpace: "nowrap",
          boxShadow: `0 0 24px ${C.blue}50`,
        }}>
          Nous contacter →
        </button>
      </div>

    </section>
  );
}
