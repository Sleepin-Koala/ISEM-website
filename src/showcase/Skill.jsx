import {
 FaBrain,
  FaDatabase, FaEye, FaPooStorm, FaMicrochip, FaGlobe,
  FaMoneyBill, FaCalculator, FaShieldAlt, FaProjectDiagram, FaWaveSquare
} from "react-icons/fa";
import { FaRocket, FaRobot, FaChartBar, FaBezierCurve } from "react-icons/fa6"
import { MdOutlineLightMode, MdOutlineNightlight, MdWaterfallChart } from "react-icons/md"


export default function Skills() {
  return (
    <section className="bg-bg p-10" id="skills">
      <div className="section-label">Spécialisations</div>
      <h2 className="section-title">Deux voies d'<em>excellence</em></h2>
      <p className="section-body">Après les fondations communes, chaque étudiant approfondit une spécialisation. Un tronc scientifique partagé. Une expertise distincte.</p>

      <div className="flex gap-0 border-border justify-between mt-8">
        <button className="skills-tab active cursor-pointer" data-tab="general">Général ( Tronc Commun ) </button>
        <button className="skills-tab cursor-pointer" data-tab="ia">IA &amp; Data Science</button>
        <button className="skills-tab cursor-pointer" data-tab="actuariat">Actuariat &amp; Finance</button>
      </div>



      {/* <!-- GENERAL TAB --> */}
      <div className="skills-panel active" id="panel-general">
        <div className="skills-cards">
          <div className="skill-card"><span className="skill-icon">∑</span><div className="skill-name">Analyse Mathématique</div><div className="skill-desc">Espaces de Banach, théorie de la mesure, analyse fonctionnelle pour la modélisation avancée.</div><span className="skill-tag">Fondation</span></div>
          <div className="skill-card"><span className="skill-icon">⊕</span><div className="skill-name">Algèbre Linéaire</div><div className="skill-desc">Décompositions spectrales, espaces vectoriels, applications aux systèmes linéaires et au machine learning.</div><span className="skill-tag">Fondation</span></div>
          <div className="skill-card"><span className="skill-icon">∂</span><div className="skill-name">Modélisation EDO/EDP</div><div className="skill-desc">Équations différentielles ordinaires et aux dérivées partielles, simulation de systèmes physiques et biologiques.</div><span className="skill-tag">Modélisation</span></div>
          <div className="skill-card"><span className="skill-icon">∇</span><div className="skill-name">Optimisation</div><div className="skill-desc">Optimisation convexe, gradient stochastique, programmation linéaire et entière.</div><span className="skill-tag">Algorithmique</span></div>
          <div className="skill-card"><span className="skill-icon">⟨⟩</span><div className="skill-name">Systèmes Dynamiques</div><div className="skill-desc">Attracteurs, bifurcations, chaos déterministe, analyse de stabilité.</div><span className="skill-tag">Complexité</span></div>
          <div className="skill-card"><span className="skill-icon">𝛑</span><div className="skill-name">Calcul Scientifique</div><div className="skill-desc">Méthodes numériques, analyse d'erreur, implémentation haute performance en Python/Julia.</div><span className="skill-tag">Programmation</span></div>
          <div className="skill-card"><span className="skill-icon">σ</span><div className="skill-name">Statistique Inférentielle</div><div className="skill-desc">Estimation, tests, intervalles de confiance, modèles de régression et sélection de modèles.</div><span className="skill-tag">Statistiques</span></div>
          <div className="skill-card"><span className="skill-icon">λ</span><div className="skill-name">Théorie des Graphes</div><div className="skill-desc">Algorithmes sur les graphes, réseaux complexes, applications aux systèmes réels.</div><span className="skill-tag">Algorithmique</span></div>
        </div>

        <div className="skills-apps">
          <div className="skills-apps-label">Applications réelles</div>
          <div className="skills-apps-list">
            <span className="app-tag">Simulation climatique</span>
            <span className="app-tag">Optimisation logistique</span>
            <span className="app-tag">Modèles épidémiologiques</span>
            <span className="app-tag">Systèmes de contrôle</span>
            <span className="app-tag">Recherche opérationnelle</span>
            <span className="app-tag">Cryptographie</span>
          </div>
        </div>
      </div>

      {/* <!-- IA TAB --> */}
      <div className="skills-panel" id="panel-ia">
        <div className="skills-cards">
          <div className="skill-card"><FaBrain className="skill-icon" /><div className="skill-name">Machine Learning</div><div className="skill-desc">Apprentissage supervisé, non-supervisé et par renforcement. Fondements théoriques et implémentation.</div><span className="skill-tag">Core ML</span></div>
          <div className="skill-card"><FaPooStorm className="skill-icon" /><div className="skill-name">Deep Learning</div><div className="skill-desc">Architectures CNN, RNN, Transformer. Optimisation, régularisation, transfert learning.</div><span className="skill-tag">Neural Networks</span></div>
          <div className="skill-card"><FaMicrochip className="skill-icon" /><div className="skill-name">NLP</div><div className="skill-desc">Modèles de langue, embeddings, fine-tuning, analyse sémantique et traitement du texte.</div><span className="skill-tag">Language</span></div>
          <div className="skill-card"><FaEye className="skill-icon" /><div className="skill-name">Computer Vision</div><div className="skill-desc">Détection, segmentation, reconstruction 3D. Applications en vision industrielle et médicale.</div><span className="skill-tag">Vision</span></div>
          <div className="skill-card"><FaDatabase className="skill-icon" /><div className="skill-name">Data Engineering</div><div className="skill-desc">Pipelines de données, data lakes, orchestration, qualité et gouvernance des données.</div><span className="skill-tag">Infrastructure</span></div>
          <div className="skill-card"><FaRocket className="skill-icon" /><div className="skill-name">MLOps</div><div className="skill-desc">Déploiement de modèles, monitoring, versioning, CI/CD pour le machine learning en production.</div><span className="skill-tag">Déploiement</span></div>
          <div className="skill-card"><FaRobot className="skill-icon" /><div className="skill-name">IA Scientifique</div><div className="skill-desc">Physics-Informed Neural Networks, IA pour la simulation, découverte de lois scientifiques.</div><span className="skill-tag">Recherche</span></div>
          <div className="skill-card"><FaChartBar className="skill-icon" /><div className="skill-name">Statistique Bayésienne</div><div className="skill-desc">Inférence bayésienne, Monte Carlo par chaînes de Markov, modèles probabilistes graphiques.</div><span className="skill-tag">Probabiliste</span></div>
        </div>
        <div className="skills-apps">
          <div className="skills-apps-label">Applications réelles</div>
          <div className="skills-apps-list">
            <span className="app-tag">Systèmes de recommandation</span>
            <span className="app-tag">Détection de fraude</span>
            <span className="app-tag">Prévision de séries temporelles</span>
            <span className="app-tag">Diagnostic médical par IA</span>
            <span className="app-tag">Traitement du langage naturel</span>
            <span className="app-tag">Vision autonome</span>
          </div>
        </div>
      </div>

      {/* <!-- ACTUARIAT TAB --> */}
      <div className="skills-panel" id="panel-actuariat">
        <div className="skills-cards">
          <div className="skill-card"><FaShieldAlt className="skill-icon" /><div className="skill-name">Modélisation du Risque</div><div className="skill-desc">Mesures de risque, VaR, CVaR, stress testing, modèles de défaut.</div><span className="skill-tag">Risk</span></div>
          <div className="skill-card"><FaMoneyBill className="skill-icon" /><div className="skill-name">Finance Quantitative</div><div className="skill-desc">Pricing d'options, modèles de Black-Scholes, taux d'intérêt, gestion de portefeuille.</div><span className="skill-tag">Finance</span></div>
          <div className="skill-card"><FaCalculator className="skill-icon" /><div className="skill-name">Mathématiques Actuarielles</div><div className="skill-desc">Tables de mortalité, provisionnement, tarification vie et non-vie.</div><span className="skill-tag">Assurance</span></div>
          <div className="skill-card"><FaWaveSquare className="skill-icon" /><div className="skill-name">Processus Stochastiques</div><div className="skill-desc">Mouvement brownien, processus de Poisson, équations différentielles stochastiques.</div><span className="skill-tag">Stochastique</span></div>
          <div className="skill-card"><FaProjectDiagram className="skill-icon" /><div className="skill-name">Ingénierie Financière</div><div className="skill-desc">Structuration de produits dérivés, couverture (hedging), gestion actif-passif.</div><span className="skill-tag">Structuration</span></div>
          <div className="skill-card"><FaBezierCurve className="skill-icon" /><div className="skill-name">Prévision &amp; Séries Temp.</div><div className="skill-desc">ARIMA, GARCH, modèles état-espace, prévision économétrique.</div><span className="skill-tag">Forecasting</span></div>
          <div className="skill-card"><MdWaterfallChart className="skill-icon" /><div className="skill-name">Modélisation Statistique</div><div className="skill-desc">GLM, modèles mixtes, copules, simulation de Monte Carlo en assurance.</div><span className="skill-tag">Statistiques</span></div>
          <div className="skill-card"><FaGlobe className="skill-icon" /><div className="skill-name">Risque Systémique</div><div className="skill-desc">Contagion financière, réseaux bancaires, régulation prudentielle (Solvency II, Bâle III).</div><span className="skill-tag">Systémique</span></div>
        </div>
        <div className="skills-apps">
          <div className="skills-apps-label">Applications réelles</div>
          <div className="skills-apps-list">
            <span className="app-tag">Tarification assurance vie</span>
            <span className="app-tag">Gestion de portefeuille</span>
            <span className="app-tag">Stress tests bancaires</span>
            <span className="app-tag">Provisions techniques</span>
            <span className="app-tag">Dérivés climatiques</span>
            <span className="app-tag">Risk management institutionnel</span>
          </div>
        </div>
      </div>
    </section>
  )
}