import Quiz from "@/components/Quiz";
import SectionTitle from "@/components/SectionTitle";

export default function ExploradorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SectionTitle
        title="🧭 El Explorador"
        subtitle="Demuestra lo que aprendiste en el museo con este quiz interactivo"
      />
      <Quiz />
      <p className="mt-6 text-center text-sm text-tierra-700">
        💡 Esta página usa <strong>CSR</strong>: todo el quiz funciona en tu
        navegador con React, sin recargar la página.
      </p>
    </div>
  );
}
