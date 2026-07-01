import { useEffect, useState } from "react";
import {
  FaLocationArrow, FaPhone, FaMailBulk, FaBrain, FaSquare,
  FaDatabase, FaEye, FaPooStorm, FaMicrochip, FaGlobe,
  FaMoneyBill, FaCalculator, FaShieldAlt, FaProjectDiagram, FaWaveSquare
} from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md"

import { FaRocket, FaRobot, FaChartBar, FaBezierCurve } from "react-icons/fa6"
import Nav from "../components/ui/Nav"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"


function Hero() {

  return (
    <section className="
    ground
    relative flex items-center p-16 min-h-screen">
      <div className=" inset-0 -z-1 absolute"></div>
      <div className="hero-grid-lines"></div>

      <div className="pt-20">
        <div className="hero-left">
          <h1 className="text-white mb-[1.8rem] text-5xl">
            Comprendre le monde
            <p className="text-cyan-400">par les modèles.</p>
          </h1>

          <p className="text-off max-w-120 mb-12">
            ISEM forme une nouvelle génération d'ingénieurs scientifiques — mathématiciens, modélisateurs, architectes de données — capables de raisonner avec rigueur sur les systèmes complexes du monde réel.
          </p>

          <div className="flex gap-2 flex-wrap">
            <a href="#foundations" className="uppercase transition-all relative font-bold px-2 py-3 bg-amber">Découvrir le programme</a>
            <a href="#skills" className="px-2 py-3 font-semibold uppercase transition-all border border-[rgba(240,242,245,0.2)] text-white tracking-widest bg-transparent hover:border-cyan-600 hover:text-cyan-600">Explorer les spécialisations</a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {/* <canvas id="hero-canvas"></canvas> */}
        {/* <div className="hero-equations" id="heroEq"></div> */}
      </div>

      <div className="absolute hidden md:flex flex-col items-center gap-2 opacity-40  bottom-3 left-1/2">
        <span className="uppercase text-amber tracking-widest text-xs">Explorer</span>
        <div className="scroll-line w-px h-14 animate-bounce"></div>
      </div>

    </section>
  )
}



function Bar() {
  return (
    <section id="foundations">
      <div className="tracking-wide uppercase flex items-center gap-2">Socle scientifique</div>
      <h2 className="font-bold text-base text-xl">
        <p>Une formation <em>généraliste</em></p>
        <p>d'excellence scientifique</p>
      </h2>
      <p className="section-body reveal">Avant toute spécialisation, ISEM construit des fondations solides : la capacité à abstraire, modéliser, prouver, calculer, optimiser. Chaque ingénieur ISEM pense comme un scientifique.</p>

      {/* <div className="foundations-grid reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="foundations-pillars grid grid-cols-1 sm:grid-cols-2 gap-px">
        <div className="pillar"><div className="pillar-num">01</div><div className="pillar-name">Mathématiques</div><div className="pillar-desc">Analyse, algèbre linéaire, topologie, théorie de la mesure.</div></div>
        <div className="pillar"><div className="pillar-num">02</div><div className="pillar-name">Probabilités &amp; Stats</div><div className="pillar-desc">Inférence bayésienne, processus stochastiques, théorie des valeurs extrêmes.</div></div>
        <div className="pillar"><div className="pillar-num">03</div><div className="pillar-name">Algorithmes</div><div className="pillar-desc">Complexité, structures de données, calcul scientifique, parallélisme.</div></div>
        <div className="pillar"><div className="pillar-num">04</div><div className="pillar-name">Modélisation</div><div className="pillar-desc">Équations différentielles, simulation numérique, systèmes dynamiques.</div></div>
        <div className="pillar"><div className="pillar-num">05</div><div className="pillar-name">Optimisation</div><div className="pillar-desc">Programmation convexe, recherche opérationnelle, méthodes heuristiques.</div></div>
        <div className="pillar"><div className="pillar-num">06</div><div className="pillar-name">Informatique Sci.</div><div className="pillar-desc">Python, R, HPC, C++, C, Java, génie logiciel pour la science.</div></div>
      </div>

      <div className="foundations-visual h-64 md:h-96">
        <canvas id="foundations-canvas"></canvas>
      </div>
    </div>  sup */}
    </section>
  )
}

function Why() {

  return (
    <section className="bg-bg2 border-t-border border-b-border p-5" id="foundations">
      <div className="section-label">Pourquoi ISEM</div>
      <div className="section-title text-white">Ingénierie de la complexité</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5  mt-11">
        <div className="why-card">
          <div className="why-icon">∑</div>
          <h3>Rigueur mathématique</h3>
          <p>Chaque concept est formalisé, prouvé, compris. Pas de boîtes noires. Un ingénieur ISEM sait pourquoi ça marche.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">⟨⟩</div>
          <h3>Pensée systémique</h3>
          <p>Modéliser un phénomène, c'est d'abord comprendre ses interactions. ISEM enseigne à voir les systèmes dans leur globalité.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">∂</div>
          <h3>Science appliquée</h3>
          <p>Finance, assurance, IA, simulation : les compétences ISEM s'appliquent aux défis quantitatifs les plus exigeants du monde professionnel.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">λ</div>
          <h3>Interdisciplinarité</h3>
          <p>Mathématiques, informatique, économie, physique — les vrais problèmes ne respectent pas les frontières disciplinaires.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">∇</div>
          <h3>Excellence africaine</h3>
          <p>Former les ingénieurs scientifiques qui bâtiront les infrastructures analytiques du continent et rayonneront à l'international.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">∫</div>
          <h3>Profondeur algorithmique</h3>
          <p>Au-delà des frameworks : comprendre les fondements, implémenter depuis zéro, innover au niveau de l'algorithme.</p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
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
          <div className="skill-card"><FaSquare className="skill-icon" /><div className="skill-name">Modélisation Statistique</div><div className="skill-desc">GLM, modèles mixtes, copules, simulation de Monte Carlo en assurance.</div><span className="skill-tag">Statistiques</span></div>
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



function Contact() {
  return (
    <section id="contact" className="p-10">
      <div className="section-label">Contact</div>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="contact-info">
          <h2>Travaillez avec Nous</h2>
          <div className="contact-methods">
            <a href="mailto:contact@isem.edu" className="contact-method">
              <FaMailBulk />
              <div><div className="method-label">Email</div><div className="method-val">contact@isem.edu</div></div>
            </a>
            <a href="tel:+2250000000000" className="contact-method">
              <FaPhone className="method-icon" />
              <div><div className="method-label">Téléphone</div><div className="method-val">+225 00 00 00 00</div></div>
            </a>
            <a href="#" className="contact-method">
              <FaLocationArrow className="method-icon" />
              <div><div className="method-label">Localisation</div><div className="method-val">Yamoussoukro, Côte d'Ivoire</div></div>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Prénom</label>
              <input type="text" className="form-input" placeholder="Ibrahim" />
            </div>
            <div className="form-group">
              <label className="form-label">Nom</label>
              <input type="text" className="form-input" placeholder="Diallo" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="vous@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Objet</label>
            <select className="form-select">
              <option value="">Sélectionner...</option>
              <option>Demande d'information</option>
              <option>Partenariat institutionnel</option>
              <option>Collaboration de recherche</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Décrivez votre parcours, votre motivation, votre projet..."></textarea>
          </div>
          <button className="bg-amber text-bg border-none font-extrabold text-xs tracking-widest uppercase px-4 py-5 transition duration-500 hover:text-white ">Envoyer le message</button>
        </div>

      </div>
    </section>
  )
}




export default function Home() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark")

  useEffect(() => {

    function tabs() {
      document.querySelectorAll('.skills-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          console.log(document.getElementById('panel-' + tab.dataset.tab))
          document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
        });
      });
    }

    tabs()

    console.log(theme)
  }, [])

  useEffect(() => {

    if (localStorage.getItem("theme")) {
      theme === "light" ? document.getElementsByTagName("html").item(0).classList.replace("dark", "light") :
        document.getElementsByTagName("html").item(0).classList.replace("light", "dark")

      localStorage.setItem("theme", theme)
    }
    else {
      document.getElementsByTagName("html").item(0).classList.add(theme)
      localStorage.setItem("theme", theme)
    }

  
  }, [theme])

  function ToggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <>
      <Nav links={[
        { text: "Programme", href: "#foundations" },
        { text: "Spécialisations", href: "#skills" },
        { text: "Contact", href: "#contact" },
        { text: "PROJETS", onclick: () => navigate("/projects") },
        { text: theme === "light" ? <MdOutlineNightlight className="w-6 h-6" /> : <MdOutlineLightMode className="w-6 h-6" />, onclick: ToggleTheme }]}
      />

      <Hero />

      {/* <Bar/> */}
      <Why />
      <Skills />
      {/* <Prof/> */}
      {/* <Vision/> */}
      <Contact />
      <Footer />
    </>
  )
}