import { TbMathFunction, TbTopologyStar3, TbFlask, TbArrowsJoin, TbWorld, TbBinaryTree2 } from "react-icons/tb";

const items = [
    { icon: TbMathFunction, title: "Rigueur mathématique", desc: "Chaque concept est formalisé et démontré avant d'être appliqué. L'objectif : comprendre pourquoi une méthode fonctionne, pas seulement savoir l'utiliser." },
    { icon: TbTopologyStar3, title: "Pensée systémique", desc: "Modéliser un phénomène, c'est d'abord comprendre ses interactions. On apprend à regarder un système dans sa globalité." },
    { icon: TbFlask, title: "Science appliquée", desc: "Finance, assurance, IA, simulation : les enseignements sont tournés vers des problèmes quantitatifs réels." },
    { icon: TbArrowsJoin, title: "Interdisciplinarité", desc: "Mathématiques, informatique, économie, physique : les vrais problèmes ne respectent pas les frontières disciplinaires." },
    { icon: TbBinaryTree2, title: "Profondeur algorithmique", desc: "Au-delà des frameworks : comprendre les fondements et implémenter depuis zéro, comme notre réseau de neurones écrit sans bibliothèque de deep learning." },
];

export default function Why() {
    return (
        <section className="bg-bg2 p-5 md:p-10" id="foundations" aria-labelledby="foundations-title">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Notre approche</div>
                <h2 id="foundations-title" className="section-title">Ingénierie de la complexité</h2>
                <p className="section-body">
                    Une formation jeune, qui compte aujourd'hui trois promotions, construite autour de six principes.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 bg-border border border-border">
                    {items.map(({ icon: Icon, title, desc }) => (
                        <li key={title} className="bg-bg2 p-8">
                            <span className="flex items-center justify-center w-11 h-11 mb-6 border border-border text-cyan" aria-hidden="true">
                                <Icon className="w-6 h-6" />
                            </span>
                            <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                            <p className="text-sm leading-relaxed text-off">{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
