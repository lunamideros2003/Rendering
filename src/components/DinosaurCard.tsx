import Link from "next/link";
import type { Dinosaur } from "@/data/dinosaurs";

export default function DinosaurCard({ dinosaur }: { dinosaur: Dinosaur }) {
  return (
    <Link
      href={`/dinosaurios/${dinosaur.id}`}
      className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-arena-200"
    >
      <div className="bg-gradient-to-br from-selva-100 to-arena-200 flex items-center justify-center py-8 text-7xl group-hover:scale-105 transition-transform">
        {dinosaur.emoji}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-selva-900">{dinosaur.name}</h3>
        <p className="text-sm italic text-tierra-500">{dinosaur.scientificName}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-selva-100 px-3 py-1 font-medium text-selva-800">
            {dinosaur.period}
          </span>
          <span className="rounded-full bg-crema-100 px-3 py-1 font-medium text-tierra-700">
            {dinosaur.diet}
          </span>
        </div>
      </div>
    </Link>
  );
}
