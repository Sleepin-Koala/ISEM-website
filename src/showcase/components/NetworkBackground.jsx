import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initEngine = (engine) => loadSlim(engine);

// Reprend --color-cyan de theme.css pour chaque thème
const ACCENT = { dark: "#4fc3f7", light: "#1a4a8a" };

function buildOptions(theme) {
    const accent = ACCENT[theme] ?? ACCENT.dark;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;

    return {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        particles: {
            number: { value: small ? 40 : 90, density: { enable: true } },
            paint: { fill: { enable: true, color: { value: accent }, opacity: { min: 0.5, max: 1 } } },
            shape: { type: "circle" },
            size: { value: { min: 1.5, max: 3 } },
            links: {
                enable: true,
                color: accent,
                distance: small ? 120 : 160,
                opacity: theme === "light" ? 0.45 : 0.4,
                width: 1,
            },
            move: {
                enable: !reduceMotion,
                speed: 0.6,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
            },
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: { enable: !small && !reduceMotion, mode: "grab" },
                onClick: { enable: false },
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.9 } },
            },
        },
    };
}

export default function NetworkBackground({ theme }) {
    const options = useMemo(() => buildOptions(theme), [theme]);

    return (
        <ParticlesProvider init={initEngine}>
            <Particles id="hero-network" options={options} className="absolute inset-0 -z-10" />
        </ParticlesProvider>
    );
}
