export interface Era {
  id: string;
  name: string;
  timeRange: string;
  duration: string;
  climate: string;
  features: string[];
  featuredDinosaurs: string[];
  keyEvent: string;
  emoji: string;
}

export const eras: Era[] = [
  {
    id: "triasico",
    name: "Triásico",
    timeRange: "Hace 252 - 201 millones de años",
    duration: "Aproximadamente 51 millones de años",
    climate:
      "Cálido y seco en el interior del supercontinente Pangea, con grandes desiertos.",
    features: [
      "Aparecen los primeros dinosaurios (pequeños y veloces, como el Coelophysis).",
      "Todos los continentes estaban unidos en Pangea.",
      "Surgen los primeros mamíferos, también muy pequeños.",
    ],
    featuredDinosaurs: ["Coelophysis", "Plateosaurus", "Herrerasaurus"],
    keyEvent:
      "Terminó con una extinción masiva que eliminó a muchos reptiles competidores y permitió que los dinosaurios dominaran el planeta.",
    emoji: "🌵",
  },
  {
    id: "jurasico",
    name: "Jurásico",
    timeRange: "Hace 201 - 145 millones de años",
    duration: "Aproximadamente 56 millones de años",
    climate:
      "Cálido y húmedo, con selvas exuberantes y mares poco profundos.",
    features: [
      "Época dorada de los dinosaurios gigantes de cuello largo (saurópodos).",
      "Aparecen las primeras aves, como el Archaeopteryx.",
      "Pangea comienza a dividirse en continentes.",
    ],
    featuredDinosaurs: ["Brachiosaurus", "Stegosaurus", "Diplodocus", "Allosaurus"],
    keyEvent:
      "Los dinosaurios se convierten en los animales terrestres dominantes en todo el mundo.",
    emoji: "🌿",
  },
  {
    id: "cretacico",
    name: "Cretácico",
    timeRange: "Hace 145 - 66 millones de años",
    duration: "Aproximadamente 79 millones de años",
    climate:
      "Cálido al inicio y más frío hacia el final, con niveles del mar muy altos.",
    features: [
      "Aparecen las plantas con flores y se expanden por el planeta.",
      "Viven los dinosaurios más famosos: T. Rex, Triceratops y Velociraptor.",
      "Los continentes ya tienen una forma parecida a la actual.",
    ],
    featuredDinosaurs: [
      "Tyrannosaurus Rex",
      "Triceratops",
      "Velociraptor",
      "Spinosaurus",
    ],
    keyEvent:
      "Terminó con el impacto de un asteroide en Chicxulub (México), que extinguió a los dinosaurios no avianos.",
    emoji: "🌋",
  },
];
