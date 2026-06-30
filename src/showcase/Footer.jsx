


export default function Footer(){

  return(
  <footer className="flex flex-col z-2 items-center gap-7 border-t-border bg-bg md:flex-row p-3" >
    
    <div className="footer-logo flex flex-col justify-center items-center">
      <div className="mark">ISEM</div>
      <div className="sub">Ingénierie en Sciences Exactes &amp; Modélisation</div>
    </div>
    <div className="footer-copy">
      <p>© 2026 ISEM — Yamoussoukro, Côte d'Ivoire</p>
    </div>
    <div className="flex footer-links flex-1 gap-5">
      <a href="#">Programme</a>
      <a href="#">Contact</a>
    </div>
  </footer>
  )
}