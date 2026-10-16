import { TbMathFunction, TbTopologyStar3, TbFlask, TbArrowsJoin, TbWorld, TbBinaryTree2 } from "react-icons/tb";

const items = [
    { icon: TbMathFunction, title: "Rigueur mathématique", desc: "Chaque concept est formalisé, prouvé, compris. Pas de boîtes noires. Un ingénieur ISEM sait pourquoi ça marche." },
    { icon: TbTopologyStar3, title: "Pensée systémique", desc: "Modéliser un phénomène, c'est d'abord comprendre ses interactions. ISEM enseigne à voir les systèmes dans leur globalité." },
    { icon: TbFlask, title: "Science appliquée", desc: "Finance, assurance, IA, simulation : les compétences ISEM s'appliquent aux défis quantitatifs les plus exigeants." },
    { icon: TbArrowsJoin, title: "Interdisciplinarité", desc: "Mathématiques, informatique, économie, physique — les vrais problèmes ne respectent pas les frontières disciplinaires." },
    { icon: TbWorld, title: "Excellence africaine", desc: "Former les ingénieurs scientifiques qui bâtiront les infrastructures analytiques du continent et rayonneront à l'international." },
    { icon: TbBinaryTree2, title: "Profondeur algorithmique", desc: "Au-delà des frameworks : comprendre les fondements, implémenter depuis zéro, innover au niveau de l'algorithme." },
];

export default function Why() {
    return (
        <section className="bg-bg2 p-5 md:p-10" id="foundations" aria-labelledby="foundations-title">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Pourquoi ISEM</div>
                <h2 id="foundations-title" className="section-title">Ingénierie de la complexité</h2>

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
