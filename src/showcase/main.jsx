import { useEffect } from "react";
import {  FaLocationArrow, FaPhone,FaMailBulk, FaBrain, FaSquare,
          FaDatabase ,FaEye , FaPooStorm , FaMicrochip , FaGlobe , FaMoneyBill} from "react-icons/fa";
import {FaRocket ,FaRobot, FaChartBar , FaNoteSticky, FaBezierCurve} from "react-icons/fa6" 


function Hero(){

  return(
    <section className="ground relative flex items-center p-16 min-h-screen">
      <div className="ground inset-0 -z-1 absolute"></div>
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

function Nav(){
  return(
    <nav className="flex md:flex-row items-center justify-between gap-4 px-4 md:px-8 lg:px-16">
      <a href="#" className="flex gap-0 flex-col">
        <span className="text-2xl font-extrabold text-white tracking-widest font-['Syne', sans-serif]">ISEM</span>
        <span className="uppercase text-amber text-xs tracking-widest">Sciences Exactes &amp; Modélisation</span>
      </a>
      <ul className="hidden md:flex gap-6 nav-links">
        <li><a href="#foundations">Programme</a></li>
        <li><a href="#skills">Spécialisations</a></li>
        {/* <li><a href="#encadreurs">Encadreurs</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul> 
      {/* <button className="bg-transparent border-amber px-2 py-3 text-amber text-xs font-bold trancking-widest uppercase hover:bg-amber hover:text-bg hidden md:flex">Boite a Idee</button> */}
    </nav>
  )
}

function Bar(){
  return(
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

function Why(){

  return(
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

function Skills(){


  
  return(
  <section className="bg-bg p-10" id = "skills">
    <div className="section-label">Spécialisations</div>
    <h2 className="section-title">Deux voies d'<em>excellence</em></h2>
    <p className="section-body">Après les fondations communes, chaque étudiant approfondit une spécialisation. Un tronc scientifique partagé. Une expertise distincte.</p>

    <div className="flex gap-0 border-border justify-between mt-8">
      <button className="skills-tab active" data-tab="general">Général ( Tronc Commun ) </button>
      <button className="skills-tab" data-tab="ia">IA &amp; Data Science</button>
      <button className="skills-tab" data-tab="actuariat">Actuariat &amp; Finance</button>
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
        <div className="skill-card"><FaBrain className="skill-icon"/><div className="skill-name">Machine Learning</div><div className="skill-desc">Apprentissage supervisé, non-supervisé et par renforcement. Fondements théoriques et implémentation.</div><span className="skill-tag">Core ML</span></div>
        <div className="skill-card"><FaPooStorm className="skill-icon"/><div className="skill-name">Deep Learning</div><div className="skill-desc">Architectures CNN, RNN, Transformer. Optimisation, régularisation, transfert learning.</div><span className="skill-tag">Neural Networks</span></div>
        <div className="skill-card"><FaMicrochip className="skill-icon"/><div className="skill-name">NLP</div><div className="skill-desc">Modèles de langue, embeddings, fine-tuning, analyse sémantique et traitement du texte.</div><span className="skill-tag">Language</span></div>
        <div className="skill-card"><FaEye className="skill-icon"/><div className="skill-name">Computer Vision</div><div className="skill-desc">Détection, segmentation, reconstruction 3D. Applications en vision industrielle et médicale.</div><span className="skill-tag">Vision</span></div>
        <div className="skill-card"><FaDatabase className="skill-icon"/><div className="skill-name">Data Engineering</div><div className="skill-desc">Pipelines de données, data lakes, orchestration, qualité et gouvernance des données.</div><span className="skill-tag">Infrastructure</span></div>
        <div className="skill-card"><FaRocket className="skill-icon"/><div className="skill-name">MLOps</div><div className="skill-desc">Déploiement de modèles, monitoring, versioning, CI/CD pour le machine learning en production.</div><span className="skill-tag">Déploiement</span></div>
        <div className="skill-card"><FaRobot className="skill-icon"/><div className="skill-name">IA Scientifique</div><div className="skill-desc">Physics-Informed Neural Networks, IA pour la simulation, découverte de lois scientifiques.</div><span className="skill-tag">Recherche</span></div>
        <div className="skill-card"><FaChartBar className="skill-icon"/><div className="skill-name">Statistique Bayésienne</div><div className="skill-desc">Inférence bayésienne, Monte Carlo par chaînes de Markov, modèles probabilistes graphiques.</div><span className="skill-tag">Probabiliste</span></div>
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
        <div className="skill-card"><span className="skill-icon">⚖</span><div className="skill-name">Modélisation du Risque</div><div className="skill-desc">Mesures de risque, VaR, CVaR, stress testing, modèles de défaut.</div><span className="skill-tag">Risk</span></div>
        <div className="skill-card"><FaMoneyBill className="skill-icon"/><div className="skill-name">Finance Quantitative</div><div className="skill-desc">Pricing d'options, modèles de Black-Scholes, taux d'intérêt, gestion de portefeuille.</div><span className="skill-tag">Finance</span></div>
        <div className="skill-card"><FaNoteSticky className="skill-icon"/><div className="skill-name">Mathématiques Actuarielles</div><div className="skill-desc">Tables de mortalité, provisionnement, tarification vie et non-vie.</div><span className="skill-tag">Assurance</span></div>
        <div className="skill-card"><span className="skill-icon">〰</span><div className="skill-name">Processus Stochastiques</div><div className="skill-desc">Mouvement brownien, processus de Poisson, équations différentielles stochastiques.</div><span className="skill-tag">Stochastique</span></div>
        <div className="skill-card"><span className="skill-icon">🏗</span><div className="skill-name">Ingénierie Financière</div><div className="skill-desc">Structuration de produits dérivés, couverture (hedging), gestion actif-passif.</div><span className="skill-tag">Structuration</span></div>
        <div className="skill-card"><FaBezierCurve className="skill-icon"/><div className="skill-name">Prévision &amp; Séries Temp.</div><div className="skill-desc">ARIMA, GARCH, modèles état-espace, prévision économétrique.</div><span className="skill-tag">Forecasting</span></div>
        <div className="skill-card"><FaSquare className="skill-icon"/><div className="skill-name">Modélisation Statistique</div><div className="skill-desc">GLM, modèles mixtes, copules, simulation de Monte Carlo en assurance.</div><span className="skill-tag">Statistiques</span></div>
        <div className="skill-card"><FaGlobe className="skill-icon"/><div className="skill-name">Risque Systémique</div><div className="skill-desc">Contagion financière, réseaux bancaires, régulation prudentielle (Solvency II, Bâle III).</div><span className="skill-tag">Systémique</span></div>
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

// function Prof(){

//   const encadreurs = [
//     {
//       avatar: "DK",
//       nom: "Dr. Diallo Kouyaté",
//       domain: "Probabilités &amp; Finance Math.",
//       profession: "Doctorat en mathématiques appliquées. Spécialiste des processus stochastiques et de la modélisation financière. Ancien consultant en gestion des risques.",
//       works: ["Processus de Lévy en finance islamique" , "Modèles de risque de crédit pour marchés émergents" , "Publication : Journal of Mathematical Finance, 2023"]
//     },
//     {
//       avatar: "AN",
//       nom: "Aissatou N'Diaye",
//       domain: "Machine Learning &amp; IA",
//       profession: "MSc en Data Science (Paris-Saclay). Expérience en MLOps et déploiement de modèles à grande échelle. Chercheuse associée en apprentissage automatique.",
//       works: ["Architecture transformer pour séries temporelles" , "IA appliquée à l'agriculture de précision" , "Top 5 — NeurIPS Africa Workshop 2024"]
//     }
//   ]


//   return(
//   <section id="encadreurs">
//     <div className="section-label">Corps pédagogique</div>
//     <h2 className="section-title reveal">Encadrés par des <em>experts</em></h2>
//     <p className="section-body reveal">Chercheurs, praticiens et ingénieurs de terrain — chaque encadreur apporte une vision rigoureuse et ancrée dans la réalité des problèmes contemporains.</p>

//     <div className="encadreurs-grid reveal">

//       {encadreurs.map((person)=>(
//         <div className="encadreur-card">
//             <div className="flex items-center gap-[1rem] mb-[1rem]">
//                <div className="encadreur-avatar">{person.avatar}</div>
//                 <div>
//                   <div className="encadreur-name">{person.nom}</div>
//                   <div className="encadreur-title">{person.domain}</div>
//                 </div>
//             </div>
//             <div className="encadreur-exp">{person.profession}</div>

//         </div>
//       ))}

//       {/* <!-- Card 1 --> */}
//       {/* <div className="encadreur-card">
//         <div className="flex items-center gap-[1rem] mb-[1rem]">
//           <div className="encadreur-avatar">DK</div>
//           <div>
//             <div className="encadreur-name">Dr. Diallo Kouyaté</div>
//             <div className="encadreur-title">Probabilités &amp; Finance Math.</div>
//           </div>
//         </div>
//         <div className="encadreur-exp">Doctorat en mathématiques appliquées. Spécialiste des processus stochastiques et de la modélisation financière. Ancien consultant en gestion des risques.</div>
//         <div className="encadreur-hover">
//           <div className="hover-label">Expertise &amp; Travaux</div>
//           <div className="hover-item">Processus de Lévy en finance islamique</div>
//           <div className="hover-item">Modèles de risque de crédit pour marchés émergents</div>
//           <div className="hover-item">Publication : Journal of Mathematical Finance, 2023</div>
//         </div>
//       </div> */}


//     </div>
//   </section>
//   )
// }

// function Vision(){
//   return(
//   <section id="vision">
//     <div className="vision-quote">
//       Les grands défis de notre époque — le changement climatique, la santé publique, la finance mondiale — ne se résolvent pas sans mathématiques. ISEM forme ceux qui oseront les modéliser.
//     </div>
//     <div className="vision-source">Direction académique — ISEM</div>

//     <div className="vision-metrics">
//       <div className="metric">
//         <div className="metric-val">3<span>ans</span></div>
//         <div className="metric-label">Formation d'excellence</div>
//       </div>
//       <div className="metric">
//         <div className="metric-val">3<span>voies</span></div>
//         <div className="metric-label">Spécialisations profondes</div>
//       </div>
//       <div className="metric">
//         <div className="metric-val">∞</div>
//         <div className="metric-label">Ambition scientifique</div>
//       </div>
//       <div className="metric">
//         <div className="metric-val"><span>×</span>1</div>
//         <div className="metric-label">Première promotion 2025</div>
//       </div>
//     </div>
//   </section>
//   )
// }


function Contact(){
  return(
  <section id="contact" className="p-10">
    <div className="section-label">Contact</div>
    <div className="flex flex-col justify-between md:flex-row">
      <div className="contact-info">
        <h2>Travaillez avec Nous</h2>
        <div className="contact-methods">
          <a href="mailto:contact@isem.edu" className="contact-method">
            <FaMailBulk/>
            <div><div className="method-label">Email</div><div className="method-val">contact@isem.edu</div></div>
          </a>
          <a href="tel:+2250000000000" className="contact-method">
            <FaPhone className="method-icon"/>
            <div><div className="method-label">Téléphone</div><div className="method-val">+225 00 00 00 00</div></div>
          </a>
          <a href="#" className="contact-method">
            <FaLocationArrow className="method-icon"/>
            <div><div className="method-label">Localisation</div><div className="method-val">Yamoussoukro, Côte d'Ivoire</div></div>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Prénom</label>
            <input type="text" className="form-input" placeholder="Ibrahim"/>
          </div>
          <div className="form-group">
            <label className="form-label">Nom</label>
            <input type="text" className="form-input" placeholder="Diallo"/>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="vous@email.com"/>
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
        <button className="form-submit">Envoyer le message</button>
      </div>

    </div>
  </section>
  )
}

function Footer(){

  return(
  <footer>
    <div className="footer-logo">
      <div className="mark">ISEM</div>
      <div className="sub">Ingénierie en Sciences Exactes &amp; Modélisation</div>
    </div>
    <div className="footer-copy">
      <p>© 2026 ISEM — Yamoussoukro, Côte d'Ivoire</p>
    </div>
    <div className="footer-links">
      <a href="#">Programme</a>
      <a href="#">Contact</a>
    </div>
  </footer>
  )
}


export default function Home(){

  useEffect(()=>{

    function tabs(){
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


  //   function marque(){
  //     const items = ['Mathématiques','Modélisation','Intelligence Artificielle','Data Science','Actuariat','Finance Quantitative','Optimisation','Calcul Scientifique','Systèmes Complexes','Statistiques','Algorithmes','Probabilités'];
  //     const track = document.getElementById('marqueeTrack');
  //     [...items,...items,...items].forEach(t => {
  //       const el = document.createElement('span');
  //       el.className = 'marquee-item text-xs md:text-sm'; el.textContent = t;
  //       track.appendChild(el);
  //     });
  //   }

  //   function observer(){
  //     const observer = new IntersectionObserver(entries => {
  //         entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  //       }, { threshold: 0.1 });
  //       document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  //   }

  //   (function(){
  //   const c = document.getElementById('hero-canvas');
  //   const ctx = c.getContext('2d');
  //   let W, H, nodes = [], t = 0;

  //   function resize(){
  //     W = c.offsetWidth; H = c.offsetHeight;
  //     c.width = W * devicePixelRatio; c.height = H * devicePixelRatio;
  //     ctx.scale(devicePixelRatio, devicePixelRatio);
  //   }

  //   function makeNodes(n){
  //     nodes = [];
  //     for(let i=0;i<n;i++){
  //       nodes.push({
  //         x: Math.random()*W, y: Math.random()*H,
  //         vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
  //         r: 1.5 + Math.random()*2.5,
  //         pulse: Math.random()*Math.PI*2,
  //         color: Math.random() > 0.7 ? 'amber' : 'cyan'
  //       });
  //     }
  //   }

  //   function draw(){
  //     ctx.clearRect(0,0,W,H);
  //     t += 0.006;

  //     // Draw connections
  //     for(let i=0;i<nodes.length;i++){
  //       for(let j=i+1;j<nodes.length;j++){
  //         const dx = nodes[i].x - nodes[j].x;
  //         const dy = nodes[i].y - nodes[j].y;
  //         const dist = Math.sqrt(dx*dx+dy*dy);
  //         if(dist < 120){
  //           const alpha = (1 - dist/120) * 0.25;
  //           const grad = ctx.createLinearGradient(nodes[i].x,nodes[i].y,nodes[j].x,nodes[j].y);
  //           grad.addColorStop(0, `rgba(79,195,247,${alpha})`);
  //           grad.addColorStop(1, `rgba(245,158,63,${alpha*0.5})`);
  //           ctx.beginPath();
  //           ctx.strokeStyle = grad;
  //           ctx.lineWidth = 0.6;
  //           ctx.moveTo(nodes[i].x,nodes[i].y);
  //           ctx.lineTo(nodes[j].x,nodes[j].y);
  //           ctx.stroke();
  //         }
  //       }
  //     }

  //     // Draw nodes
  //     nodes.forEach(n => {
  //       n.x += n.vx; n.y += n.vy;
  //       if(n.x<0||n.x>W) n.vx*=-1;
  //       if(n.y<0||n.y>H) n.vy*=-1;
  //       const p = Math.sin(t + n.pulse);
  //       const rad = n.r * (1 + 0.3*p);
  //       const alpha = 0.5 + 0.3*p;
  //       const col = n.color === 'amber' ? `rgba(245,158,63,${alpha})` : `rgba(79,195,247,${alpha})`;
  //       ctx.beginPath();
  //       ctx.arc(n.x,n.y,rad,0,Math.PI*2);
  //       ctx.fillStyle = col;
  //       ctx.fill();
  //       // glow
  //       const grd = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,rad*6);
  //       grd.addColorStop(0, n.color === 'amber' ? `rgba(245,158,63,0.12)` : `rgba(79,195,247,0.1)`);
  //       grd.addColorStop(1, 'transparent');
  //       ctx.beginPath();
  //       ctx.arc(n.x,n.y,rad*6,0,Math.PI*2);
  //       ctx.fillStyle = grd;
  //       ctx.fill();
  //     });

  //     // Probability distribution curve
  //     ctx.beginPath();
  //     ctx.strokeStyle = 'rgba(245,158,63,0.18)';
  //     ctx.lineWidth = 1.5;
  //     const mu = W*0.5, sig = W*0.15;
  //     for(let x=0;x<W;x++){
  //       const gauss = Math.exp(-0.5*((x-mu)/sig)**2) / (sig*Math.sqrt(2*Math.PI));
  //       const y = H*0.78 - gauss * sig * H * 0.6;
  //       if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  //     }
  //     ctx.stroke();

  //     // Secondary shifted curve
  //     ctx.beginPath();
  //     ctx.strokeStyle = 'rgba(79,195,247,0.1)';
  //     ctx.lineWidth = 1;
  //     const mu2 = W*0.35, sig2 = W*0.1;
  //     for(let x=0;x<W;x++){
  //       const gauss = Math.exp(-0.5*((x-mu2)/sig2)**2) / (sig2*Math.sqrt(2*Math.PI));
  //       const y = H*0.78 - gauss * sig2 * H * 0.5;
  //       if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  //     }
  //     ctx.stroke();

  //     requestAnimationFrame(draw);
  //   }

  //   resize();
  //   makeNodes(55);
  //   draw();
  //   window.addEventListener('resize', () => { resize(); makeNodes(55); });
  //   })();

  //   (function(){
  // const c = document.getElementById('foundations-canvas');
  // if(!c) return;
  // const ctx = c.getContext('2d');
  // let W, H, t = 0;

  // function resize(){
  //   W = c.offsetWidth || 400; H = c.offsetHeight || 480;
  //   c.width = W*devicePixelRatio; c.height = H*devicePixelRatio;
  //   ctx.scale(devicePixelRatio, devicePixelRatio);
  // }

  // const pillars = [
  //   {label:'∑ Maths', angle:0,      r:0.38},
  //   {label:'σ Stats', angle:Math.PI*2/6,  r:0.34},
  //   {label:'∂ EDO',   angle:Math.PI*4/6,  r:0.36},
  //   {label:'∇ Opti',  angle:Math.PI*6/6,  r:0.35},
  //   {label:'λ Algo',  angle:Math.PI*8/6,  r:0.36},
  //   {label:'⊕ Info',  angle:Math.PI*10/6, r:0.34},
  // ];

  // function draw(){
  //   ctx.clearRect(0,0,W,H);
  //   t += 0.004;
  //   const cx = W/2, cy = H/2;

  //   // Central glow
  //   const g = ctx.createRadialGradient(cx,cy,0,cx,cy,80);
  //   g.addColorStop(0,'rgba(245,158,63,0.12)');
  //   g.addColorStop(1,'transparent');
  //   ctx.beginPath(); ctx.arc(cx,cy,80,0,Math.PI*2);
  //   ctx.fillStyle = g; ctx.fill();

  //   // Center circle
  //   ctx.beginPath(); ctx.arc(cx,cy,18,0,Math.PI*2);
  //   ctx.strokeStyle='rgba(245,158,63,0.5)'; ctx.lineWidth=1; ctx.stroke();
  //   ctx.fillStyle='rgba(245,158,63,0.08)'; ctx.fill();

  //   // Orbit ring
  //   ctx.beginPath(); ctx.arc(cx,cy,Math.min(W,H)*0.36,0,Math.PI*2);
  //   ctx.strokeStyle='rgba(79,195,247,0.07)'; ctx.lineWidth=1;
  //   ctx.setLineDash([4,8]); ctx.stroke(); ctx.setLineDash([]);

  //   pillars.forEach((p, i) => {
  //     const a = p.angle + t * (i%2===0?1:-0.7);
  //     const rad = Math.min(W,H) * p.r;
  //     const px = cx + Math.cos(a)*rad;
  //     const py = cy + Math.sin(a)*rad;

  //     // Connection line to center
  //     const grad = ctx.createLinearGradient(cx,cy,px,py);
  //     grad.addColorStop(0,'rgba(245,158,63,0.3)');
  //     grad.addColorStop(1,'rgba(79,195,247,0.1)');
  //     ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(px,py);
  //     ctx.strokeStyle=grad; ctx.lineWidth=0.8; ctx.stroke();

  //     // Node
  //     ctx.beginPath(); ctx.arc(px,py,6,0,Math.PI*2);
  //     ctx.fillStyle='rgba(79,195,247,0.6)'; ctx.fill();
  //     const ng = ctx.createRadialGradient(px,py,0,px,py,20);
  //     ng.addColorStop(0,'rgba(79,195,247,0.15)');
  //     ng.addColorStop(1,'transparent');
  //     ctx.beginPath(); ctx.arc(px,py,20,0,Math.PI*2);
  //     ctx.fillStyle=ng; ctx.fill();

  //     // Label
  //     ctx.font = '600 11px Syne, sans-serif';
  //     ctx.fillStyle='rgba(240,242,245,0.7)';
  //     ctx.textAlign='center'; ctx.textBaseline='middle';
  //     const lx = cx + Math.cos(a)*(rad+28);
  //     const ly = cy + Math.sin(a)*(rad+20);
  //     ctx.fillText(p.label, lx, ly);
  //   });

  //   // ISEM center label
  //   ctx.font = 'bold 12px Syne, sans-serif';
  //   ctx.fillStyle='rgba(245,158,63,0.9)';
  //   ctx.textAlign='center'; ctx.textBaseline='middle';
  //   ctx.fillText('ISEM', cx, cy);

  //   requestAnimationFrame(draw);
  // }

  // resize(); draw();
  // window.addEventListener('resize', resize);
  //   })();

    tabs()
  //   marque()
  //   observer()

  } , [])

  return(
    <>
    <Nav/>
    <Hero/>
      
    {/* <div className="marquee-bar">
      <div className="marquee-track" id="marqueeTrack"></div>
    </div> */}

    {/* <Bar/> */}
    <Why/>
    <Skills/>
    {/* <Prof/> */}
    {/* <Vision/> */}
    <Contact/>
    <Footer/>
    </>
  )
}