import { useState } from "react"
import { GoArrowUpRight } from "react-icons/go";


export default function Card({ title, description, tags, preview, link }) {

    return (
        <div className="relative group hover:-translate-y-3 cursor-pointer glass-card transition-all duration-700 bg-bg2" 
        aria-label={`Voir le projet ${title}`}
        onClick={() => window.open(link)}>
            <div className="flex flex-col p-3">

                <img 
                src={preview} 
                alt={`Aperçu du projet ${title}`} 
                loading="lazy"
                className="w-full h-60 object-cover rounded-t-xl"/>
                <div className="p-5  transition-all duration-700">
                    <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
                    <p className="text-sm mt-2 line-clamp-2">{description}</p>
                </div>
                <div className="flex justify-center gap-3">
                    {tags.map((element, id) => (
                        <div key={id} className="p-1 border border-amber rounded-xl text-xs bg-dim/30 min-w-15 text-center">{element}</div>
                    ))}
                </div>
            </div>

            <div className="rounded-xl absolute inset-0 hover:bg-slate-400/20 opacity-0 group-hover:opacity-100 flex justify-center items-center backdrop-blur-sm transition-opacity duration-500">
                <div className="bg-bg2 rounded-2xl p-3 font-bold flex justify-center items-center cursor-pointer">
                    <span>Voir sur GitHub</span>
                    <GoArrowUpRight className="text-2xl ml-1" />
                </div>
            </div>

        </div>)
}
