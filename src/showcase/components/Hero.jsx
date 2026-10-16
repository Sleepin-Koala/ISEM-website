import NetworkBackground from "./NetworkBackground.jsx"

export default function Hero({currentTheme}) {

  return (
    <section className="ground relative isolate overflow-hidden flex items-center px-5 md:px-10 lg:px-16 py-16 min-h-screen">

      <div className={`inset-0 absolute -z-20 pointer-events-none ${currentTheme == "light" ? "invert-300 opacity-20" : "opacity-10"}`} aria-hidden="true">
        <img src="/bg2.png" alt="" className="w-full h-full object-cover" />
      </div>

      <NetworkBackground theme={currentTheme} />

      <div className="relative pt-20">
        <div className="hero-left">
          <h1 className="font-display font-normal text-white mb-[1.8rem] text-5xl leading-[1.05]">
            Comprendre le monde
            <span className="block italic text-cyan">par les modèles.</span>
          </h1>

          <p className="text-off max-w-120 mb-12">
            ISEM est une jeune filière d'ingénierie en sciences exactes et modélisation, à Yamoussoukro.
            Trois promotions y apprennent à raisonner avec rigueur sur des systèmes complexes, et le montrent par des projets concrets.
          </p>

          <div className="flex gap-2 flex-wrap">
            <a href="#projets" className="relative px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] bg-amber text-bg transition duration-200 hover:brightness-110">Voir les projets</a>
            <a href="#foundations" className="relative px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] border border-border text-white transition-colors duration-200 hover:border-cyan hover:text-cyan">Découvrir le programme</a>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:flex flex-col items-center gap-2 opacity-40 bottom-3 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <span className="uppercase text-amber tracking-widest text-xs">Explorer</span>
        <div className="scroll-line w-px h-14 motion-safe:animate-bounce"></div>
      </div>

    </section>
  )
}
