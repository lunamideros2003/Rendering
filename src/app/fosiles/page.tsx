import SectionTitle from "@/components/SectionTitle";
import { fossils } from "@/data/fossils";

export const dynamic = "force-static";

export default function FosilesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="Galería de fósiles"
        subtitle="Pistas de piedra que nos cuentan la vida prehistórica"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fossils.map((fossil) => (
          <article
            key={fossil.id}
            className="rounded-2xl bg-white shadow-md border border-arena-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-arena-200 to-crema-100 flex items-center justify-center py-8 text-7xl">
              {fossil.emoji}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-selva-900">{fossil.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-selva-100 px-3 py-1 font-medium text-selva-800">
                  {fossil.period}
                </span>
                <span className="rounded-full bg-crema-100 px-3 py-1 font-medium text-tierra-700">
                  📍 {fossil.location}
                </span>
              </div>
              <p className="mt-3 text-sm text-tierra-700">{fossil.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-tierra-700">
        🔬 Contenido con fines educativos y demostrativos. Esta página usa{" "}
        <strong>SSG</strong>: HTML estático generado en el build.
      </p>
    </div>
  );
}
