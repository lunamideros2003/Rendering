import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import DinosaurCard from "@/components/DinosaurCard";
import EraCard from "@/components/EraCard";
import { eras } from "@/data/eras";
import { getAllDinosaurs } from "@/data/dinosaurs";

const featured = ["t-rex", "triceratops", "brachiosaurus"]
  .map((id) => getAllDinosaurs().find((d) => d.id === id)!);

export default function Home() {
  return (
    <>
      <section className="bg-selva-900 text-crema-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-arena-300">
              Museo virtual interactivo
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              DinoMundo
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-crema-100/90">
              Museo virtual de la vida prehistórica
            </p>
            <p className="mt-4 text-crema-100/70">
              Viaja 200 millones de años atrás: descubre dinosaurios, explora
              las eras geológicas, observa fósiles y pon a prueba lo aprendido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dinosaurios"
                className="rounded-full bg-arena-300 px-6 py-3 font-semibold text-selva-950 hover:bg-arena-200 transition-colors"
              >
                🦕 Explorar museo
              </Link>
              <Link
                href="/eras"
                className="rounded-full border-2 border-crema-50/60 px-6 py-3 font-semibold hover:bg-selva-700 transition-colors"
              >
                Conocer dinosaurios
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-3xl bg-gradient-to-br from-selva-700 via-selva-800 to-selva-950 border border-selva-700 shadow-2xl px-10 py-14 text-center">
              <p className="text-8xl md:text-9xl">🦖</p>
              <p className="mt-4 text-sm uppercase tracking-widest text-arena-300">
                Hace 66 millones de años...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <SectionTitle
          title="Bienvenido al museo"
          subtitle="Tres grandes eras, decenas de criaturas fascinantes y una historia de 180 millones de años"
        />
        <p className="mx-auto max-w-3xl text-tierra-700">
          DinoMundo es un pequeño museo virtual creado con fines educativos.
          Recorre cada sala a tu ritmo: conoce a los dinosaurios más famosos,
          viaja por el Triásico, el Jurásico y el Cretácico, admira fósiles
          reales y descubre cómo terminó la era de los gigantes.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <SectionTitle title="Las tres eras" subtitle="La era Mesozoica, el reinado de los dinosaurios" />
        <div className="grid gap-6 md:grid-cols-3">
          {eras.map((era) => (
            <EraCard key={era.id} era={era} />
          ))}
        </div>
      </section>

      <section className="bg-crema-100/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            title="Dinosaurios destacados"
            subtitle="Las estrellas del museo"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((dinosaur) => (
              <DinosaurCard key={dinosaur.id} dinosaur={dinosaur} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/dinosaurios"
              className="inline-block rounded-full bg-selva-700 px-6 py-3 font-semibold text-white hover:bg-selva-600 transition-colors"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-2xl bg-selva-800 text-crema-50 p-8 text-center">
          <h3 className="text-2xl font-bold">¿Cuánto aprendiste hoy?</h3>
          <p className="mt-2 text-crema-100/80">
            Pon a prueba tus conocimientos en el quiz del Explorador.
          </p>
          <Link
            href="/explorador"
            className="mt-5 inline-block rounded-full bg-arena-300 px-6 py-3 font-semibold text-selva-950 hover:bg-arena-200 transition-colors"
          >
            Ir al Explorador 🧭
          </Link>
        </div>
      </section>
    </>
  );
}
