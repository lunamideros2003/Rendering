export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "¿En qué período vivió el Tyrannosaurus Rex?",
    options: ["Triásico", "Jurásico", "Cretácico", "Pérmico"],
    correctAnswer: 2,
    explanation: "El T. Rex vivió al final del Cretácico, hace unos 68 - 66 millones de años.",
  },
  {
    question: "¿Qué dinosaurio tenía tres cuernos en la cara?",
    options: ["Stegosaurus", "Triceratops", "Diplodocus", "Velociraptor"],
    correctAnswer: 1,
    explanation: "Triceratops significa 'cara con tres cuernos' y usaba su gola para defenderse.",
  },
  {
    question: "¿Qué tamaño tenía realmente el Velociraptor?",
    options: [
      "Como un edificio",
      "Como un caballo",
      "Como un pavo",
      "Como un ratón",
    ],
    correctAnswer: 2,
    explanation: "Medía unos 2 metros de largo pero era bajo: pesaba entre 15 y 20 kg.",
  },
  {
    question: "¿Qué dinosaurio era un nadador que comía peces?",
    options: ["Ankylosaurus", "Spinosaurus", "Brachiosaurus", "Allosaurus"],
    correctAnswer: 1,
    explanation: "El Spinosaurus vivía en ríos y pantanos y cazaba peces gigantes.",
  },
  {
    question: "¿Qué pasó hace 66 millones de años?",
    options: [
      "Aparecieron los primeros dinosaurios",
      "Un asteroide extinguió a los dinosaurios no avianos",
      "Se formó el supercontinente Pangea",
      "Aparecieron los seres humanos",
    ],
    correctAnswer: 1,
    explanation:
      "El impacto de Chicxulub provocó la extinción de los dinosaurios no avianos.",
  },
  {
    question: "¿Qué animales actuales son descendientes de los dinosaurios?",
    options: ["Los cocodrilos", "Las aves", "Los tiburones", "Las serpientes"],
    correctAnswer: 1,
    explanation: "Las aves son dinosaurios que sobrevivieron a la extinción y siguen vivas hoy.",
  },
];
