import ProjectCard from "../shared/card";
import projects from "../assets/projects.json";
import Nav from "../shared/Nav";

export default function Projects() {

    return (
        <>
            <Nav links={[
                { text: "Retour à l'accueil", href: "/" },
            ]} />

            <main className="max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16">
                <div className="section-label">Projets étudiants</div>
                <h1 className="section-title">Tous les projets</h1>
                <p className="section-body">
                    Les réalisations des étudiants d'ISEM, toutes promotions confondues. Chaque projet renvoie à son code source.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-10 bg-border border border-border">
                    {projects.map(p => (
                        <li key={p.slug}><ProjectCard project={p} /></li>
                    ))}
                </ul>
            </main>
        </>
    )
}
