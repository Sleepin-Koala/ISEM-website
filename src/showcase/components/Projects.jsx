import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import ProjectCard from "../../shared/card";
import projects from "../../assets/projects.json";

export default function Projects() {
    const featured = projects.find(p => p.featured) ?? projects[0];
    const others = projects.filter(p => p !== featured).slice(0, 2);

    return (
        <section className="bg-bg p-5 md:p-10" id="projets" aria-labelledby="projets-title">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Projets étudiants</div>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 id="projets-title" className="section-title">Ce que nos étudiants <em>construisent</em></h2>
                        <p className="section-body">
                            Une jeune filière se juge sur ce qu'elle produit. Voici des projets conçus et développés
                            par nos étudiants, du simulateur industriel au réseau de neurones écrit à la main.
                        </p>
                    </div>
                    <Link to="/projects" className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white border border-border transition-colors duration-200 hover:border-cyan hover:text-cyan">
                        Tous les projets
                        <TbArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-10 bg-border border border-border">
                    <li className="lg:col-span-2"><ProjectCard project={featured} featured /></li>
                    {others.map(p => (
                        <li key={p.slug}><ProjectCard project={p} /></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
