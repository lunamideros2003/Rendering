import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import DinosaurCard from "@/components/DinosaurCard";
import { filterDinosaurs, getAllDinosaurs } from "@/data/dinosaurs";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ period?: string; diet?: string }>;
}

const periods = ["Todos", "Triásico", "Jurásico", "Cretácico"];
const diets = ["Todas", "Carnívoro", "Herbívoro"];

export default async function DinosauriosPage({ searchParams }: Props) {
  const { period, diet } = await searchParams;
  const results = filterDinosaurs(period, diet);
  const total = getAllDinosaurs().length;

  const buildLink = (p?: string, d?: string) => {
    const params = new URLSearchParams();
    if (p && p !== "Todos") params.set("period", p);
    if (d && d !== "Todas") params.set("diet", d);
    const query = params.toString();
    return query ? `/dinosaurios?${query}` : "/dinosaurios";
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="Catálogo de dinosaurios"
        subtitle={`${results.length} de ${total} dinosaurios en la colección`}
      />

      <form
        method="get"
        action="/dinosaurios"
        className="rounded-2xl bg-white p-5 shadow-md border border-arena-200 flex flex-col md:flex-row gap-4 md:items-end"
      >
        <label className="flex-1 text-sm font-medium text-selva-900">
          Período
          <select
            name="period"
            defaultValue={period ?? "Todos"}
            className="mt-1 w-full rounded-xl border border-arena-200 bg-crema-50 px-3 py-2"
          >
            {periods.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="flex-1 text-sm font-medium text-selva-900">
          Alimentación
          <select
            name="diet"
            defaultValue={diet ?? "Todas"}
            className="mt-1 w-full rounded-xl border border-arena-200 bg-crema-50 px-3 py-2"
          >
            {diets.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-full bg-selva-700 px-6 py-2.5 font-semibold text-white hover:bg-selva-600 transition-colors"
        >
          🔍 Filtrar
        </button>
        <Link
          href="/dinosaurios"
          className="rounded-full border-2 border-selva-700 px-6 py-2 text-center font-semibold text-selva-700 hover:bg-selva-50 transition-colors"
        >
          Limpiar
        </Link>
      </form>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span className="py-1 font-medium text-tierra-700">Atajos:</span>
        {periods.map((p) => (
          <Link
            key={p}
            href={buildLink(p, diet)}
            className={`rounded-full px-3 py-1 border transition-colors ${
              (period ?? "Todos") === p
                ? "bg-selva-700 text-white border-selva-700"
                : "border-arena-300 text-tierra-700 hover:border-selva-600"
            }`}
          >
            {p}
          </Link>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-md border border-arena-200">
          <p className="text-6xl">🦴</p>
          <h2 className="mt-4 text-xl font-bold text-selva-900">
            No se encontraron dinosaurios
          </h2>
          <p className="mt-2 text-sm text-tierra-700">
            No hay dinosaurios con ese filtro en esta colección.
            Prueba con otro filtro.
          </p>
          <Link
            href="/dinosaurios"
            className="mt-5 inline-block rounded-full bg-selva-700 px-6 py-2.5 font-semibold text-white hover:bg-selva-600 transition-colors"
          >
            Ver todos
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((dinosaur) => (
            <DinosaurCard key={dinosaur.id} dinosaur={dinosaur} />
          ))}
        </div>
      )}

      <p className="mt-8 text-center text-sm text-tierra-700">
        💡 Esta página usa <strong>SSR</strong>: el servidor genera el HTML
        filtrado en cada visita según los parámetros de la URL.
      </p>
    </div>
  );
}
