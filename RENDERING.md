# RENDERING.md — Los 4 patrones de rendering en DinoMundo

Este documento explica **dónde** se usa cada patrón, **por qué** y **cómo comprobarlo**
durante la exposición.

## Tabla resumen

| Patrón | Página | Motivo |
| ------ | ------ | ------ |
| CSR | `/explorador` | Interacción en el navegador (quiz con estado, puntos y reinicio) |
| SSR | `/dinosaurios` | Resultados generados en el servidor según parámetros de la URL |
| SSG | `/eras`, `/extincion`, `/fosiles`, `/` | Contenido estable que se genera una vez en el build |
| ISR | `/dinosaurios/[id]` | Contenido estático que se revalida cada 60 segundos |

---

## CSR — Client-Side Rendering

- **Dónde:** `/explorador` → componente `src/components/Quiz.tsx` (tiene `"use client"`).
- **Por qué:** el quiz necesita interactividad instantánea (elegir respuesta, ver si
  acertó, acumular puntos, avanzar, reiniciar). Todo eso es estado de React que vive
  en el navegador; no tiene sentido pedirle al servidor que lo genere.
- **Cómo comprobarlo:**
  1. Abre `/explorador` y responde: todo funciona sin recargar la página.
  2. Abre las DevTools (F12) → pestaña *Network*: al responder no hay peticiones nuevas.
  3. Ver código: `Quiz.tsx` usa `useState` y empieza con `"use client"`.

## SSR — Server-Side Rendering

- **Dónde:** `/dinosaurios` → `src/app/dinosaurios/page.tsx`
  (tiene `export const dynamic = "force-dynamic"` y lee `searchParams`).
- **Por qué:** el catálogo se filtra según la URL, por ejemplo
  `/dinosaurios?periodo=Jurásico` o `/dinosaurios?alimentacion=Carnívoro`.
  El servidor genera el HTML ya filtrado en cada visita: siempre está actualizado
  y es bueno para SEO. El formulario de filtros es un `<form method="get">` normal,
  sin JavaScript: el navegador pide la URL y el servidor responde la página lista.
- **Cómo comprobarlo:**
  1. Visita `/dinosaurios?periodo=Cretácico`: verás solo dinosaurios cretácicos.
  2. Cambia el parámetro en la barra del navegador y pulsa Enter: el contenido cambia.
  3. Clic derecho → *Ver código fuente*: los dinosaurios filtrados **ya están** en el HTML
     (el servidor los generó, no el navegador).
  4. En la terminal, `npm run build`: la ruta `/dinosaurios` aparece como dinámica (ƒ).

## SSG — Static Site Generation

- **Dónde:** `/eras`, `/extincion`, `/fosiles` y `/`
  (tienen `export const dynamic = "force-static"` o son estáticas por defecto).
- **Por qué:** la información de las eras geológicas, la extinción y los fósiles
  prácticamente no cambia. Generarla una sola vez en el build (`npm run build`)
  como archivos HTML es lo más rápido y barato: se sirve al instante.
- **Cómo comprobarlo:**
  1. Ejecuta `npm run build`: verás `○` (estático) junto a `/eras`, `/extincion`, `/fosiles`.
  2. Clic derecho → *Ver código fuente* en `/eras`: todo el contenido ya está en el HTML,
     sin JavaScript necesario.
  3. La página carga rapidísimo porque es un archivo pre-generado.

## ISR — Incremental Static Regeneration

- **Dónde:** `/dinosaurios/[id]` (ej. `/dinosaurios/t-rex`)
  → `src/app/dinosaurios/[id]/page.tsx`
  (tiene `generateStaticParams()` + `export const revalidate = 60`).
- **Por qué:** cada ficha se genera estáticamente en el build (rápida como SSG),
  pero si los datos cambian (ej. se corrige un dato en `data/dinosaurs.ts` y se
  redespliega), la página se **regenera en segundo plano** después de 60 segundos,
  sin reconstruir todo el sitio.
- **Cómo comprobarlo:**
  1. Ejecuta `npm run build`: verás las 12 rutas `/dinosaurios/[id]` pre-generadas (●).
  2. Visita `/dinosaurios/t-rex`: carga instantánea (HTML estático).
  3. Muestra el código: `generateStaticParams()` crea las 12 páginas y
     `revalidate = 60` define la ventana de revalidación.
  4. Explica en voz alta: *"estática, pero capaz de actualizarse"*.

---

## Frase para la exposición (30 segundos por patrón)

1. **CSR:** "El quiz vive en el navegador: React maneja el estado sin recargar."
2. **SSR:** "El catálogo se genera en el servidor en cada visita, según la URL."
3. **SSG:** "Las eras y la extinción casi no cambian: se generan una vez en el build."
4. **ISR:** "Cada ficha es estática, pero se revalida cada 60 segundos si hay cambios."
