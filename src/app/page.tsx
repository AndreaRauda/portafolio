
"use client";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { type Language } from "@/data/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");

  const es = language === "es";

  const projects = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "SortlyScan",
      description: es
        ? "Plataforma educativa enfocada en el reconocimiento y clasificación de residuos mediante tecnología."
        : "Educational platform focused on waste recognition and classification through technology.",
      tags: ["Web", "Backend", "Technology"],
      accent: "#35D6C0",
      visual: "sortly",
    },
    {
      number: "02",
      category: "DATA ANALYSIS",
      title: es ? "Hotspots Comerciales" : "Commercial Hotspots",
      description: es
        ? "Análisis de ubicaciones comerciales utilizando técnicas de agrupamiento y visualización de datos."
        : "Analysis of commercial locations using clustering techniques and data visualization.",
      tags: ["Python", "K-Means", "Data"],
      accent: "#7EA9F8",
      visual: "data",
    },
    {
      number: "03",
      category: "PYTHON DEVELOPMENT",
      title: es ? "Laberinto interactivo" : "Interactive Maze",
      description: es
        ? "Juego desarrollado en Python con generación de laberintos y búsqueda de caminos."
        : "Python game featuring maze generation and pathfinding.",
      tags: ["Python", "Pygame", "Algorithms"],
      accent: "#E9B77D",
      visual: "maze",
    },
    {
      number: "04",
      category: "MACHINE LEARNING",
      title: es ? "Modelos predictivos" : "Predictive Models",
      description: es
        ? "Prácticas de análisis de datos y regresión lineal para explorar relaciones y realizar predicciones."
        : "Data analysis and linear regression exercises to explore relationships and make predictions.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      accent: "#C49AF5",
      visual: "code",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#101C2C] text-[#F1F5F9]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* HERO */}
      <section
        id="home"
        className="hero-grid relative flex min-h-screen items-center px-6 pb-20 pt-40"
      >
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#35D6C0]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#35D6C0]">
                {es ? "Portafolio personal · 2026" : "Personal portfolio · 2026"}
              </p>
            </div>

            <p className="mb-3 text-lg text-[#AAB8C8]">
              {es ? "Hola, soy Andrea." : "Hello, I'm Andrea."}
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-7xl">
              {es ? "Ideas que se convierten en " : "Turning ideas into "}
              <span className="text-[#35D6C0]">
                {es ? "soluciones." : "solutions."}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#AAB8C8]">
              {es
                ? "Soy estudiante de tecnología, interesada en la programación, la inteligencia artificial y el desarrollo de proyectos que combinan creatividad e innovación."
                : "I'm a technology student interested in programming, artificial intelligence, and developing projects that combine creativity and innovation."}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#35D6C0] px-7 py-3.5 text-sm font-bold text-[#102331] transition hover:-translate-y-1 hover:bg-[#62E8D4]"
              >
                {es ? "Explorar proyectos" : "Explore projects"} ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#536477] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#35D6C0] hover:text-[#35D6C0]"
              >
                {es ? "Hablemos" : "Let's talk"}
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 border-t border-[#34465A] pt-7">
              <div>
                <p className="text-2xl font-bold text-white">04+</p>
                <p className="mt-1 text-xs text-[#8FA0B3]">
                  {es ? "Proyectos académicos" : "Academic projects"}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">01</p>
                <p className="mt-1 text-xs text-[#8FA0B3]">
                  {es ? "Objetivo: seguir creciendo" : "Goal: keep growing"}
                </p>
              </div>
            </div>
          </div>

          {/* Ilustración original con formas CSS */}
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#35D6C0]/30" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-[#7EA9F8]/30" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#34465A] bg-[#1B2B3D] p-7 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#34465A] pb-5">
                <span className="text-xs font-semibold tracking-widest text-[#AAB8C8]">
                  CREATIVE MINDSET
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#35D6C0]" />
              </div>

              <div className="relative flex aspect-square items-center justify-center">
                <div className="absolute h-[78%] w-[78%] rounded-full border border-dashed border-[#62778D]/50" />
                <div className="absolute h-[58%] w-[58%] rounded-full border border-[#35D6C0]/30" />

                <div className="relative flex h-44 w-44 items-center justify-center rounded-[2.5rem] bg-[#35D6C0] shadow-2xl shadow-[#35D6C0]/10 rotate-[-7deg]">
                  <div className="rotate-[7deg] text-center">
                    <p className="text-6xl font-black tracking-tighter text-[#102331]">
                      AR.
                    </p>
                    <p className="mt-2 text-[10px] font-bold tracking-[0.25em] text-[#102331]/70">
                      CREATE / LEARN
                    </p>
                  </div>
                </div>

                <div className="absolute left-2 top-12 rounded-xl border border-[#536477] bg-[#26394E] px-4 py-3 shadow-lg">
                  <span className="text-xl text-[#35D6C0]">{"</>"}</span>
                  <p className="mt-1 text-[9px] tracking-wider text-[#C4D0DC]">
                    CODE
                  </p>
                </div>

                <div className="absolute bottom-12 right-1 rounded-xl border border-[#536477] bg-[#26394E] px-4 py-3 shadow-lg">
                  <span className="text-xl text-[#7EA9F8]">✳</span>
                  <p className="mt-1 text-[9px] tracking-wider text-[#C4D0DC]">
                    IDEAS
                  </p>
                </div>

                <span className="absolute right-12 top-7 text-2xl text-[#E9B77D]">✦</span>
                <span className="absolute bottom-7 left-12 text-2xl text-[#C49AF5]">✳</span>
              </div>

              <div className="border-t border-[#34465A] pt-5">
                <p className="text-sm font-semibold text-white">
                  Andrea Beatriz Mejia Rauda
                </p>
                <p className="mt-1 text-xs text-[#8FA0B3]">
                  {es
                    ? "Tecnología · Desarrollo · Innovación"
                    : "Technology · Development · Innovation"}
                </p>
              </div>
            </div>

            <p className="mt-5 text-center text-xs tracking-widest text-[#71859A]">
              {es ? "APRENDER · CREAR · EVOLUCIONAR" : "LEARN · CREATE · EVOLVE"}
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding bg-[#142337]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">01 / {es ? "SOBRE MÍ" : "ABOUT ME"}</p>
            <h2 className="section-title mt-5">
              {es ? "Un poco sobre " : "A little about "}
              <span className="accent-text">{es ? "mí." : "me."}</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#C1CCD7]">
              {es
                ? "Soy una estudiante interesada en la tecnología y en cómo las ideas pueden transformarse en soluciones útiles. Durante mi formación he trabajado en proyectos de programación, desarrollo web y análisis de datos."
                : "I'm a student interested in technology and how ideas can become useful solutions. During my education, I've worked on programming, web development, and data analysis projects."}
            </p>
            <p className="mt-5 leading-8 text-[#8FA0B3]">
              {es
                ? "Me gusta aprender, enfrentar nuevos retos y colaborar con otras personas. Mi meta es continuar mi formación en Ingeniería en Mecatrónica y Robótica, explorando la conexión entre software, tecnología y creatividad."
                : "I enjoy learning, taking on new challenges, and collaborating with others. My goal is to continue studying Mechatronics and Robotics Engineering, exploring the connection between software, technology, and creativity."}
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                es ? "Aprendizaje continuo" : "Continuous learning",
                es ? "Trabajo en equipo" : "Teamwork",
                es ? "Resolución de problemas" : "Problem solving",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#34465A] bg-[#1B2B3D] p-4">
                  <span className="text-[#35D6C0]">✳</span>
                  <p className="mt-3 text-sm font-medium text-[#E4EBF2]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">02 / {es ? "EXPERIENCIA" : "EXPERIENCE"}</p>
          <h2 className="section-title mt-5">
            {es ? "Mi camino de " : "My learning "}
            <span className="accent-text">{es ? "aprendizaje." : "journey."}</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7">
              <p className="text-xs font-semibold tracking-widest text-[#35D6C0]">2026</p>
              <h3 className="mt-4 text-xl font-bold">SortlyScan</h3>
              <p className="mt-3 leading-7 text-[#AAB8C8]">
                {es
                  ? "Participación en el desarrollo de una plataforma educativa, principalmente en tareas de backend y apoyo en otras áreas del proyecto."
                  : "Participation in the development of an educational platform, mainly in backend tasks and support in other project areas."}
              </p>
            </div>
            <div className="rounded-2xl border border-[#34465A] bg-[#1B2B3D] p-7">
              <p className="text-xs font-semibold tracking-widest text-[#35D6C0]">
                {es ? "FORMACIÓN ACADÉMICA" : "ACADEMIC EXPERIENCE"}
              </p>
              <h3 className="mt-4 text-xl font-bold">Centro ¡Supérate!</h3>
              <p className="mt-3 leading-7 text-[#AAB8C8]">
                {es
                  ? "Desarrollo de habilidades informáticas, inglés, valores y participación en proyectos colaborativos."
                  : "Development of computer skills, English, values, and participation in collaborative projects."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-padding bg-[#142337]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-label">03 / {es ? "PORTAFOLIO" : "PORTFOLIO"}</p>
              <h2 className="section-title mt-5">
                {es ? "Proyectos " : "Selected "}
                <span className="accent-text">{es ? "destacados." : "projects."}</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#8FA0B3]">
              {es
                ? "Una selección de proyectos y ejercicios realizados durante mi formación."
                : "A selection of projects and exercises developed during my education."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="project-card group overflow-hidden rounded-2xl border border-[#34465A] bg-[#1B2B3D]"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#22364B]">
                  <div className="absolute left-5 top-5 text-xs font-semibold tracking-widest text-[#AAB8C8]">
                    PROJECT / {project.number}
                  </div>

                  {project.visual === "sortly" && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#35D6C0] text-4xl text-[#102331]">♻</div>
                      <div>
                        <p className="text-3xl font-bold text-white">Sortly</p>
                        <p className="text-sm text-[#35D6C0]">Scan · Learn · Recycle</p>
                      </div>
                    </div>
                  )}

                  {project.visual === "data" && (
                    <div className="flex h-36 items-end gap-3">
                      {[45, 80, 60, 100, 70, 90].map((height, i) => (
                        <div key={i} style={{ height: `${height}%` }} className="w-8 rounded-t-lg bg-[#7EA9F8] opacity-80" />
                      ))}
                    </div>
                  )}

                  {project.visual === "maze" && (
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`h-7 w-7 rounded-sm ${[0, 1, 5, 7, 9, 10, 12, 14, 17, 19, 20, 22].includes(i) ? "bg-[#E9B77D]" : "bg-[#40566C]"}`} />
                      ))}
                    </div>
                  )}

                  {project.visual === "code" && (
                    <div className="w-3/4 rounded-xl border border-[#536477] bg-[#101C2C] p-5 font-mono text-xs leading-7">
                      <p className="text-[#C49AF5]">model = LinearRegression()</p>
                      <p className="text-[#35D6C0]">model.fit(X, y)</p>
                      <p className="text-[#7EA9F8]">prediction = model.predict()</p>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-bold tracking-[0.2em]" style={{ color: project.accent }}>
                    {project.category}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="text-xl text-[#71859A] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#35D6C0]">↗</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#AAB8C8]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#40566C] px-3 py-1.5 text-[10px] text-[#B7C5D3]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label">04 / {es ? "HABILIDADES" : "SKILLS"}</p>
            <h2 className="section-title mt-5">
              {es ? "Herramientas para " : "Tools to "}
              <span className="accent-text">{es ? "crear." : "create."}</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#AAB8C8]">
              {es
                ? "Conocimientos que he desarrollado mediante clases, prácticas y proyectos académicos. Siempre estoy aprendiendo nuevas herramientas."
                : "Skills developed through classes, practice, and academic projects. I'm always learning new tools."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Python", "HTML & CSS", "JavaScript", "Pandas & NumPy", "Machine Learning", "Data Analysis"].map((skill, i) => (
              <div key={skill} className="rounded-xl border border-[#34465A] bg-[#1B2B3D] p-5 transition hover:border-[#35D6C0]">
                <span className="text-xs text-[#35D6C0]">0{i + 1}</span>
                <p className="mt-3 text-sm font-semibold text-[#E4EBF2]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section-padding bg-[#142337]">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">05 / {es ? "FORMACIÓN" : "EDUCATION"}</p>
          <h2 className="section-title mt-5">
            {es ? "Donde todo " : "Where it "}
            <span className="accent-text">{es ? "comienza." : "begins."}</span>
          </h2>

          <div className="mt-12 space-y-5">
            <div className="flex flex-col gap-3 border-l-2 border-[#35D6C0] py-2 pl-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Centro ¡Supérate! Fundación Frech</h3>
                <p className="mt-2 text-sm text-[#AAB8C8]">
                  {es ? "Informática · Inglés · Valores" : "Computer Science · English · Values"}
                </p>
              </div>
              <span className="text-xs text-[#35D6C0]">{es ? "Formación complementaria" : "Additional education"}</span>
            </div>
            <div className="flex flex-col gap-3 border-l-2 border-[#536477] py-2 pl-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Instituto Emiliani</h3>
                <p className="mt-2 text-sm text-[#AAB8C8]">
                  {es ? "Bachillerato General con Diplomado en Inglés" : "General High School Diploma with English Diploma"}
                </p>
              </div>
              <span className="text-xs text-[#8FA0B3]">{es ? "Educación media" : "High school"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm language={language} />

      <footer className="border-t border-[#34465A] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-bold text-white">Andrea Rauda<span className="text-[#35D6C0]">.</span></p>
          <p className="text-xs text-[#71859A]">© 2026 · {es ? "Diseñado y desarrollado por Andrea" : "Designed and developed by Andrea"}</p>
          <a href="#home" className="text-xs text-[#35D6C0] hover:text-white">{es ? "Volver arriba ↑" : "Back to top ↑"}</a>
        </div>
      </footer>
    </main>
  );
}
