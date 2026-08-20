import { Container } from "@/components/ui/Container";

const logos = [
  { src: "/logos/bigbasket.png", alt: "BigBasket", height: 28 },
  { src: "/logos/mygate.png", alt: "MyGate", height: 32 },
  { src: "/logos/paysquare.png", alt: "PaySquare", height: 40 },
  { src: "/logos/aurm.svg", alt: "Aurm", height: 26 },
];

export function LogoStrip() {
  return (
    <div className="border-y border-slate-100 bg-white py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-500">
          Built for teams protecting Android apps in production
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={{ height: logo.height }}
              className="w-auto opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
