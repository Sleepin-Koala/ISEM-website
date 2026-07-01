import { useState } from "react"
import IMS from "./images.png"
import { GoArrowUpRight } from "react-icons/go";


export default function Card({ title, description, tags, preview , link}) {

    return (
        <div className="relative group hover:-translate-y-3 glass-card transition-all duration-700 bg-bg2">
            <div className="flex flex-col p-3">

                <img src={preview} className="w-full h-60" />
                <div className="p-5  transition-all duration-700">
                    <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
                    <p className="text-sm mt-2 line-clamp-2">{description}</p>
                </div>
                <div className="flex justify-center gap-3">

                    {tags.map((element, id) => (
                        <div className="p-1 border border-amber rounded-xl min-w-15 text-center">{element}</div>
                    ))}
                </div>
            </div>
            <div className="rounded-xl absolute inset-0 hover:bg-slate-400/20 opacity-0 group-hover:opacity-100 flex justify-center items-center backdrop-blur-sm">
                <div className="bg-bg2 rounded-2xl p-3 font-bold flex justify-center items-center cursor-pointer"><a href={link}>Repo Github</a><GoArrowUpRight className="text-2xl" /></div>
            </div>


        </div>)


}
