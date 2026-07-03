import { useState } from "react";
import {
    FaBrain, FaDatabase, FaEye, FaPooStorm, FaMicrochip, FaGlobe,
    FaMoneyBill, FaCalculator, FaShieldAlt, FaProjectDiagram, FaWaveSquare
} from "react-icons/fa";
import { FaRocket, FaRobot, FaChartBar, FaBezierCurve } from "react-icons/fa6"
import { MdWaterfallChart } from "react-icons/md"



export default function Skills() {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'Tronc Commun' },
        { id: 'ia', label: 'IA & Data Science' },
        { id: 'actuariat', label: 'Actuariat & Finance' },
    ];

    const panels = {
        general: {
            cards: [
                { icon: '∑', name: 'Analyse Mathématique', desc: 'Espaces de Banach, théorie de la mesure, analyse fonctionnelle pour la modélisation avancée.' },
                { icon: '⊕', name: 'Algèbre Linéaire', desc: 'Décompositions spectrales, espaces vectoriels, applications aux systèmes linéaires et au machine learning.' },
                { icon: '∂', name: 'Modélisation EDO/EDP', desc: 'Équations différentielles ordinaires et aux dérivées partielles, simulation de systèmes physiques et biologiques.' },
                { icon: '∇', name: 'Optimisation', desc: 'Optimisation convexe, gradient stochastique, programmation linéaire et entière.' },
                { icon: '⟨⟩', name: 'Systèmes Dynamiques', desc: 'Attracteurs, bifurcations, chaos déterministe, analyse de stabilité.' },
                { icon: 'π', name: 'Calcul Scientifique', desc: 'Méthodes numériques, analyse d\'erreur, implémentation haute performance en Python/Julia.' },
                { icon: 'σ', name: 'Statistique Inférentielle', desc: 'Estimation, tests, intervalles de confiance, modèles de régression et sélection de modèles.' },
                { icon: 'λ', name: 'Théorie des Graphes', desc: 'Algorithmes sur les graphes, réseaux complexes, applications aux systèmes réels.' },
            ],
            apps: ['Simulation climatique', 'Optimisation logistique', 'Modèles épidémiologiques', 'Systèmes de contrôle', 'Recherche opérationnelle', 'Cryptographie'],
        },
        ia: {
            cards: [
                { icon: <FaBrain />, name: 'Machine Learning', desc: 'Apprentissage supervisé, non-supervisé et par renforcement. Fondements théoriques et implémentation.' },
                { icon: <FaPooStorm />, name: 'Deep Learning', desc: 'Architectures CNN, RNN, Transformer. Optimisation, régularisation, transfert learning.' },
                { icon: <FaMicrochip />, name: 'NLP', desc: 'Modèles de langue, embeddings, fine-tuning, analyse sémantique et traitement du texte.' },
                { icon: <FaEye />, name: 'Computer Vision', desc: 'Détection, segmentation, reconstruction 3D. Applications en vision industrielle et médicale.' },
                { icon: <FaDatabase />, name: 'Data Engineering', desc: 'Pipelines de données, data lakes, orchestration, qualité et gouvernance des données.' },
                { icon: <FaRocket />, name: 'MLOps', desc: 'Déploiement de modèles, monitoring, versioning, CI/CD pour le machine learning en production.' },
                { icon: <FaRobot />, name: 'IA Scientifique', desc: 'Physics-Informed Neural Networks, IA pour la simulation, découverte de lois scientifiques.' },
                { icon: <FaChartBar />, name: 'Statistique Bayésienne', desc: 'Inférence bayésienne, Monte Carlo par chaînes de Markov, modèles probabilistes graphiques.' },
            ],
            apps: ['Systèmes de recommandation', 'Détection de fraude', 'Prévision de séries temporelles', 'Diagnostic médical par IA', 'Traitement du langage naturel', 'Vision autonome'],
        },
        actuariat: {
            cards: [
                { icon: <FaShieldAlt />, name: 'Modélisation du Risque', desc: 'Mesures de risque, VaR, CVaR, stress testing, modèles de défaut.' },
                { icon: <FaMoneyBill />, name: 'Finance Quantitative', desc: 'Pricing d\'options, modèles de Black-Scholes, taux d\'intérêt, gestion de portefeuille.' },
                { icon: <FaCalculator />, name: 'Mathématiques Actuarielles', desc: 'Tables de mortalité, provisionnement, tarification vie et non-vie.' },
                { icon: <FaWaveSquare />, name: 'Processus Stochastiques', desc: 'Mouvement brownien, processus de Poisson, équations différentielles stochastiques.' },
                { icon: <FaProjectDiagram />, name: 'Ingénierie Financière', desc: 'Structuration de produits dérivés, couverture (hedging), gestion actif-passif.' },
                { icon: <FaBezierCurve />, name: 'Prévision & Séries Temp.', desc: 'ARIMA, GARCH, modèles état-espace, prévision économétrique.' },
                { icon: <MdWaterfallChart />, name: 'Modélisation Statistique', desc: 'GLM, modèles mixtes, copules, simulation de Monte Carlo en assurance.' },
                { icon: <FaGlobe />, name: 'Risque Systémique', desc: 'Contagion financière, réseaux bancaires, régulation prudentielle (Solvency II, Bâle III).' },
            ],
            apps: ['Tarification assurance vie', 'Gestion de portefeuille', 'Stress tests bancaires', 'Provisions techniques', 'Dérivés climatiques', 'Risk management institutionnel'],
        },
    };

    const currentPanel = panels[activeTab] || panels.general;

    return (
        <section className="bg-bg p-5 md:p-10" id="skills">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Spécialisations</div>
                <h2 className="section-title">
                    Deux voies d'<em>excellence</em>
                </h2>
                <p className="section-body">
                    Après les fondations communes, chaque étudiant approfondit une spécialisation.
                    Un tronc scientifique partagé. Une expertise distincte.
                </p>

                <div className="flex gap-0 border-border justify-start mt-8 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`skills-tab cursor-pointer px-4 py-3 ${activeTab === tab.id ? 'active' : ''
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="skills-cards">
                    {currentPanel.cards.map((skill, idx) => (
                        <div key={idx} className="skill-card">
                            <span className="skill-icon text-3xl">{skill.icon}</span>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-desc text-off text-sm">{skill.desc}</div>
                        </div>
                    ))}
                </div>

                <div className="skills-apps">
                    <div className="skills-apps-label">Applications réelles</div>
                    <div className="skills-apps-list">
                        {currentPanel.apps.map((app, idx) => (
                            <span key={idx} className="app-tag">
                                {app}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}