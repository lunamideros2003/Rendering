import Link from "next/link";
import type { Era } from "@/data/eras";

export default function EraCard({ era }: { era: Era }) {
  return (
    <div className="rounded-2xl bg-white shadow-md border border-arena-200 overflow-hidden">
      <div className="bg-selva-800 text-crema-50 px-6 py-5 flex items-center gap-4">
        <span className="text-5xl">{era.emoji}</span>
        <div>
          <h3 className="text-2xl font-bold">{era.name}</h3>
          <p className="text-sm text-crema-100/80">{era.timeRange}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-tierra-700">
          <span className="font-semibold">Duración:</span> {era.duration}
        </p>
        <p className="mt-2 text-sm text-tierra-700">
          <span className="font-semibold">Clima:</span> {era.climate}
        </p>
        <Link
          href="/eras"
          className="mt-4 inline-block rounded-full bg-selva-700 px-5 py-2 text-sm font-semibold text-white hover:bg-selva-600 transition-colors"
        >
          Ver detalles de la era
        </Link>
      </div>
    </div>
  );
}
