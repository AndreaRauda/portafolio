
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import type { Language } from "@/data/translations";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  links?: {
    label: string;
    url: string;
  }[];
  details: string;
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const es = language === "es";

  const projects: Project[] = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "SortlyScan",
      description: es
        ? "Plataforma educativa enfocada en la clasificación de residuos y el aprendizaje sobre el reciclaje."
        : "Educational platform focused on waste classification and recycling awareness.",
      technologies: ["Web Development", "Backend", "Education"],
      link: "https://github.com/waltdev16/SortlyScan_ExpoTech",
      linkLabel: "GitHub",
      details: es
        ? "Proyecto desarrollado en equipo para promover la educación ambiental mediante una plataforma de clasificación de residuos. Mi participación se concentró principalmente en el área de backend, además de apoyar en traducción y algunas tareas de frontend. Se realizó una prueba en dos centros educativos y el 90 % de los estudiantes participantes indicó que la herramienta era útil."
        : "Team project designed to promote environmental education through a waste classification platform. My contribution focused mainly on backend development, with additional support in translation and some frontend tasks. A test was conducted in two schools, where 90% of participating students said the tool was helpful.",
    },
    {
      number: "02",
      category: "DATA ANALYSIS",
      title: "Hotspots Comerciales",
      description: es
        ? "Análisis y agrupación de zonas comerciales mediante técnicas de aprendizaje automático."
        : "Analysis and clustering of commercial areas using machine learning techniques.",
      technologies: ["Python", "Pandas", "K-Means", "KNN", "Streamlit"],
      details: es
        ? "Proyecto de análisis geoespacial que estudia la distribución de 11 sucursales de Wendy's en San Salvador. Utiliza K-Means para identificar agrupaciones comerciales y KNN con distancia Haversine para evaluar nuevas ubicaciones."
        : "Geospatial analysis project studying the distribution of 11 Wendy's locations in San Salvador. It uses K-Means to identify commercial clusters and KNN with Haversine distance to evaluate new locations.",
      links: [
        {
          label: es ? "Repositorio" : "Repository",
          url: "https://github.com/AndreaRauda/hotspots-comerciales",
        },
        {
          label: es ? "Presentación" : "Presentation",
          url: "https://canva.link/8oqwiq9e31apia5",
        },
        {
          label: es ? "Informe PDF" : "PDF Report",
          url: "/projects/hotspots/Informe.pdf",
        },
      ],
    },
    {
      number: "03",
      category: "PYTHON DEVELOPMENT",
      title: "Laberinto interactivo",
      description: es
        ? "Juego de laberinto procedural desarrollado originalmente en Python y adaptado posteriormente para jugar desde el navegador."
        : "Procedural maze game originally developed in Python and later adapted to be played directly in the browser.",
      technologies: [
        "Python",
        "Pygame",
        "DFS",
        "BFS",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      details: es
        ? "Proyecto individual que genera laberintos aleatorios mediante el algoritmo Depth-First Search (DFS) y encuentra la ruta más corta mediante Breadth-First Search (BFS). Cuenta con movimiento mediante teclado, contador de pasos y sistema de pistas. La versión original fue desarrollada en Python con Pygame y posteriormente se creó una adaptación web."
        : "Individual project that generates random mazes using Depth-First Search (DFS) and finds the shortest path using Breadth-First Search (BFS). It includes keyboard movement, a step counter and a hint system. The original version was developed in Python with Pygame and later adapted for the web.",
      links: [
        {
          label: es ? "Código Python" : "Python Source",
          url: "https://github.com/AndreaRauda/Laberinto-DFS-BFS",
        },
        {
          label: es ? "Probar juego" : "Play Game",
          url: "/projects/laberinto2/index.html"
        },
      ],
    },
    {
      number: "04",
      category: "MACHINE LEARNING",
      title: "Regresión lineal",
      description: es
        ? "Modelo predictivo que analiza la relación entre las horas de estudio y los resultados académicos."
        : "Predictive model analyzing the relationship between study hours and academic performance.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      details: es
        ? "Proyecto académico que utiliza regresión lineal para analizar datos de ejemplo sobre horas de estudio y calificaciones. El modelo realiza predicciones dentro del rango de datos disponible y se evalúa mediante métricas como R² y error cuadrático medio."
        : "Academic project using linear regression to analyze sample data about study hours and grades. The model makes predictions within the available data range and is evaluated using metrics such as R² and mean squared error.",
      links: [
        {
          label: es ? "Repositorio" : "Repository",
          url: "https://github.com/AndreaRauda/Regresion-Lineal",
        },
      ],
    },
    {
      number: "05",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "AI Challenge",
      description: es
        ? "Exploración de algoritmos de inteligencia artificial para clasificación y agrupación de datos."
        : "Exploration of artificial intelligence algorithms for data classification and clustering.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "K-Means",
        "KNN",
        "Scikit-learn",
      ],
      details: es
        ? "Proyecto basado en un conjunto de datos simulado de 500 estudiantes. Se utilizaron K-Means para agrupar datos y KNN para clasificar estudiantes como aprobados o reprobados. También se comparó el rendimiento del modelo con datos normalizados y sin normalizar."
        : "Project based on a simulated dataset of 500 students. K-Means was used to cluster data and KNN to classify students as passing or failing. Model performance was also compared using normalized and non-normalized data.",
      links: [
        {
          label: es ? "Repositorio" : "Repository",
          url: "https://github.com/AndreaRauda/AI-Challenge-KMeans-KNN",
        },
      ],
    },
    {
      number: "06",
      category: "WEB DEVELOPMENT",
      title: "El Horóscopo",
      description: es
        ? "Sitio web desarrollado con HTML y CSS para explorar los doce signos zodiacales."
        : "Website developed with HTML and CSS to explore the twelve zodiac signs.",
      technologies: ["HTML5", "CSS3"],
      details: es
        ? "Proyecto web académico organizado en diferentes páginas temáticas. Presenta información de los signos zodiacales agrupados en los cuatro elementos: agua, aire, fuego y tierra. Incluye imágenes y hojas de estilo propias."
        : "Academic web project organized into different thematic pages. It presents information about zodiac signs grouped into the four elements: water, air, fire and earth. It includes images and custom stylesheets.",
      links: [
        {
          label: es ? "Repositorio" : "Repository",
          url: "https://github.com/AndreaRauda/Horoscopo-Web",
        },
        {
          label: es ? "Ver proyecto" : "View Project",
          url: "/projects/Horoscopo/proyecto.html",
        },
      ],
    },
    {
      number: "07",
      category: "APP DEVELOPMENT",
      title: "Voltify",
      description: es
        ? "Aplicación desarrollada con Microsoft Power Apps como solución tecnológica."
        : "Application developed with Microsoft Power Apps as a technological solution.",
      technologies: ["Power Apps", "App Development"],
      link: "https://apps.powerapps.com/play/e/default-d8e3bd44-0bba-426b-952d-ada7bb17393c/a/7e7fec02-b2f4-4706-a6ad-2f4a6ce2d9f8?tenantId=d8e3bd44-0bba-426b-952d-ada7bb17393c&sourcetime=1795528860736",
      linkLabel: es ? "Ver aplicación" : "View application",
      details: es
        ? "Proyecto realizado en equipo utilizando Microsoft Power Apps. Mi participación estuvo principalmente relacionada con el backend, además de colaborar en algunas tareas de traducción y frontend."
        : "Team project developed using Microsoft Power Apps. My contribution was mainly related to backend tasks, with additional support in translation and frontend work.",
    },
  ];

  const skills = [
    {
      icon: <Code2 size={21} />,
      title: es ? "Desarrollo" : "Development",
      items: ["Python", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Brain size={21} />,
      title: es ? "Inteligencia artificial" : "Artificial Intelligence",
      items: ["K-Means", "KNN", "Regression", "Classification"],
    },
    {
      icon: <Database size={21} />,
      title: es ? "Datos" : "Data",
      items: ["Pandas", "NumPy", "Data Analysis"],
    },
    {
      icon: <GitBranch size={21} />,
      title: es ? "Herramientas" : "Tools",
      items: ["Git", "GitHub", "VS Code", "Power Apps"],
    },
  ];

  const softSkills = es
    ? [
        "Trabajo en equipo",
        "Resolución de problemas",
        "Adaptabilidad",
        "Responsabilidad",
        "Comunicación",
        "Aprendizaje continuo",
        "Pensamiento lógico",
        "Creatividad",
      ]
    : [
        "Teamwork",
        "Problem-solving",
        "Adaptability",
        "Responsibility",
        "Communication",
        "Continuous learning",
        "Logical thinking",
        "Creativity",
      ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#101C2C] text-[#F1F5F9]">
      <Navbar language={language} setLanguage={setLanguage} />

      
      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[90vh] items-center px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="absolute right-0 top-20 -z-0 h-72 w-72 rounded-full bg-[#35D6C0]/10 blur-[120px]" />
        
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.3fr_0.7fr]">
        
          {/* TEXTO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-[#35D6C0]">
              PORTFOLIO 2026
            </p>
        
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Andrea Beatriz
              <span className="block text-[#35D6C0]">
                Mejia Rauda.
              </span>
            </h1>
        
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#AAB8C8]">
              {es
                ? "Estudiante interesada en la programación, la tecnología y el desarrollo de soluciones innovadoras."
                : "Student interested in programming, technology and the development of innovative solutions."}
            </p>
              
            <p className="mt-3 text-base text-[#AAB8C8]">
              {es
                ? "Aspirante a Ingeniería en Mecatrónica y Robótica."
                : "Aspiring Mechatronics and Robotics Engineer."}
            </p>
              
            {/* BOTONES */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-3 rounded-full bg-[#35D6C0] px-7 py-3.5 font-semibold text-[#101C2C] transition hover:bg-[#72eadb]"
              >
                {es ? "Explorar proyectos" : "Explore projects"}
                <ArrowUpRight size={19} />
              </a>
              
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full border border-[#526477] px-7 py-3.5 font-medium transition hover:border-[#35D6C0] hover:text-[#35D6C0]"
              >
                {es ? "Contactarme" : "Contact me"}
                <Mail size={18} />
              </a>
            </div>
              
            {/* INDICADOR DE DESPLAZAMIENTO */}
            <div className="mt-16 flex items-center gap-3 text-sm text-[#AAB8C8]">
              <span className="h-px w-12 bg-[#35D6C0]" />
              {es ? "Desliza para conocer más" : "Scroll to discover more"}
              <ArrowDown size={16} className="text-[#35D6C0]" />
            </div>
          </motion.div>
              
          {/* FOTOGRAFÍA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-[#34465A] bg-[#1B2B3D] p-4"
          >
            <div className="absolute inset-4 z-10 rounded-[1.5rem] border border-[#35D6C0]/30 pointer-events-none" />
              
            <img
              src="/images/perfil.jpg"
              alt="Fotografía de Andrea"
              className="h-full w-full rounded-[1.5rem] object-cover object-center"
            />
      
            <span className="absolute -right-1 top-12 z-20 h-5 w-5 rounded-full bg-[#35D6C0]" />
              
            <span className="absolute -bottom-1 left-12 z-20 h-5 w-5 rounded-full border-2 border-[#35D6C0] bg-[#101C2C]" />
          </motion.div>
              
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="sobre-mi"
        className="border-t border-[#34465A] px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
              01 / {es ? "PERFIL" : "PROFILE"}
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              {es ? "Sobre mí" : "About me"}
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#D5DEE8]">
              {es
                ? "Soy estudiante de bachillerato con formación en informática e inglés. Me interesa aprender sobre programación, inteligencia artificial y nuevas tecnologías, y aplicar mis conocimientos en proyectos que aporten soluciones."
                : "I am a high school student with training in computer science and English. I am interested in programming, artificial intelligence and new technologies, and applying my knowledge to projects that provide solutions."}
            </p>

            <p className="mt-6 leading-8 text-[#AAB8C8]">
              {es
                ? "Me considero una persona responsable, perseverante y abierta a nuevos desafíos. Disfruto trabajar en equipo, aprender de otras personas y desarrollar mis habilidades constantemente."
                : "I consider myself responsible, persistent and open to new challenges. I enjoy teamwork, learning from others and continuously developing my skills."}
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experiencia"
        className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
            02 / {es ? "FORMACIÓN" : "BACKGROUND"}
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            {es ? "Experiencia y aprendizaje" : "Experience & Learning"}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-8">
              <span className="text-sm tracking-widest text-[#35D6C0]">
                EDUCATION
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                Centro ¡Supérate! Fundación Frech
              </h3>
              <p className="mt-3 leading-7 text-[#AAB8C8]">
                {es
                  ? "Formación en informática, inglés y valores, con énfasis en el desarrollo de habilidades tecnológicas y personales."
                  : "Training in computer science, English and values, with an emphasis on developing technological and personal skills."}
              </p>
            </div>

            <div className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-8">
              <span className="text-sm tracking-widest text-[#35D6C0]">
                EDUCATION
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                Instituto Emiliani
              </h3>
              <p className="mt-3 leading-7 text-[#AAB8C8]">
                {es
                  ? "Bachillerato General con Diplomado en Inglés."
                  : "General High School Diploma with an English Diploma."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
            03 / {es ? "TRABAJO" : "WORK"}
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold">
              {es ? "Proyectos destacados" : "Featured Projects"}
            </h2>
            <p className="max-w-md leading-7 text-[#AAB8C8]">
              {es
                ? "Una selección de proyectos académicos y tecnológicos en los que he participado."
                : "A selection of academic and technological projects I have participated in."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.number}
                whileHover={{ y: -6 }}
                className="group flex min-w-0 flex-col rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7 transition hover:border-[#35D6C0]/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[#35D6C0]">
                    {project.number}
                  </span>
                  <span className="text-right text-xs tracking-widest text-[#AAB8C8]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-9 text-2xl font-semibold transition group-hover:text-[#35D6C0]">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-[80px] leading-7 text-[#AAB8C8]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#526477] px-3 py-1 text-xs text-[#D5DEE8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold text-[#35D6C0] transition hover:text-white"
                  >
                    {es ? "Conocer proyecto" : "Learn more"}
                    <ArrowUpRight className="ml-1 inline" size={16} />
                  </button>

                  {project.links ? (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((item) => (
                        <a
                          key={item.label}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#526477] px-3 py-2 text-xs text-[#D5DEE8] transition hover:border-[#35D6C0] hover:text-[#35D6C0]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} - ${project.linkLabel}`}
                      className="rounded-full border border-[#526477] p-2 transition hover:border-[#35D6C0] hover:text-[#35D6C0]"
                    >
                      <ExternalLink size={17} />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="my-auto w-full max-w-2xl rounded-3xl border border-[#526477] bg-[#1B2B3D] p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm tracking-widest text-[#35D6C0]">
                {selectedProject.category}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-[#AAB8C8] transition hover:text-white"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              {selectedProject.title}
            </h3>

            <p className="mt-5 leading-8 text-[#AAB8C8]">
              {selectedProject.details}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#526477] px-3 py-1 text-xs text-[#D5DEE8]"
                >
                  {technology}
                </span>
              ))}
            </div>

            {selectedProject.links && (
              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.links.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#35D6C0] px-5 py-3 text-sm font-semibold text-[#101C2C] transition hover:bg-[#72eadb]"
                  >
                    {item.label}
                    <ArrowUpRight size={17} />
                  </a>
                ))}
              </div>
            )}

            {!selectedProject.links && selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#35D6C0] px-6 py-3 font-semibold text-[#101C2C] transition hover:bg-[#72eadb]"
              >
                {selectedProject.linkLabel}
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* SKILLS */}
      <section
        id="habilidades"
        className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
            04 / {es ? "CAPACIDADES" : "ABILITIES"}
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            {es ? "Habilidades" : "Skills"}
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7"
              >
                <div className="text-[#35D6C0]">{skill.icon}</div>
                <h3 className="mt-5 text-lg font-semibold">{skill.title}</h3>

                <ul className="mt-5 space-y-3 text-sm text-[#AAB8C8]">
                  {skill.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-8">
            <h3 className="text-xl font-semibold">
              {es ? "Habilidades personales" : "Soft Skills"}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#526477] px-4 py-2 text-sm text-[#D5DEE8]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="educacion" className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
              05 / {es ? "FUTURO" : "FUTURE"}
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              {es ? "Educación y objetivos" : "Education & Goals"}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-8">
            <GraduationCap size={34} className="text-[#35D6C0]" />

            <h3 className="mt-6 text-2xl font-semibold">
              {es
                ? "Ingeniería en Mecatrónica y Robótica"
                : "Mechatronics and Robotics Engineering"}
            </h3>

            <p className="mt-3 text-[#35D6C0]">Key Institute</p>

            <p className="mt-5 leading-8 text-[#AAB8C8]">
              {es
                ? "Mi objetivo académico es continuar desarrollándome en el área tecnológica y estudiar una carrera que combine programación, electrónica, mecánica y robótica."
                : "My academic goal is to continue developing in the technology field and pursue a degree that combines programming, electronics, mechanics and robotics."}
            </p>
          </div>
        </div>
      </section>

      
      {/* CONTACT */}
      <section
        id="contacto"
        className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
            06 / {es ? "CONEXIÓN" : "CONNECTION"}
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            {es ? "Hablemos" : "Let's connect"}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#AAB8C8]">
            {es
              ? "Estoy abierta a nuevas oportunidades de aprendizaje, colaboración y proyectos tecnológicos."
              : "I am open to new learning opportunities, collaborations and technological projects."}
          </p>
            
          {/* FORMULARIO */}
          <div className="mt-12 w-full rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-6 sm:p-9">
            <div className="mb-7">
              <h3 className="text-2xl font-semibold">
                {es ? "Envíame un mensaje" : "Send me a message"}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#AAB8C8]">
                {es
                  ? "Completa el formulario y me pondré en contacto contigo."
                  : "Complete the form and I will get back to you."}
              </p>
            </div>
                
            <ContactForm language={language} />
          </div>
                
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="mt-8 rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-6 sm:p-8">
            <h3 className="text-lg font-semibold">
              {es ? "También puedes encontrarme en" : "You can also find me at"}
            </h3>
                
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:raudaandrea055@gmail.com"
                className="flex min-w-0 items-center gap-4 rounded-xl border border-[#34465A] p-4 transition hover:border-[#35D6C0]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35D6C0]/10 text-[#35D6C0]">
                  <Mail size={21} />
                </span>
                
                <span className="min-w-0">
                  <span className="block text-xs text-[#AAB8C8]">
                    {es ? "Correo electrónico" : "Email address"}
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-[#D5DEE8]">
                    raudaandrea055@gmail.com
                  </span>
                </span>
              </a>
                
              <a
                href="https://github.com/AndreaRauda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-4 rounded-xl border border-[#34465A] p-4 transition hover:border-[#35D6C0]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35D6C0]/10 text-[#35D6C0]">
                  <GitBranch size={21} />
                </span>
                
                <span className="min-w-0">
                  <span className="block text-xs text-[#AAB8C8]">
                    GitHub
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[#D5DEE8]">
                    AndreaRauda
                  </span>
                </span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-[#35D6C0]" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#34465A] px-6 py-8 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#AAB8C8] md:flex-row">
          <p>© 2026 Andrea Beatriz Mejia Rauda</p>
          <p>
            {es
              ? "Diseñado y desarrollado con dedicación."
              : "Designed and developed with dedication."}
          </p>
        </div>
      </footer>
    </main>
  );
}
