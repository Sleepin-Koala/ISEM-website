import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TbArrowLeft, TbArrowRight, TbArrowUpRight } from "react-icons/tb";
import projects from "../assets/projects.json";
import Nav from "../shared/Nav";
import Gallery from "./Gallery";
import Fill from "../shared/Fill";

const NAV_LINKS = [
    { text: "Accueil", href: "/" },
    { text: "Tous les projets", href: "/projects" },
];

export default function ProjectPage() {
    const { slug } = useParams();
    const index = projects.findIndex(p => p.slug === slug);
    const project = projects[index];

    // Le routeur conserve le défilement de la page précédente : on repart du haut
    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    useEffect(() => {
        document.title = project ? `${project.title} — Projets ISEM` : "Projet introuvable — ISEM";
        return () => { document.title = "ISEM — Ingénierie en Sciences Exactes & Modélisation"; };
    }, [project]);

    if (!project) {
        return (
            <>
                <Nav links={NAV_LINKS} />
                <main className="max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-24">
                    <h1 className="section-title">Ce projet n'existe pas</h1>
                    <p className="section-body mb-8">L'adresse est peut-être incomplète. Retrouvez tous les projets des étudiants sur la page dédiée.</p>
                    <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] bg-amber text-bg">
                        Voir tous les projets
                    </Link>
                </main>
            </>
        );
    }

    const next = projects[(index + 1) % projects.length];
    const { title, domain, promotion, problem, description, details, modules, tags, auteur, preview, previewFit, gallery, link } = project;

    return (
        <>
            <Nav links={NAV_LINKS} />

            <main className="max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-24">
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-off hover:text-white">
                    <TbArrowLeft className="w-4 h-4" aria-hidden="true" />
                    Tous les projets
                </Link>

                <header className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold text-cyan mb-4">{domain}</p>
                        <h1 className="font-display font-normal text-white text-5xl md:text-7xl leading-[1.02] mb-8">{title}</h1>
                        <p className="font-display italic text-2xl md:text-3xl leading-snug text-white/90 max-w-[30ch]">{problem}</p>
                    </div>

                    <dl className="self-end grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                        {promotion && (<><dt className="text-off">Promotion</dt><dd className="text-white"><Fill value={promotion} /></dd></>)}
                        {auteur && (<><dt className="text-off">Réalisé par</dt><dd className="text-white">{auteur}</dd></>)}
                        <dt className="text-off">Technologies</dt>
                        <dd className="text-white">{tags.join(", ")}</dd>
                        <dt className="text-off">Code source</dt>
                        <dd>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber hover:underline">
                                GitHub
                                <TbArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                <span className="sr-only">(nouvel onglet)</span>
                            </a>
                        </dd>
                    </dl>
                </header>

                <figure className={`mt-14 border border-border ${previewFit === "contain" ? "bg-white" : "bg-bg2"}`}>
                    <img src={preview} alt={`Aperçu du projet ${title}`} className={`w-full max-h-[80vh] object-contain ${previewFit === "contain" ? "p-6 md:p-12" : ""}`} />
                </figure>

                <section className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16" aria-labelledby="about-title">
                    <h2 id="about-title" className="font-display text-3xl text-white">Le projet</h2>
                    <div className="space-y-5 text-lg leading-relaxed text-off max-w-[65ch]">
                        <p className="text-white">{description}</p>
                        {details?.map(d => <p key={d}>{d}</p>)}
                    </div>
                </section>

                {modules && (
                    <section className="mt-20" aria-labelledby="modules-title">
                        <h2 id="modules-title" className="font-display text-3xl text-white mb-8">Les {modules.length} systèmes du portail</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                            {modules.map(m => (
                                <li key={m.name} className="bg-bg2 p-6 md:p-8 flex flex-col gap-2">
                                    <h3 className="text-base font-semibold text-white">{m.name}</h3>
                                    <p className="text-sm leading-relaxed text-off">{m.desc}</p>
                                    {m.authors && <p className="mt-auto pt-3 text-sm text-cyan"><Fill value={m.authors} /></p>}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {gallery?.length > 0 && (
                    <section className="mt-20" aria-labelledby="gallery-title">
                        <h2 id="gallery-title" className="font-display text-3xl text-white mb-8">En images</h2>
                        <Gallery images={gallery} title={title} />
                    </section>
                )}

                <nav className="mt-24 pt-10 border-t border-border" aria-label="Projet suivant">
                    <Link to={`/projects/${next.slug}`} className="group flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                        <span className="text-sm text-off">Projet suivant</span>
                        <span className="inline-flex items-center gap-3 font-display text-3xl md:text-5xl text-white group-hover:text-cyan transition-colors duration-200">
                            {next.title}
                            <TbArrowRight className="w-8 h-8 shrink-0" aria-hidden="true" />
                        </span>
                    </Link>
                </nav>
            </main>
        </>
    );
}
