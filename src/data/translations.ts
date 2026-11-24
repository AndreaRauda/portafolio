
export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Estudiante de tecnología y desarrollo",
      description:
        "Me interesa la programación, la inteligencia artificial y el desarrollo de soluciones tecnológicas innovadoras.",
      projectsButton: "Ver proyectos",
      contactButton: "Contáctame",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Technology and Development Student",
      description:
        "I'm interested in programming, artificial intelligence, and developing innovative technological solutions.",
      projectsButton: "View projects",
      contactButton: "Contact me",
    },
  },
};

export type Language = keyof typeof translations;
