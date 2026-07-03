import {
  FaLocationArrow, FaPhone, FaMailBulk, FaBrain,
  FaDatabase, FaEye, FaPooStorm, FaMicrochip, FaGlobe,
  FaMoneyBill, FaCalculator, FaShieldAlt, FaProjectDiagram, FaWaveSquare
} from "react-icons/fa";

export default function Contact() {
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