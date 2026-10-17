import { useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import projects from "../../assets/projects.json";
import Fill from "../../shared/Fill";

// Index des projets : survol ou focus d'un titre = aperçu affiché à droite (desktop).
// Sur mobile, chaque projet affiche sa propre image au-dessus du titre.
const ordered = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

function Preview({ project, className = "" }) {
    const contain = project.previewFit === "contain";
    return (
        <img
            src={project.preview}
            alt=""
            loading="lazy"
            className={`w-full h-full ${contain ? "object-contain p-6 bg-white" : "object-cover object-top"} ${className}`}
        />
    );
}

export default function Projects() {
    const [active, setActive] = useState(ordered[0].slug);
    const current = ordered.find(p => p.slug === active);

    return (
        <section className="bg-bg p-5 md:p-10" id="projets" aria-labelledby="projets-title">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Projets étudiants</div>
                <h2 id="projets-title" className="section-title">Ce que nos étudiants construisent</h2>
                <p className="section-body">
                    Une jeune filière se juge sur ce qu'elle produit : des systèmes de supervision industrielle,
                    un réseau de neurones écrit à la main, et le site que vous consultez.
                </p>

                <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                    <ul className="border-b border-border">
                        {ordered.map(p => {
                            const isActive = p.slug === active;
                            return (
                                <li key={p.slug} className="border-t border-border">
                                    <Link
                                        to={`/projects/${p.slug}`}
                                        onMouseEnter={() => setActive(p.slug)}
                                        onFocus={() => setActive(p.slug)}
                                        aria-current={isActive ? "true" : undefined}
                                        className="group relative block py-8 lg:pl-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                                    >
                                        <span
                                            className={`hidden lg:block absolute left-0 top-8 bottom-8 w-0.5 bg-amber origin-top motion-safe:transition-transform motion-safe:duration-300 ${isActive ? "scale-y-100" : "scale-y-0"}`}
                                            aria-hidden="true"
                                        />

                                        <div className={`lg:hidden mb-6 aspect-[16/10] overflow-hidden border border-border ${p.previewFit === "contain" ? "bg-white" : "bg-bg2"}`}>
                                            <Preview project={p} />
                                        </div>

                                        <p className="text-sm text-off mb-2">
                                            <span className="text-cyan font-semibold">{p.domain}</span>
                                            {p.promotion && <>, <Fill value={p.promotion} /></>}
                                        </p>
                                        <h3 className={`font-display text-3xl md:text-4xl leading-tight transition-colors duration-200 ${isActive ? "text-white" : "text-white lg:text-off group-hover:text-white"}`}>
                                            {p.title}
                                        </h3>
                                        <p className="lg:hidden mt-3 text-off leading-relaxed">{p.problem}</p>
                                        <span className="lg:hidden mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber">
                                            Voir le projet <TbArrowRight className="w-4 h-4" aria-hidden="true" />
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden lg:block" aria-hidden="true">
                        <div className="sticky top-28">
                            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-bg2">
                                {ordered.map(p => (
                                    <div
                                        key={p.slug}
                                        className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300 ${p.slug === active ? "opacity-100" : "opacity-0"}`}
                                    >
                                        <Preview project={p} />
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 font-display italic text-2xl leading-snug text-white/90 max-w-[40ch]">{current.problem}</p>
                            <p className="mt-3 text-sm text-off">{current.tags.join(", ")}</p>
                        </div>
                    </div>
                </div>

                <Link to="/projects" className="mt-10 inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white border border-border transition-colors duration-200 hover:border-cyan hover:text-cyan">
                    Tous les projets
                    <TbArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
