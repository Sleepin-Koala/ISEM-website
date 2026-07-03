import { useEffect , useState} from "react"


export function useTheme() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark")

    useEffect(()=>{
        const html = document.documentElement
        html.classList.remove("light" , "dark")
        html.classList.add(theme)
        localStorage.setItem('theme', theme);
    } , [theme])

    const toggle = () => setTheme(t => t=="light" ? "dark" : t == "dark" ? "light" : null)

    return {theme , toggle}
}