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
      technologies: ["Python", "Pandas", "K-Means", "Streamlit"],
      details: es
        ? "Proyecto de análisis de datos que utiliza K-Means para identificar grupos de zonas comerciales. Se evaluaron diferentes cantidades de agrupaciones utilizando métricas como inercia y silhouette score."
        : "Data analysis project using K-Means to identify groups of commercial areas. Different cluster configurations were evaluated using metrics such as inertia and silhouette score.",
    },
    {
      number: "03",
      category: "PYTHON DEVELOPMENT",
      title: "Laberinto interactivo",
      description: es
        ? "Aplicación desarrollada en Python para generar y resolver laberintos."
        : "Python application designed to generate and solve mazes.",
      technologies: ["Python", "Pygame", "DFS", "BFS"],
      details: es
        ? "Proyecto individual que trabaja con algoritmos de búsqueda para explorar y resolver laberintos. Se utilizaron estrategias como Depth-First Search y Breadth-First Search."
        : "Individual project using search algorithms to explore and solve mazes. Strategies such as Depth-First Search and Breadth-First Search were implemented.",
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
        ? "Proyecto de análisis y predicción utilizando regresión lineal. Se trabajó con datos de horas de estudio y calificaciones, evaluando el modelo mediante métricas como R² y error cuadrático medio."
        : "Analysis and prediction project using linear regression. Study hours and grades were analyzed, evaluating the model with metrics such as R² and mean squared error.",
    },
    {
      number: "05",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "AI Challenge",
      description: es
        ? "Exploración de algoritmos de inteligencia artificial para clasificación y agrupación de datos."
        : "Exploration of artificial intelligence algorithms for data classification and clustering.",
      technologies: ["Python", "K-Means", "KNN", "Data Analysis"],
      details: es
        ? "Proyecto basado en un conjunto de datos simulado de 500 estudiantes. Se utilizaron K-Means para agrupar datos y KNN para clasificación, comparando resultados con datos normalizados y sin normalizar."
        : "Project based on a simulated dataset of 500 students. K-Means was used for clustering and KNN for classification, comparing results with normalized and non-normalized data.",
    },
    {
      number: "06",
      category: "WEB DEVELOPMENT",
      title: "El Horóscopo",
      description: es
        ? "Proyecto web desarrollado con tecnologías de frontend y recursos visuales."
        : "Web project developed using frontend technologies and visual resources.",
      technologies: ["HTML", "CSS", "JavaScript"],
      details: es
        ? "Proyecto de desarrollo web en el que se trabajó con estructura HTML, estilos CSS y funcionalidades JavaScript. Actualmente se encuentra pendiente de organizar y revisar algunos recursos y enlaces."
        : "Web development project involving HTML structure, CSS styling and JavaScript functionality. Some resources and links still need to be organized and reviewed.",
    },
    {
      number: "07",
      category: "APP DEVELOPMENT",
      title: "Voltify",
      description: es
        ? "Aplicación desarrollada con Power Apps como solución tecnológica."
        : "Application developed with Power Apps as a technological solution.",
      technologies: ["Power Apps", "Backend", "App Development"],
      link: "https://apps.powerapps.com/play/e/default-d8e3bd44-0bba-426b-952d-ada7bb17393c/a/7e7fec02-b2f4-4706-a6ad-2f4a6ce2d9f8?tenantId=d8e3bd44-0bba-426b-952d-ada7bb17393c&sourcetime=1795528860736",
      linkLabel: es ? "Ver aplicación" : "View application",
      details: es
        ? "Proyecto realizado en equipo utilizando Power Apps. Mi participación estuvo principalmente relacionada con el backend, además de colaborar en algunas tareas de traducción y frontend."
        : "Team project developed using Power Apps. My contribution was mainly related to backend tasks, with additional support in translation and frontend work.",
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
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-[#35D6C0]">
              PORTFOLIO 2026
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              {es ? "Andrea Beatriz" : "Andrea Beatriz"}
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

            <div className="mt-16 flex items-center gap-3 text-sm text-[#AAB8C8]">
              <span className="h-px w-12 bg-[#35D6C0]" />
              {es ? "Desliza para conocer más" : "Scroll to discover more"}
              <ArrowDown size={16} className="text-[#35D6C0]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center rounded-[2rem] border border-[#34465A] bg-[#1B2B3D] p-8"
          >
            <div className="absolute inset-4 rounded-[1.5rem] border border-[#35D6C0]/20" />
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#35D6C0]/10 text-[#35D6C0]">
                <Code2 size={48} strokeWidth={1.3} />
              </div>
              <p className="text-xl font-semibold">Technology</p>
              <p className="mt-2 text-sm tracking-widest text-[#AAB8C8]">
                LEARN · CREATE · INNOVATE
              </p>
            </div>
            <span className="absolute -right-3 top-12 h-5 w-5 rounded-full bg-[#35D6C0]" />
            <span className="absolute -bottom-3 left-12 h-5 w-5 rounded-full border-2 border-[#35D6C0] bg-[#101C2C]" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre-mi" className="border-t border-[#34465A] px-6 py-24 md:px-16 lg:px-24">
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
      <section id="experiencia" className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24">
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
                className="group flex flex-col rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7 transition hover:border-[#35D6C0]/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#35D6C0]">
                    {project.number}
                  </span>
                  <span className="text-xs tracking-widest text-[#AAB8C8]">
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

                <div className="mt-auto flex items-center justify-between gap-3 pt-8">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold text-[#35D6C0] transition hover:text-white"
                  >
                    {es ? "Conocer proyecto" : "Learn more"}
                    <ArrowUpRight className="ml-1 inline" size={16} />
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} - ${project.linkLabel}`}
                      className="rounded-full border border-[#526477] p-2 transition hover:border-[#35D6C0] hover:text-[#35D6C0]"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-[#526477] bg-[#1B2B3D] p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-widest text-[#35D6C0]">
                {selectedProject.category}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-[#AAB8C8] hover:text-white"
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

            {selectedProject.link && (
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
      <section id="habilidades" className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24">
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
      <section id="contacto" className="bg-[#142337] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#35D6C0]">
            06 / {es ? "CONEXIÓN" : "CONNECTION"}
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            {es ? "Hablemos" : "Let's connect"}
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-[#AAB8C8]">
            {es
              ? "Estoy abierta a nuevas oportunidades de aprendizaje, colaboración y proyectos tecnológicos."
              : "I am open to new learning opportunities, collaborations and technological projects."}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <a
                href="mailto:raudaandrea055@gmail.com"
                className="flex items-center gap-4 text-[#D5DEE8] transition hover:text-[#35D6C0]"
              >
                <Mail className="text-[#35D6C0]" />
                raudaandrea055@gmail.com
              </a>

              <a
                href="https://github.com/AndreaRauda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#D5DEE8] transition hover:text-[#35D6C0]"
              >
                <GitBranch className="text-[#35D6C0]" />
                GitHub / AndreaRauda
                <ArrowUpRight size={16} />
              </a>
            </div>

            <ContactForm language={language} />
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