import { useEffect } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md"  
import Nav from "../components/ui/Nav"
import Footer from "./Footer"
import Hero from "./Hero"
import Contact from "./Contact"
import Skills from "./Skills"
import Why from "./Why"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../components/hooks/useTheme";

export default function Home() {
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
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

  }, [])


  return (
    <>
      <Nav links={[
        { text: "Programme", href: "#foundations" },
        { text: "Spécialisations", href: "#skills" },
        { text: "Contact", href: "#contact" },
        { text: "PROJETS", onclick: () => navigate("/projects") },
        { text: theme === "light" ? <MdOutlineNightlight className="w-6 h-6" /> : <MdOutlineLightMode className="w-6 h-6" />, onclick: toggle }]}
      />

      <Hero currentTheme={theme}/>
      <Why />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}