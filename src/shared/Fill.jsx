// Affiche une valeur de projects.json. Une valeur entre crochets, ex. "[Xe promotion]",
// est un emplacement à compléter : elle est signalée visuellement jusqu'à son remplacement.
export const isPlaceholder = (value) => typeof value === "string" && value.includes("[");

export default function Fill({ value, className = "" }) {
    if (!isPlaceholder(value)) return <span className={className}>{value}</span>;

    return (
        <span
            className="px-1.5 border border-dashed border-amber text-amber bg-amber/10"
            title="À compléter dans src/assets/projects.json"
        >
            {value}
        </span>
    );
}
