import { useEffect, useState } from "react"
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md"
import { useNavigate } from "react-router-dom"



export default function Nav({links}) {

    const navigate = useNavigate()
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")

    useEffect(() => {
        theme === "light" ? document.getElementsByTagName("html").item(0).classList.replace("dark", "light") :
            document.getElementsByTagName("html").item(0).classList.replace("light", "dark")



    }, [theme])

    function ToggleTheme() {
        return theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <nav className="flex md:flex-row items-center justify-between gap-4 px-4 md:px-8 lg:px-16">
            <a href="/" className="flex gap-0 flex-col">
                <span className="text-2xl font-extrabold text-white tracking-widest font-['Syne', sans-serif]">ISEM</span>
                <span className="uppercase text-amber text-xs tracking-widest">Sciences Exactes &amp; Modélisation</span>
            </a>
            <ul className="hidden md:flex gap-6 nav-links">


                <li><a href="#foundations">Programme</a></li>
                <li><a href="/#skills">Spécialisations</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a onClick={()=>navigate("/projects")} className="cursor-pointer">PROJETS</a></li>
                <li><div className="flex justify-center items-center hover:cursor-pointer" onClick={ToggleTheme}>{theme === "dark" ? <MdOutlineLightMode className="w-6 h-6" /> : <MdOutlineNightlight className="w-6 h-6" />}</div></li>

            </ul>
            {/* <button className="bg-transparent border-amber px-2 py-3 text-amber text-xs font-bold trancking-widest uppercase hover:bg-amber hover:text-bg hidden md:flex">Boite a Idee</button> */}
        </nav>
    )
}