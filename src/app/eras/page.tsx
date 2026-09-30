import SectionTitle from "@/components/SectionTitle";
import { eras } from "@/data/eras";

export const dynamic = "force-static";

export default function ErasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionTitle
        title="Eras geológicas"
        subtitle="Los tres capítulos de la era Mesozoica: 186 millones de años de historia"
      />

      <div className="space-y-8">
        {eras.map((era, index) => (
          <article
            key={era.id}
            className="rounded-2xl bg-white shadow-md border border-arena-200 overflow-hidden"
          >
            <div className="bg-selva-800 text-crema-50 px-6 py-5 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-selva-700 text-xl font-bold">
                {index + 1}
              </span>
              <div>
                <h2 className="text-2xl font-bold">
                  {era.emoji} {era.name}
                </h2>
                <p className="text-sm text-crema-100/80">{era.timeRange}</p>
              </div>
            </div>

            <div className="p-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-selva-900">📏 Duración</h3>
                <p className="mt-1 text-sm text-tierra-700">{era.duration}</p>
                <h3 className="mt-4 font-bold text-selva-900">🌤️ Clima</h3>
                <p className="mt-1 text-sm text-tierra-700">{era.climate}</p>
                <h3 className="mt-4 font-bold text-selva-900">🦕 Dinosaurios destacados</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {era.featuredDinosaurs.map((name) => (
                    <span
                      key={name}
                      className="rounded-full bg-selva-100 px-3 py-1 text-xs font-medium text-selva-800"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-selva-900">✨ Características</h3>
                <ul className="mt-1 list-disc pl-5 text-sm text-tierra-700 space-y-1">
                  {era.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <h3 className="mt-4 font-bold text-selva-900">📌 Acontecimiento clave</h3>
                <p className="mt-1 text-sm text-tierra-700">{era.keyEvent}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-tierra-700">
        💡 Esta página usa <strong>SSG</strong>: se generó como HTML estático
        una sola vez al compilar el proyecto.
      </p>
    </div>
  );
}
