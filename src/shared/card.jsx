import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import Fill from "./Fill";

export default function ProjectCard({ project }) {
    const { slug, title, domain, promotion, problem, tags, auteur, preview, previewFit } = project;
    const contain = previewFit === "contain";

    return (
        <Link
            to={`/projects/${slug}`}
            className="group flex flex-col h-full bg-bg2 transition-colors duration-200 hover:bg-bg3 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan"
        >
            <div className={`relative overflow-hidden aspect-[16/10] ${contain ? "bg-white" : "bg-bg3"}`}>
                <img
                    src={preview}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] ${contain ? "object-contain p-4" : "object-cover object-top"}`}
                />
            </div>

            <div className="flex flex-col flex-1 gap-3 p-8">
                <p className="text-sm font-semibold text-cyan">{domain}{promotion && <span className="text-off font-normal">, <Fill value={promotion} /></span>}</p>
                <h2 className="font-display text-white text-3xl leading-tight">{title}</h2>
                <p className="text-off leading-relaxed">{problem}</p>

                <p className="mt-auto pt-5 border-t border-border flex items-center justify-between gap-4 text-sm">
                    <span className="text-off">{tags.join(", ")}{auteur && <>, par <span className="text-white">{auteur}</span></>}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber shrink-0">
                        Voir le projet
                        <TbArrowRight className="w-4 h-4 motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                </p>
            </div>
        </Link>
    );
}
