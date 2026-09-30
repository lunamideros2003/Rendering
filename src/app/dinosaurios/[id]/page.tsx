import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDinosaurs, getDinosaurById } from "@/data/dinosaurs";

export const revalidate = 60;

export async function generateStaticParams() {
  return getAllDinosaurs().map((dinosaur) => ({ id: dinosaur.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DinosaurioDetallePage({ params }: Props) {
  const { id } = await params;
  const dinosaur = getDinosaurById(id);

  if (!dinosaur) {
    notFound();
  }

  const others = getAllDinosaurs().filter((d) => d.id !== dinosaur.id).slice(0, 3);

  const factSheet: [string, string][] = [
    ["🔬 Nombre científico", dinosaur.scientificName],
    ["🦕 Período", dinosaur.period],
    ["🍖 Alimentación", dinosaur.diet],
    ["📏 Longitud", dinosaur.length],
    ["⚖️ Peso", dinosaur.weight],
    ["🌍 Hábitat", dinosaur.habitat],
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link
        href="/dinosaurios"
        className="text-sm font-semibold text-selva-700 hover:underline"
      >
        ← Volver al catálogo
      </Link>

      <article className="mt-4 rounded-2xl bg-white shadow-md border border-arena-200 overflow-hidden">
        <div className="bg-gradient-to-br from-selva-700 to-selva-900 text-crema-50 px-6 py-10 text-center">
          <p className="text-8xl">{dinosaur.emoji}</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">{dinosaur.name}</h1>
          <p className="mt-1 italic text-crema-100/80">{dinosaur.scientificName}</p>
          <div className="mt-4 flex justify-center gap-2 text-xs">
            <span className="rounded-full bg-crema-50/20 px-4 py-1.5 font-medium">
              {dinosaur.period}
            </span>
            <span className="rounded-full bg-crema-50/20 px-4 py-1.5 font-medium">
              {dinosaur.diet}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-selva-900">📖 Descripción</h2>
            <p className="mt-2 text-tierra-700 leading-relaxed">{dinosaur.description}</p>
            <div className="mt-5 rounded-xl bg-crema-100 p-4 text-sm text-tierra-700">
              <span className="font-bold">💡 Dato curioso: </span>
              {dinosaur.funFact}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-selva-900">🗂️ Ficha técnica</h2>
            <dl className="mt-3 divide-y divide-arena-200 rounded-xl border border-arena-200 overflow-hidden">
              {factSheet.map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 bg-white text-sm">
                  <dt className="px-4 py-3 font-semibold text-selva-900 bg-selva-50">
                    {label}
                  </dt>
                  <dd className="px-4 py-3 text-tierra-700">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>

      <h2 className="mt-12 mb-4 text-xl font-bold text-selva-900">
        Sigue explorando
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {others.map((other) => (
          <Link
            key={other.id}
            href={`/dinosaurios/${other.id}`}
            className="rounded-2xl bg-white p-4 shadow-md border border-arena-200 text-center hover:shadow-lg transition-shadow"
          >
            <p className="text-5xl">{other.emoji}</p>
            <p className="mt-2 font-bold text-selva-900">{other.name}</p>
            <p className="text-xs text-tierra-500">{other.period} · {other.diet}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-tierra-700">
        💡 Esta página usa <strong>ISR</strong>: se generó estáticamente en el
        build y se revalida cada 60 segundos si los datos cambian.
      </p>
    </div>
  );
}
