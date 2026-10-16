import { useEffect , useState} from "react"


export function useTheme() {

    const [currentTheme, setTheme] = useState(localStorage.getItem("theme") ?? "dark")

    useEffect(()=>{
        const html = document.documentElement
        html.classList.remove("light" , "dark")
        html.classList.add(currentTheme)
        localStorage.setItem('theme', currentTheme);
    } , [currentTheme])

    const changeTheme = () => setTheme(t => t=="light" ? "dark" : t == "dark" ? "light" : null)

    return {currentTheme , changeTheme}
}