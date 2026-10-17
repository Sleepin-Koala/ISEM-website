import { useEffect, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight, TbX } from "react-icons/tb";

// Galerie : "span": "full" occupe toute la largeur, sinon deux images par ligne
export default function Gallery({ images, title }) {
    const [open, setOpen] = useState(null); // index de l'image agrandie, ou null
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (open !== null && !dialog.open) dialog.showModal();
        if (open === null && dialog.open) dialog.close();
    }, [open]);

    const step = (delta) => setOpen(i => (i + delta + images.length) % images.length);

    function onKeyDown(e) {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
    }

    const current = open !== null ? images[open] : null;

    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {images.map((img, i) => (
                    <li key={img.src} className={img.span === "full" ? "md:col-span-2" : ""}>
                        <figure>
                            <button
                                type="button"
                                onClick={() => setOpen(i)}
                                className="group block w-full border border-border bg-bg2 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                                aria-label={`Agrandir : ${img.caption}`}
                            >
                                <img
                                    src={img.src}
                                    alt=""
                                    loading="lazy"
                                    className={`w-full object-contain ${img.span === "full" ? "max-h-[75vh]" : "aspect-[16/10]"}`}
                                />
                            </button>
                            <figcaption className="mt-3 text-sm leading-relaxed text-off max-w-[65ch]">{img.caption}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>

            <dialog
                ref={dialogRef}
                onClose={() => setOpen(null)}
                onKeyDown={onKeyDown}
                onClick={(e) => e.target === dialogRef.current && setOpen(null)}
                aria-label={`Galerie ${title}`}
                className="m-auto max-w-none max-h-none w-screen h-screen bg-transparent p-0 backdrop:bg-black/95"
            >
                {current && (
                    <div className="flex flex-col h-full p-4 md:p-8" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
                        <div className="flex items-center justify-between text-sm text-white/80">
                            <span>{open + 1} / {images.length}</span>
                            <button type="button" onClick={() => setOpen(null)} className="p-2 cursor-pointer hover:text-white" aria-label="Fermer">
                                <TbX className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 min-h-0 flex items-center gap-2 md:gap-4" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
                            <button type="button" onClick={() => step(-1)} className="shrink-0 p-2 text-white/80 hover:text-white cursor-pointer" aria-label="Image précédente">
                                <TbChevronLeft className="w-8 h-8" />
                            </button>
                            <img src={current.src} alt={current.caption} className="flex-1 min-w-0 max-h-full object-contain" />
                            <button type="button" onClick={() => step(1)} className="shrink-0 p-2 text-white/80 hover:text-white cursor-pointer" aria-label="Image suivante">
                                <TbChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        <p className="mt-4 text-center text-sm text-white/80 max-w-[70ch] mx-auto">{current.caption}</p>
                    </div>
                )}
            </dialog>
        </>
    );
}
