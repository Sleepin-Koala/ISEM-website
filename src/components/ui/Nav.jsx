
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Nav({ links }) {

    const [showMore, setShowMore] = useState(false)


    useEffect(() => {
        showMore ? document.getElementById("drop").classList.replace("hidden", "flex-col") 
        : document.getElementById("drop").classList.replace("flex-col", "hidden") 
    }, [showMore])

    return (
        <nav className="gap-4 pt-4 px-8 lg:px-16">
            <div className="flex justify-between">

                <a href="/" className="flex gap-0 flex-col">
                    <span className="text-2xl font-extrabold text-white tracking-widest font-['Syne', sans-serif]">ISEM</span>
                    <span className="uppercase text-amber text-xs tracking-widest">Sciences Exactes &amp; Modélisation</span>
                </a>

                <div className="lg:hidden cursor-pointer flex justify-center items-center" id="bar" onClick={() => setShowMore(!showMore)}>
                    {showMore ? <RxCross1 /> : <FaBars />}
                </div>

                <ul className="hidden lg:flex gap-6 nav-links " >
                    {links.map((lk, id) => (
                        <li key={id}><a href={lk.href}  className={`${lk.classname} cursor-pointer`} onClick={lk.onclick}>{lk.text} </a></li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="hidden lg:hidden gap-2 nav-links text-center select-none p-3" id="drop">
                    {links.map((lk, id) => (
                        <li key={id}><a href={lk.href} className={`${lk.classname} cursor-pointer p-3 hover:bg-bg2 flex justify-center`} onClick={lk.onclick}>{lk.text} </a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}