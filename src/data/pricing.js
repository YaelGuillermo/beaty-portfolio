const pricingData = [
  {
    price: "$100",
    plan: "Basic Facial",
    description: "Facial básico para una piel limpia y radiante",
    details: [
      "Limpieza profunda",
      "Exfoliación",
      "Mascarilla hidratante",
      "Masaje facial",
      "Protección solar",
    ],
    button: {
      text: "Leer más",
      url: "#",
      style: "muted",
    },
    subtext: "$50 por adelantado + $50 al completar",
  },
  {
    price: "$250",
    plan: "Anti-Aging Treatment",
    description: "Tratamiento avanzado para reducir signos de envejecimiento",
    details: [
      "Limpieza profunda",
      "Peeling químico",
      "Máscara de colágeno",
      "Masaje rejuvenecedor",
      "Terapia LED",
    ],
    button: {
      text: "Promoción",
      url: "#",
      style: "secondary",
    },
    subtext: "$125 por adelantado + $125 al completar",
    featured: true,
  },
  {
    price: "$400",
    plan: "Luxury Spa Day",
    description: "Un día completo de relajación y rejuvenecimiento",
    details: [
      "Tratamiento facial completo",
      "Masaje de cuerpo completo",
      "Manicura y pedicura",
      "Tratamiento capilar",
      "Acceso a sauna y jacuzzi",
    ],
    button: {
      text: "Leer más",
      url: "#",
      style: "muted",
    },
    subtext: "$200 por adelantado + $200 al completar",
  },
  {
    price: "$599",
    plan: "Facial Glow & Lift",
    description: "Tratamiento 'Estrella'",
    details: [
      "Técnica de lifting",
      "Hidratación intensa",
      "Recuperación de firmeza",
      "Recuperación de tersura",
      "Recuperación de luminosidad",
    ],
    button: {
      text: "Leer más",
      url: "#",
      style: "muted",
    },
    subtext: "",
  },
];

export default pricingData;
