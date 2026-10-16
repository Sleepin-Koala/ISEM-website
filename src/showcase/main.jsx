import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md"  
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Why from "./components/Why"
import { useNavigate } from "react-router-dom"

import Nav from "../shared/Nav"


export default function Home({theme, changeTheme}) {
  const navigate = useNavigate()

  return (
    <>
      <Nav links={[
        { text: "Programme", href: "#foundations" },
        { text: "Spécialisations", href: "#skills" },
        { text: "Contact", href: "#contact" },
        { text: "PROJETS", onclick: () => navigate("/projects") },
        { text: theme === "light" ? <MdOutlineNightlight className="w-6 h-6" /> : <MdOutlineLightMode className="w-6 h-6" />, onclick: changeTheme }]}
      />

      <Hero currentTheme={theme}/>
      <Why />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}