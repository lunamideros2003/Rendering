export type Period = "Triásico" | "Jurásico" | "Cretácico";
export type Diet = "Carnívoro" | "Herbívoro";

export interface Dinosaur {
  id: string;
  name: string;
  scientificName: string;
  period: Period;
  diet: Diet;
  length: string;
  weight: string;
  habitat: string;
  description: string;
  funFact: string;
  emoji: string;
}

export const dinosaurs: Dinosaur[] = [
  {
    id: "t-rex",
    name: "Tyrannosaurus Rex",
    scientificName: "Tyrannosaurus rex",
    period: "Cretácico",
    diet: "Carnívoro",
    length: "12 - 13 metros",
    weight: "8 - 9 toneladas",
    habitat: "Llanuras y bosques de Norteamérica",
    description:
      "El depredador más famoso de la historia. Caminaba sobre dos patas, tenía una mandíbula capaz de triturar huesos y brazos muy pequeños en comparación con su enorme cuerpo.",
    funFact:
      "Sus dientes medían hasta 30 cm, ¡como el tamaño de un plátano grande!",
    emoji: "🦖",
  },
  {
    id: "triceratops",
    name: "Triceratops",
    scientificName: "Triceratops horridus",
    period: "Cretácico",
    diet: "Herbívoro",
    length: "8 - 9 metros",
    weight: "6 - 12 toneladas",
    habitat: "Praderas de Norteamérica",
    description:
      "Un dinosaurio con tres cuernos en la cara y una gran gola ósea en el cuello. La usaba para defenderse de depredadores como el T. Rex y para impresionar a otros triceratops.",
    funFact:
      "Su cráneo podía medir más de 2 metros: uno de los más grandes de cualquier animal terrestre.",
    emoji: "🦕",
  },
  {
    id: "velociraptor",
    name: "Velociraptor",
    scientificName: "Velociraptor mongoliensis",
    period: "Cretácico",
    diet: "Carnívoro",
    length: "2 metros",
    weight: "15 - 20 kg",
    habitat: "Desiertos de Asia central",
    description:
      "Mucho más pequeño de lo que muestran las películas: era del tamaño de un pavo. Era rápido, inteligente y tenía una garra curva en cada pie para atrapar a sus presas.",
    funFact:
      "Los científicos creen que tenía plumas, ¡como un ave moderna!",
    emoji: "🦅",
  },
  {
    id: "stegosaurus",
    name: "Stegosaurus",
    scientificName: "Stegosaurus stenops",
    period: "Jurásico",
    diet: "Herbívoro",
    length: "9 metros",
    weight: "4 - 5 toneladas",
    habitat: "Llanuras de Norteamérica",
    description:
      "Famoso por las placas óseas de su espalda y la cola con púas. Su cerebro era muy pequeño, del tamaño de una nuez, pero sobrevivió muy bien gracias a su armadura.",
    funFact:
      "Las placas de su espalda podrían haber servido para regular su temperatura corporal.",
    emoji: "🦕",
  },
  {
    id: "brachiosaurus",
    name: "Brachiosaurus",
    scientificName: "Brachiosaurus altithorax",
    period: "Jurásico",
    diet: "Herbívoro",
    length: "22 - 26 metros",
    weight: "35 - 40 toneladas",
    habitat: "Bosques de Norteamérica",
    description:
      "Un gigante de cuello larguísimo que comía hojas de las copas de los árboles. Sus patas delanteras eran más largas que las traseras, algo único entre los grandes saurópodos.",
    funFact:
      "Su corazón debía pesar unos 200 kg para bombear sangre hasta su cabeza.",
    emoji: "🦕",
  },
  {
    id: "spinosaurus",
    name: "Spinosaurus",
    scientificName: "Spinosaurus aegyptiacus",
    period: "Cretácico",
    diet: "Carnívoro",
    length: "14 - 15 metros",
    weight: "7 - 9 toneladas",
    habitat: "Ríos y pantanos del norte de África",
    description:
      "Más largo que el T. Rex y con una gran vela en la espalda. Era un excelente nadador y se alimentaba principalmente de peces gigantes.",
    funFact:
      "Es el dinosaurio carnívoro más largo que se conoce hasta hoy.",
    emoji: "🐊",
  },
  {
    id: "ankylosaurus",
    name: "Ankylosaurus",
    scientificName: "Ankylosaurus magniventris",
    period: "Cretácico",
    diet: "Herbívoro",
    length: "8 - 9 metros",
    weight: "5 - 6 toneladas",
    habitat: "Bosques de Norteamérica",
    description:
      "Un tanque viviente cubierto de placas y púas óseas, con una pesada maza en la cola capaz de romper los huesos de cualquier atacante.",
    funFact:
      "Incluso sus párpados estaban protegidos por pequeñas placas óseas.",
    emoji: "🐢",
  },
  {
    id: "diplodocus",
    name: "Diplodocus",
    scientificName: "Diplodocus longus",
    period: "Jurásico",
    diet: "Herbívoro",
    length: "24 - 26 metros",
    weight: "12 - 15 toneladas",
    habitat: "Llanuras de Norteamérica",
    description:
      "Uno de los dinosaurios más largos. Tenía un cuello larguísimo y una cola en forma de látigo que podía mover a gran velocidad para defenderse.",
    funFact:
      "Su cola tenía alrededor de 80 vértebras, ¡más que todo el cuerpo humano junto!",
    emoji: "🦕",
  },
  {
    id: "allosaurus",
    name: "Allosaurus",
    scientificName: "Allosaurus fragilis",
    period: "Jurásico",
    diet: "Carnívoro",
    length: "9 - 10 metros",
    weight: "2 - 3 toneladas",
    habitat: "Llanuras de Norteamérica",
    description:
      "El gran depredador del Jurásico, anterior al T. Rex. Tenía brazos más largos y fuertes que los del T. Rex, con tres garras afiladas en cada mano.",
    funFact:
      "Se han encontrado tantos fósiles suyos que es uno de los dinosaurios mejor estudiados.",
    emoji: "🦖",
  },
  {
    id: "parasaurolophus",
    name: "Parasaurolophus",
    scientificName: "Parasaurolophus walkeri",
    period: "Cretácico",
    diet: "Herbívoro",
    length: "9 - 10 metros",
    weight: "3 - 4 toneladas",
    habitat: "Bosques y pantanos de Norteamérica",
    description:
      "Famoso por la larga cresta curva de su cabeza. La usaba como una trompeta para comunicarse con su manada mediante sonidos graves.",
    funFact:
      "Los científicos recrearon el sonido de su cresta: sonaba como un trombón.",
    emoji: "🦕",
  },
  {
    id: "coelophysis",
    name: "Coelophysis",
    scientificName: "Coelophysis bauri",
    period: "Triásico",
    diet: "Carnívoro",
    length: "3 metros",
    weight: "25 - 30 kg",
    habitat: "Llanuras de Norteamérica",
    description:
      "Uno de los primeros dinosaurios del planeta. Era pequeño, ligero y muy veloz, con huesos huecos y dientes afilados para cazar lagartos y presas pequeñas.",
    funFact:
      "Se han encontrado cientos de esqueletos juntos: quizá vivía en grandes manadas.",
    emoji: "🦖",
  },
  {
    id: "plateosaurus",
    name: "Plateosaurus",
    scientificName: "Plateosaurus engelhardti",
    period: "Triásico",
    diet: "Herbívoro",
    length: "8 metros",
    weight: "4 toneladas",
    habitat: "Llanuras de Europa",
    description:
      "Uno de los primeros dinosaurios herbívoros grandes. Caminaba sobre dos patas, tenía un cuello largo y comía plantas bajas con sus dientes en forma de hoja.",
    funFact:
      "Fue uno de los primeros dinosaurios descritos por la ciencia, en 1837.",
    emoji: "🦕",
  },
];

export function getAllDinosaurs(): Dinosaur[] {
  return dinosaurs;
}

export function getDinosaurById(id: string): Dinosaur | undefined {
  return dinosaurs.find((d) => d.id === id);
}

export function getDinosaurIds(): string[] {
  return dinosaurs.map((d) => d.id);
}

export function filterDinosaurs(period?: string, diet?: string): Dinosaur[] {
  return dinosaurs.filter((d) => {
    const matchesPeriod = !period || period === "Todos" || d.period === period;
    const matchesDiet = !diet || diet === "Todas" || d.diet === diet;
    return matchesPeriod && matchesDiet;
  });
}
