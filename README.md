# 🦕 DinoMundo — Museo virtual de la vida prehistórica

Proyecto frontend universitario: un pequeño museo virtual e interactivo sobre
dinosaurios y la prehistoria, creado para demostrar los cuatro patrones de
rendering de Next.js.

## Tecnologías

- **Next.js** (App Router) + **React** + **TypeScript** + **Tailwind CSS**
- Sin backend, sin base de datos, sin autenticación: los datos viven en archivos
  locales dentro de `src/data/`.

## Funcionalidades

- 🏠 Página principal con hero, eras, destacados y curiosidades
- 🦖 Catálogo de 12 dinosaurios con filtros por período y alimentación
- 📄 Ficha de detalle por dinosaurio
- 🌍 Páginas educativas: eras geológicas, fósiles y la gran extinción
- 🧭 Quiz interactivo del Explorador (6 preguntas, puntos y reinicio)
- 📱 Diseño responsive (computador, tablet y celular)

## Los 4 patrones de rendering

| Patrón | Página | Archivo clave |
| ------ | ------ | ------------- |
| CSR | `/explorador` | `src/components/Quiz.tsx` (`"use client"`) |
| SSR | `/dinosaurios` | `src/app/dinosaurios/page.tsx` (`force-dynamic` + `searchParams`) |
| SSG | `/eras`, `/extincion`, `/fosiles`, `/` | páginas con `force-static` |
| ISR | `/dinosaurios/[id]` | `generateStaticParams()` + `revalidate = 60` |

👉 Explicación completa en **[RENDERING.md](./RENDERING.md)**.

## Cómo instalar

```bash
npm install
```

## Cómo ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Para compilar y comprobar el tipo de cada ruta:

```bash
npm run build
npm start
```

## Estructura básica del proyecto

```
src/
├── app/
│   ├── page.tsx                  → Inicio (SSG)
│   ├── dinosaurios/
│   │   ├── page.tsx              → Catálogo con filtros (SSR)
│   │   └── [id]/page.tsx         → Ficha de dinosaurio (ISR)
│   ├── eras/page.tsx             → Eras geológicas (SSG)
│   ├── fosiles/page.tsx          → Galería de fósiles (SSG)
│   ├── extincion/page.tsx        → La gran extinción (SSG)
│   └── explorador/page.tsx       → Quiz (CSR)
├── components/
│   ├── Navbar.tsx / Footer.tsx
│   ├── DinosaurCard.tsx / EraCard.tsx / SectionTitle.tsx
│   └── Quiz.tsx                  → Client Component del quiz
└── data/
    ├── dinosaurs.ts              → 12 dinosaurios + funciones de consulta
    ├── eras.ts / fossils.ts / quiz.ts
```

Proyecto académico con fines educativos.
