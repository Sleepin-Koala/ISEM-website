import { useRef, useState } from "react";
import {
    TbMathIntegral, TbMatrix, TbWaveSine, TbTargetArrow, TbInfinity, TbCpu, TbChartHistogram, TbChartDots3,
    TbBrain, TbStack2, TbMessageLanguage, TbScan, TbDatabase, TbRocket, TbAtom, TbChartDots2,
    TbShieldCheck, TbChartCandle, TbCalculator, TbTimeline, TbBuildingBank, TbChartLine, TbChartScatter, TbAffiliate,
} from "react-icons/tb";

const tabs = [
    { id: "general", label: "Tronc commun" },
    { id: "ia", label: "IA & Data Science" },
    { id: "actuariat", label: "Actuariat & Finance" },
];

const panels = {
    general: {
        cards: [
            { icon: TbMathIntegral, name: "Analyse mathématique", desc: "Espaces de Banach, théorie de la mesure, analyse fonctionnelle pour la modélisation avancée." },
            { icon: TbMatrix, name: "Algèbre linéaire", desc: "Décompositions spectrales, espaces vectoriels, applications aux systèmes linéaires et au machine learning." },
            { icon: TbWaveSine, name: "Modélisation EDO/EDP", desc: "Équations différentielles ordinaires et aux dérivées partielles, simulation de systèmes physiques et biologiques." },
            { icon: TbTargetArrow, name: "Optimisation", desc: "Optimisation convexe, gradient stochastique, programmation linéaire et entière." },
            { icon: TbInfinity, name: "Systèmes dynamiques", desc: "Attracteurs, bifurcations, chaos déterministe, analyse de stabilité." },
            { icon: TbCpu, name: "Calcul scientifique", desc: "Méthodes numériques, analyse d'erreur, implémentation haute performance en Python/Julia." },
            { icon: TbChartHistogram, name: "Statistique inférentielle", desc: "Estimation, tests, intervalles de confiance, modèles de régression et sélection de modèles." },
            { icon: TbChartDots3, name: "Théorie des graphes", desc: "Algorithmes sur les graphes, réseaux complexes, applications aux systèmes réels." },
        ],
        apps: ["Simulation climatique", "Optimisation logistique", "Modèles épidémiologiques", "Systèmes de contrôle", "Recherche opérationnelle", "Cryptographie"],
    },
    ia: {
        cards: [
            { icon: TbBrain, name: "Machine Learning", desc: "Apprentissage supervisé, non-supervisé et par renforcement. Fondements théoriques et implémentation." },
            { icon: TbStack2, name: "Deep Learning", desc: "Architectures CNN, RNN, Transformer. Optimisation, régularisation, transfert learning." },
            { icon: TbMessageLanguage, name: "NLP", desc: "Modèles de langue, embeddings, fine-tuning, analyse sémantique et traitement du texte." },
            { icon: TbScan, name: "Computer Vision", desc: "Détection, segmentation, reconstruction 3D. Applications en vision industrielle et médicale." },
            { icon: TbDatabase, name: "Data Engineering", desc: "Pipelines de données, data lakes, orchestration, qualité et gouvernance des données." },
            { icon: TbRocket, name: "MLOps", desc: "Déploiement de modèles, monitoring, versioning, CI/CD pour le machine learning en production." },
            { icon: TbAtom, name: "IA scientifique", desc: "Physics-Informed Neural Networks, IA pour la simulation, découverte de lois scientifiques." },
            { icon: TbChartDots2, name: "Statistique bayésienne", desc: "Inférence bayésienne, Monte Carlo par chaînes de Markov, modèles probabilistes graphiques." },
        ],
        apps: ["Systèmes de recommandation", "Détection de fraude", "Prévision de séries temporelles", "Diagnostic médical par IA", "Traitement du langage naturel", "Vision autonome"],
    },
    actuariat: {
        cards: [
            { icon: TbShieldCheck, name: "Modélisation du risque", desc: "Mesures de risque, VaR, CVaR, stress testing, modèles de défaut." },
            { icon: TbChartCandle, name: "Finance quantitative", desc: "Pricing d'options, modèles de Black-Scholes, taux d'intérêt, gestion de portefeuille." },
            { icon: TbCalculator, name: "Mathématiques actuarielles", desc: "Tables de mortalité, provisionnement, tarification vie et non-vie." },
            { icon: TbTimeline, name: "Processus stochastiques", desc: "Mouvement brownien, processus de Poisson, équations différentielles stochastiques." },
            { icon: TbBuildingBank, name: "Ingénierie financière", desc: "Structuration de produits dérivés, couverture (hedging), gestion actif-passif." },
            { icon: TbChartLine, name: "Prévision & séries temporelles", desc: "ARIMA, GARCH, modèles état-espace, prévision économétrique." },
            { icon: TbChartScatter, name: "Modélisation statistique", desc: "GLM, modèles mixtes, copules, simulation de Monte Carlo en assurance." },
            { icon: TbAffiliate, name: "Risque systémique", desc: "Contagion financière, réseaux bancaires, régulation prudentielle (Solvency II, Bâle III)." },
        ],
        apps: ["Tarification assurance vie", "Gestion de portefeuille", "Stress tests bancaires", "Provisions techniques", "Dérivés climatiques", "Risk management institutionnel"],
    },
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState("general");
    const tabRefs = useRef([]);
    const currentPanel = panels[activeTab];

    // Flèches gauche/droite, Début/Fin : navigation clavier du pattern ARIA "tabs"
    function onKeyDown(e, index) {
        const last = tabs.length - 1;
        const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key];
        if (next === undefined) return;
        e.preventDefault();
        setActiveTab(tabs[next].id);
        tabRefs.current[next]?.focus();
    }

    return (
        <section className="bg-bg p-5 md:p-10" id="skills" aria-labelledby="skills-title">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Spécialisations</div>
                <h2 id="skills-title" className="section-title">
                    Deux voies d'<em>excellence</em>
                </h2>
                <p className="section-body">
                    Après les fondations communes, chaque étudiant approfondit une spécialisation.
                    Un tronc scientifique partagé. Une expertise distincte.
                </p>

                <div role="tablist" aria-label="Parcours" className="flex flex-wrap mt-10 border-b border-border">
                    {tabs.map((tab, i) => {
                        const selected = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                ref={el => (tabRefs.current[i] = el)}
                                role="tab"
                                id={`tab-${tab.id}`}
                                aria-selected={selected}
                                aria-controls={`panel-${tab.id}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActiveTab(tab.id)}
                                onKeyDown={e => onKeyDown(e, i)}
                                className={`-mb-px cursor-pointer px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] border-b-2 transition-colors duration-200 ${selected ? "border-amber text-white" : "border-transparent text-off hover:text-white"}`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
                    <ul key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-10 bg-border border border-border motion-safe:animate-[fadeUp_0.4s_ease_both]">
                        {currentPanel.cards.map(({ icon: Icon, name, desc }) => (
                            <li key={name} className="bg-bg2 p-8">
                                <span className="flex items-center justify-center w-11 h-11 mb-6 border border-border text-cyan" aria-hidden="true">
                                    <Icon className="w-6 h-6" />
                                </span>
                                <h3 className="text-base font-semibold text-white mb-2">{name}</h3>
                                <p className="text-sm leading-relaxed text-off">{desc}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-6 border-t border-border flex flex-col gap-4 md:flex-row md:items-baseline md:gap-8">
                        <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-cyan">Applications réelles</h3>
                        <ul className="flex flex-wrap gap-2">
                            {currentPanel.apps.map(app => (
                                <li key={app} className="px-3 py-1.5 text-xs text-off border border-border bg-bg3">{app}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
