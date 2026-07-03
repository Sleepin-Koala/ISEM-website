export default function Why() {
    return (
        <section className="bg-bg2 border-t-border border-b-border p-5 md:p-10" id="foundations">
            <div className="max-w-7xl mx-auto">
                <div className="section-label">Pourquoi ISEM</div>
                <div className="section-title text-white">Ingénierie de la complexité</div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-11">
                    {[
                        { icon: '∑', title: 'Rigueur mathématique', desc: "Chaque concept est formalisé, prouvé, compris. Pas de boîtes noires. Un ingénieur ISEM sait pourquoi ça marche." },
                        { icon: '⟨⟩', title: 'Pensée systémique', desc: "Modéliser un phénomène, c'est d'abord comprendre ses interactions. ISEM enseigne à voir les systèmes dans leur globalité." },
                        { icon: '∂', title: 'Science appliquée', desc: "Finance, assurance, IA, simulation : les compétences ISEM s'appliquent aux défis quantitatifs les plus exigeants." },
                        { icon: 'λ', title: 'Interdisciplinarité', desc: "Mathématiques, informatique, économie, physique — les vrais problèmes ne respectent pas les frontières disciplinaires." },
                        { icon: '∇', title: 'Excellence africaine', desc: "Former les ingénieurs scientifiques qui bâtiront les infrastructures analytiques du continent et rayonneront à l'international." },
                        { icon: '∫', title: 'Profondeur algorithmique', desc: "Au-delà des frameworks : comprendre les fondements, implémenter depuis zéro, innover au niveau de l'algorithme." },
                    ].map((item, i) => (
                        <div key={i} className="why-card">
                            <div className="why-icon text-3xl">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}