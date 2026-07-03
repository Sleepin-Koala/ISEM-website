import Neural from "./Neural.jsx"



export default function Hero() {

  return (
    <section className="ground relative flex items-center p-16 min-h-screen">

      <div className="inset-0 absolute opacity-10">
        <img src="./bg2.png" style={{width: "100%" , height: "100%"}}/>
      </div>

      <div className="pt-20">
        <div className="hero-left">
          <h1 className="text-white mb-[1.8rem] text-5xl">
            Comprendre le monde
            <p className="text-cyan-400">par les modèles.</p>
          </h1>

          <p className="text-off max-w-120 mb-12">
            ISEM forme une nouvelle génération d'ingénieurs scientifiques — mathématiciens, modélisateurs, architectes de données — capables de raisonner avec rigueur sur les systèmes complexes du monde réel.
          </p>

          <div className="flex gap-2 flex-wrap">
            <a href="#foundations" className="uppercase transition-all relative font-bold px-2 py-3 bg-amber">Découvrir le programme</a>
            <a href="#skills" className="px-2 py-3 font-semibold uppercase transition-all border border-[rgba(240,242,245,0.2)] text-white tracking-widest bg-transparent hover:border-cyan-600 hover:text-cyan-600">Explorer les spécialisations</a>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:flex flex-col items-center gap-2 opacity-40  bottom-3 left-1/2">
        <span className="uppercase text-amber tracking-widest text-xs">Explorer</span>
        <div className="scroll-line w-px h-14 animate-bounce"></div>
      </div>

      <Neural/>

    </section>
  )
}