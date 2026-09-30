export interface Fossil {
  id: string;
  name: string;
  period: string;
  location: string;
  description: string;
  emoji: string;
}

export const fossils: Fossil[] = [
  {
    id: "diente-trex",
    name: "Diente de T. Rex",
    period: "Cretácico",
    location: "Montana, EE. UU.",
    description:
      "Diente cónico y aserrado de unos 20 cm. Los tiranosaurios cambiaban de dientes durante toda su vida, como los tiburones actuales.",
    emoji: "🦷",
  },
  {
    id: "huella-sauropodo",
    name: "Huella de saurópodo",
    period: "Jurásico",
    location: "La Rioja, España",
    description:
      "Huella circular de más de 1 metro de diámetro dejada por un dinosaurio gigante de cuello largo al caminar sobre barro que luego se petrificó.",
    emoji: "👣",
  },
  {
    id: "huevo-dinosaurio",
    name: "Nido con huevos",
    period: "Cretácico",
    location: "Desierto de Gobi, Mongolia",
    description:
      "Huevos fosilizados dispuestos en círculo. Demuestran que algunos dinosaurios cuidaban a sus crías en nidos, como las aves.",
    emoji: "🥚",
  },
  {
    id: "femur-brachiosaurus",
    name: "Fémur de Brachiosaurus",
    period: "Jurásico",
    location: "Colorado, EE. UU.",
    description:
      "Hueso del muslo de casi 2 metros de largo. Los huesos huecos y las patas en forma de columna sostenían más de 35 toneladas.",
    emoji: "🦴",
  },
  {
    id: "ammonite",
    name: "Ammonite gigante",
    period: "Cretácico",
    location: "Madagascar",
    description:
      "Molusco marino de concha en espiral que nadaba en los mismos mares de la época de los dinosaurios. Desapareció en la misma extinción.",
    emoji: "🐚",
  },
  {
    id: "trilobite",
    name: "Trilobite",
    period: "Paleozoico (anterior a los dinosaurios)",
    location: "Marruecos",
    description:
      "Artrópodo marino mucho más antiguo que los dinosaurios. Vivió cientos de millones de años antes y es uno de los fósiles más comunes del mundo.",
    emoji: "🦐",
  },
];
