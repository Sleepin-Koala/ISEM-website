


export default function Nav({ links }) {

    return (
        <nav className="flex md:flex-row items-center justify-between gap-4 px-4 md:px-8 lg:px-16">
            <a href="/" className="flex gap-0 flex-col">
                <span className="text-2xl font-extrabold text-white tracking-widest font-['Syne', sans-serif]">ISEM</span>
                <span className="uppercase text-amber text-xs tracking-widest">Sciences Exactes &amp; Modélisation</span>
            </a>
            <ul className="hidden md:flex gap-6 nav-links">
                {links.map((lk, id) => (
                    <li><a href={lk.href} className={`${lk.classname} cursor-pointer`} onClick={lk.onclick}>{lk.text} </a></li>
                ))}
            </ul>
        </nav>
    )
}