import SectionTitle from "@/components/SectionTitle";

export const dynamic = "force-static";

const timeline = [
  {
    title: "Hace 66 millones de años",
    text:
      "Un asteroide de unos 10 km de diámetro impacta en Chicxulub, en la actual península de Yucatán (México), liberando la energía de miles de millones de bombas atómicas.",
  },
  {
    title: "Las primeras horas y días",
    text:
      "Terremotos, tsunamis gigantes e incendios forestales en varios continentes. Una nube de polvo y ceniza comienza a cubrir el cielo.",
  },
  {
    title: "Los meses siguientes",
    text:
      "La oscuridad bloquea la luz del sol: las plantas no pueden hacer fotosíntesis y las temperaturas caen bruscamente. Las cadenas alimenticias colapsan.",
  },
  {
    title: "El año siguiente",
    text:
      "Desaparecen los dinosaurios no avianos y alrededor del 75% de todas las especies del planeta, incluidos grandes reptiles marinos y voladores.",
  },
];

const survivors = [
  { emoji: "🐦", name: "Aves", text: "Dinosaurios pequeños con plumas que podían volar y comer semillas." },
  { emoji: "🐭", name: "Mamíferos pequeños", text: "Del tamaño de un ratón; comían insectos y se escondían bajo tierra." },
  { emoji: "🐊", name: "Cocodrilos y tortugas", text: "Podían pasar meses sin comer y vivían en ríos y pantanos." },
  { emoji: "🦎", name: "Lagartos y serpientes", text: "Pequeños y adaptables, sobrevivieron en refugios subterráneos." },
];

export default function ExtincionPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionTitle
        title="La gran extinción"
        subtitle="Cómo terminó el reinado de los dinosaurios hace 66 millones de años"
      />

      <div className="rounded-2xl bg-selva-900 text-crema-50 p-6 md:p-10 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold">☄️ El impacto del asteroide</h2>
          <p className="mt-3 text-crema-100/85 text-sm leading-relaxed">
            La hipótesis más aceptada por la ciencia dice que un asteroide
            chocó contra la Tierra a más de 70.000 km/h. El cráter de
            Chicxulub mide unos 180 km de diámetro. El polvo levantado
            oscureció el planeta, las plantas murieron y, con ellas, los
            grandes herbívoros y los carnívoros que los cazaban.
          </p>
          <p className="mt-3 text-crema-100/85 text-sm leading-relaxed">
            Los volcanes de la India (traps del Decán) también estaban en
            erupción y pudieron empeorar el cambio climático.
          </p>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-selva-950/60 py-12 text-8xl">
          ☄️
        </div>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold text-selva-900 text-center">
        📜 Línea temporal del desastre
      </h2>
      <ol className="space-y-4">
        {timeline.map((stage, i) => (
          <li
            key={stage.title}
            className="flex gap-4 rounded-2xl bg-white p-5 shadow-md border border-arena-200"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tierra-500 text-white font-bold">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold text-selva-900">{stage.title}</h3>
              <p className="mt-1 text-sm text-tierra-700">{stage.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 mb-6 text-2xl font-bold text-selva-900 text-center">
        🌱 ¿Qué sobrevivió?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {survivors.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl bg-white p-5 shadow-md border border-arena-200 text-center"
          >
            <p className="text-5xl">{s.emoji}</p>
            <h3 className="mt-3 font-bold text-selva-900">{s.name}</h3>
            <p className="mt-1 text-sm text-tierra-700">{s.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-tierra-700">
        💡 Esta página usa <strong>SSG</strong>: se generó como HTML estático
        una sola vez al compilar el proyecto.
      </p>
    </div>
  );
}
