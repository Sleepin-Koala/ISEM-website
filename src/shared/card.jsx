import { TbArrowUpRight } from "react-icons/tb";

export default function ProjectCard({ project, featured = false }) {
    const { title, domain, problem, description, tags, auteur, preview, previewFit, link } = project;
    const contain = previewFit === "contain";

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group h-full bg-bg2 transition-colors duration-200 hover:bg-bg3 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan ${featured ? "flex flex-col lg:grid lg:grid-cols-[3fr_2fr]" : "flex flex-col"}`}
        >
            <div className={`relative overflow-hidden aspect-[16/10] ${featured ? "lg:aspect-auto lg:min-h-[22rem]" : ""} ${contain ? "bg-white" : "bg-bg3"}`}>
                <img
                    src={preview}
                    alt={`Aperçu du projet ${title}`}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] ${contain ? "object-contain p-4" : "object-cover object-top"}`}
                />
            </div>

            <div className={`flex flex-col flex-1 gap-4 p-8 ${featured ? "lg:p-10 lg:justify-center" : ""}`}>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-cyan">{domain}</span>
                <h3 className={`font-display text-white leading-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>{title}</h3>
                <p className="text-white/90 italic">{problem}</p>
                <p className="text-sm leading-relaxed text-off">{description}</p>

                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {tags.map(tag => (
                        <li key={tag} className="px-2.5 py-1 text-xs text-off border border-border">{tag}</li>
                    ))}
                </ul>

                <div className="flex items-center justify-between gap-4 pt-4 mt-auto border-t border-border text-xs">
                    {auteur && <span className="text-off">Réalisé par <span className="text-white">{auteur}</span></span>}
                    <span className="ml-auto inline-flex items-center gap-1 font-bold uppercase tracking-[0.12em] text-amber">
                        Voir le code
                        <TbArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                </div>
            </div>
        </a>
    );
}
